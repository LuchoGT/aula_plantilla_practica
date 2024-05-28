import { AuthHeader } from "../sections/AuthHeader/AuthHeader";
import { Outlet } from "react-router-dom";
import "./AuthTemplate.scss";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export const AuthTemplate = () => {
  return (
    // <div className='auth-template'>
    //     <AuthHeader/>
    //     <Outlet/>
    //     {/* <AuthFooter/> */}
    // </div>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "#1D1A2380", padding: 4 }}
    >
      <Typography>Synnexa</Typography>
      <Grid
        item
        xs={3}
        sx={{
          width: { sm: 550 },
          backgroundColor: "#22294980",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Stack direction="row" justifyContent="center">
          <Avatar sx={{ bgcolor: "black"}}><AccountCircle/></Avatar>
        </Stack>
        <Typography variant="h4" textAlign="center">Ingresa y explora tu aula virtual</Typography>
        <Typography variant="h5" textAlign="center">Prepárate para aprender y crecer</Typography>

        <Outlet />
      </Grid>
    </Grid>
  );
};
