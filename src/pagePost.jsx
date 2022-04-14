import React, { useEffect, useState } from "react";
import { AppHeader } from "./AppHeader/AppHeader.jsx"
import Container from '@mui/material/Container' //возможно, стоит подредактировать стиль 
//вынеся в отдельный файл

import { postData } from "./posts"
import { Divider } from "@mui/material";
import { Footer } from "./Footer/index.jsx";
import api from "./utils/Api"
import { Product } from "./Product/Product.jsx";

const ID_POST = "625829430cdd7d3fd52f82ba"

export const PagePost = () => {
  const [posts, setPost] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  
    

  function handlePostLike({ _id, likes }) {
    const isLiked = likes.some(id => id === currentUser._id)
    api.changeLikeStatus(_id, isLiked)
      .then((newPost) => {
        const newPostsState = posts(c => {
                    console.log('Пост из стейта в пререборе', c);
          return c._id === newPost._id ? newPost : c
        }
        )
        setPost(newPostsState);
        console.log(postData)
      })
  }
  useEffect(() => {
      
    Promise.all([api.getProductByID(ID_POST), api.getUserInfo()])
      .then(([postData, userData]) => {
        setPost(postData)
        setCurrentUser(userData)
      })
  }, [])
  
  

 return (
    <>
      <AppHeader user={currentUser} />
      <Divider />
      <Container>
        <Product {...posts} currentUser={currentUser} onPostLike={handlePostLike}/>
      </Container> /
      <Footer />
    </>
  )
}
