import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const mainList = [
    {
      text: "Inbox",
      icon: <InboxIcon />,
      href: "#inbox",
    },
    {
      text: "Drafts",
      icon: <DraftsIcon />,
      href: "#drafts",
    },
  ];
  
  const secondaryList = [
    {
      text: "Trash",
      href: "#trash",
    },
    {
      text: "Spam",
      href: "#spam",
    },
  ];


  interface Props {
    NavLink: NavLinkProps;
    navArrayLinks: any[];
    setOpen: (open: boolean) => void;
  }
export const NavListDrawer = ({NavLink,navArrayLinks,setOpen}:Props) => {


  return (
    <Box
    sx={{ width: 250 }}
  >
    <nav aria-label="main mailbox folders">
      <List>
        {navArrayLinks.map((item) => (
          <ListItem
            disablePadding
            key={item.title}
          >
            <ListItemButton
              to={item.path}
              component={NavLink}
              onClick={()=>setOpen(false)}
            >
              {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
    <Divider />
  </Box>
  )
}
