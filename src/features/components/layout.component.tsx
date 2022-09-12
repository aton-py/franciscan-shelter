import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PetsIcon from "@mui/icons-material/Pets";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Outlet, useNavigate } from "react-router-dom";
import pet from "../../assets/images/pets.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"PI - Senac Santo Amaro - "}
      <Link color="inherit" href="https://mui.com/">
        Github
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Layout() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            color="inherit"
            onClick={() => navigate("/")}
            noWrap
          >
            Abrigo Franciscano
          </Typography>
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => navigate("/register")}
          >
            <Typography variant="h6" color="inherit" noWrap>
              +
            </Typography>
            <PetsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundImage: `url(${pet})`,
        }}
        py={3}
      >
        <Container component="main" maxWidth="sm">
          <Outlet />
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
