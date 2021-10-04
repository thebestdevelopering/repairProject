import { Grid } from "@mui/material";
import Footer from "../HomePage/Footer";
import Header from "../HomePage/Header";
import ProfilePage from "./ProfilePage";
import Services from "./Services";
import UserService from "./UserService";

function Profile() {
  return (
    <Grid>
      <Header />
      <ProfilePage />
      <Services />
      <UserService />
      <Footer />
    </Grid>
  );
}

export default Profile;
