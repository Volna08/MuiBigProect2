import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea, Fab, Grid, IconButton, MenuItem, SvgIcon } from "@mui/material";
import { Divider } from "@mui/material";
import Stack from '@mui/material/Stack';
import "./styles.css"
import dayjs, { Dayjs } from "dayjs";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { DeleteOutline, Favorite} from "@mui/icons-material";
import cn from 'classnames'
import { Link } from "react-router-dom";

function stringToColor(string) {
  let hash = 0;
  let i;
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}
// function stringAvatar() {
//   return {
//     sx: {
//       bgcolor: stringToColor(author?.name),
//     },
//     children: `${author?.name.split(' ')[0][0]}${author?.name.split(' ')[1][0]}`,
//   };
// }


export const Post = ({
  onPostLike,
  likes, _id, currentUser, image, tags, title, text,
  // author: {name, email, avatar }, 
  author,
  created_at,
  onPostDelete
}) => {

  const dataFormated = dayjs(created_at).format('M/D/YYYY')
  const isLiked = likes.some(id => id === currentUser._id)

  function handleLikeClick() {
    onPostLike({ _id, likes })
    console.log({ _id, likes })
  }


  function handleDeletePost () {
     onPostDelete({_id});
    console.log({ _id })
  }

  return (
    <Grid container item xs={6} sm={4} md={3}>
      <Card className="mainCard" sx={{ maxWidth: 365, margin: 2 }}>
        {/* бордер не работает */}
        <Link to ={`/post/${_id}`}>
        <CardActions className="iconLike">
          <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
            {/* <FavoriteBorderIcon size="small" 
            sx={{ color: "red" }}
              className={cn('favorite-icon', { 'favorite-icon_active': isLiked })}
            /> */}
            {isLiked
              ? <Favorite sx={{ color: "blue" }} />
              // <FavoriteBorderIcon sx={{ color: "red" }} />
              : <FavoriteBorderIcon />}
            {isLiked
              ? <Typography variant="body2" sx={{ color: "blue" }} >{likes?.length}</Typography>
              : <Typography variant="body2" color="text.secondary">{likes?.length}</Typography>}
            {/* <Typography variant="body2" color="text.secondary">{likes?.length}</Typography> */}
          </IconButton>
        </CardActions>




        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dataFormated}
          </Typography>
        </CardContent>
        <Divider />


        <CardContent>
          <Stack display='flex' direction="row" spacing={2}>
            <Typography variant="h6" component="span">
              {/* <Avatar {...stringAvatar(author?.name)} /> */}
              <Avatar src={author?.avatar && author?.avatar} aria-label="recipe">
                {!author?.avatar && author?.name.slice(0, 1)}
              </Avatar>
              <Typography variant="h6" component="span">
                {author?.email}
              </Typography>
            </Typography>
          </Stack>
          <Divider />

          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>

        <Divider />
        <div className="tagsContainer">
          <div className="item">Tags:  </div>
          <div className="itemLine">{tags}</div>
        </div>
        <MenuItem className = "iconDel">
          <DeleteOutline sx={{ color: "blue" }}   onClick={ handleDeletePost }/>
         
        </MenuItem>
        </Link>
      </Card>
      
        </Grid>

  )
}