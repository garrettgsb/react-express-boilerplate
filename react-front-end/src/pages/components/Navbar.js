import * as React from 'react';

import { Box, Drawer, AppBar, CssBaseline, Toolbar, List, Typography, Divider, ListItemButton, ListSubheader, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Header from './Header';

const drawerWidth = 240;


// MOCK DATA
const NavbarData = [
  {
    title: "Progress",
    // icon: <InsightsIcon/>,
    link: "/dashboard"
  },
  {
    title: "Program",
    // icon: <InsightsIcon/>,
    link: "/program"
  },

];

const Programs = [
  {
    key: 1,
    name: 'Full Body'
  },
  {
    key: 2,
    name: 'Bro Split'
  },
  {
    key: 3,
    name: 'Upper Lower'
  },
]




export default function Navbar() {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
      setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Header />
    </AppBar>
    
    <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
    >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
              <ListItemIcon>
                  <EqualizerIcon />
              </ListItemIcon>
              <ListItemText primary={NavbarData[0].title} />
          </ListItemButton>

          <ListItemButton onClick={handleClick}>
              <ListItemIcon>
              <FitnessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={NavbarData[1].title} />
              {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    {Programs.map((program) => (

                        <ListItemButton key={program.key} sx={{ pl: 4 }}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={program.name} />
                        </ListItemButton>

                    ))}
                </List>
            </Collapse>

            </List>
      </Box>
    </Drawer>


    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
        Content.
        </Typography>

    </Box>
    </Box>
  );
}


