import { Avatar, Container, Grid, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Calendar from "./calendar";

const Profile = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Avatar" />
            </Grid>
            <Grid item>
              <Typography variant="h3" gutterBottom component="div">
                Profile titles
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" gutterBottom>
                Some info about user
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Calendar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
