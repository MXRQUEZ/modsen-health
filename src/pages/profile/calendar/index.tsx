import { Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { getCalendarEvents } from "@utils/getCalendarEvents";
import { loadGAPI, loadGIS } from "@/utils/googleAPI";
import { useDate } from "@/hooks/useDate";
import { getTimeBordersString } from "@/utils/getTimeBordersString";
import { ICalendarEvent } from "@/types/ICalendarEvent";
import { TokenClient } from "@/types/types";

const Calendar = () => {
  const [tokenClient, setTokenCLient] = useState<TokenClient>();
  const [events, setEvents] = useState<ICalendarEvent[]>([]);
  const date = useDate();

  useEffect(() => {
    let client: TokenClient;
    async function fetchData() {
      const res = await loadGAPI();
      console.log(res);
      client = await loadGIS();
    }
    fetchData().then(
      () => {
        console.log("GIS client successfully loaded for API");
        setTokenCLient(client);
      },
      () => {
        console.log("Smth wrong...");
      }
    );
  }, []);

  const onSignInClick = () => {
    getCalendarEvents(tokenClient, setEvents);
  };

  return (
    <Box>
      <Container>
        <Typography variant="h4" gutterBottom component="div">
          Upcoming Meetings
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          {date}
        </Typography>
        <Button variant="contained" onClick={onSignInClick}>
          Sign In
        </Button>
      </Container>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {events.length > 0 ? (
          events.map((event) => (
            <ListItem key={event.id}>
              <ListItemText
                primary={event.summary}
                secondary={getTimeBordersString(event.start.dateTime, event.end.dateTime)}
              />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="Sorry no events" />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default Calendar;
