import { Link, NavLink, Outlet } from "react-router-dom";
import { AulaHeader } from "../sections/AulaHeader/AulaHeader";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useAuthStore } from "@/hooks/useAuthStore";
import { ArrowDropDown } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { NavListDrawer } from "../sections/NavListDrawer/NavListDrawer";

interface Props {
  navArrayLinks: any[];
  navaArrayLinkUser: any[];
}
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const AulaTemplate = ({ navArrayLinks, navaArrayLinkUser }: Props) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { status, startLogout, user } = useAuthStore();

  const [open, setOpen] = useState<boolean>(false);
  return (
    // <>
    //     <AulaHeader/>
    //     <Outlet/>
    // </>
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          {/* ICON MENU */}
          <IconButton
            color="inherit"
            size="large"
            edge="start"
            aria-label="menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* TITLE */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Synnexa
          </Typography>

          {/* Box de inicio,cursos,... */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navArrayLinks.map((item) => (
              <Button
                key={item.title}
                sx={{ color: "#fff" }}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          {/* Box de user */}
          {/* <Box  sx={{ flexGrow: 0, gap: 1,display: { xs: "none", md: "flex" ,justifyContent:"center",alignItems:"center"}}}
          >
          <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          <Typography onClick={handleOpenUserMenu}>{user?.name}</Typography>
          <ArrowDropDown />
          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
          </Menu>
          </Box> */}

          <Box
            sx={{
              flexGrow: 0,
              gap: 1,
              display: { md: "flex", alignItems: "center" },
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Typography
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              onClick={handleOpenUserMenu}
            >
              {user?.name}
            </Typography>
            <ArrowDropDown
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {navaArrayLinkUser.map((item) => (
                <MenuItem key={item.title}>
                  <Typography
                    textAlign="center"
                    component={NavLink}
                    to={item.path}
                  >
                    {item.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <NavListDrawer
          NavLink={NavLink}
          navArrayLinks={navArrayLinks}
          setOpen={setOpen}
        />
      </Drawer>
      <Outlet />
    </>
  );
};
