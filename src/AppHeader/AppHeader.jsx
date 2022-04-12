import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';



export const AppHeader = ({user}) => {
  
return (
<AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          
          {/* <Button color="inherit">Login</Button> */}
          <div>
 
{/* <Button color="inherit">{user.email}</Button>  */}
<Button color="inherit">{user.name}</Button>
          </div>
        </Toolbar>
      </AppBar>
)
}

