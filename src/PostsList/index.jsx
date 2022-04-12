


import React  from "react";
import {  Grid} from "@mui/material";
import { Post } from "../Post"

export const PostsList = ({ postData, onPostLike, currentUser, onPostDelete }) => {
  return (
    <>
    <Grid container spacing={2}>
    {postData.map(dataPost => <Post key={dataPost._id} {...dataPost} onPostLike={onPostLike} currentUser={currentUser}
    onPostDelete={onPostDelete}/>)}
    </Grid>
    </>
    )
    }
