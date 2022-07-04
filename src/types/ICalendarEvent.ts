export interface ICalendarEvent {
  created: { email: string };
  end: { dateTime: string };
  start: { dateTime: string };
  htmlLink: string;
  summary: string;
  id: string;
}
