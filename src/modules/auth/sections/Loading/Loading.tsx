import { Grid } from "@mui/material";
import "./Loading.scss";

export const Loading = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "#1D1A2380", padding: 4 }}
    >
      {/* <Grid
        item
        xs={3}
        sx={{
          width: { sm: 550 },
          backgroundColor: "#22294980",
          padding: 3,
          borderRadius: 2,
        }}
      >
      </Grid> */}
        <span className="loader"></span>
    </Grid>
  );
};
