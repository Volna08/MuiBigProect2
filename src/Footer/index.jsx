import { AppBar, Box,  Button,  Toolbar } from "@mui/material";
import React from "react";


export const Footer = ({postsData}) => {
return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
    <Toolbar>
         
      <Box sx={{ flexGrow: 1 }} />
      <Button id='insertPub' color="inherit">Добавить публикацию</Button>
    </Toolbar>
  </AppBar>
)
}