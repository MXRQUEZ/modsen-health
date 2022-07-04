/* eslint-disable no-param-reassign */
import { ICalendarEvent } from "@/types/ICalendarEvent";
import { TokenClient } from "@/types/types";

export function getCalendarEvents(tokenClient: TokenClient, setEvents: (events: ICalendarEvent[]) => void) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tokenClient.callback = async (response: any) => {
    if (response.error !== undefined) {
      throw response;
    }

    try {
      const request = {
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      };
      response = await gapi.client.calendar.events.list(request);
      const events: ICalendarEvent[] = response.result.items as ICalendarEvent[];
      if (events && events.length > 0) {
        setEvents(events);
      }
    } catch (err) {
      console.log("Can't download events, error(");
    }
  };

  if (!gapi.client.getToken()) {
    tokenClient.requestAccessToken({ prompt: "consent" });
  } else {
    tokenClient.requestAccessToken({ prompt: "" });
  }
}
