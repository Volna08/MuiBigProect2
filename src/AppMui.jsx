import React, { useEffect, useState } from "react";
import { AppHeader } from "./AppHeader/AppHeader.jsx"
import Container from '@mui/material/Container' //возможно, стоит подредактировать стиль 
//вынеся в отдельный файл

import { postData } from "./posts"
import { Divider } from "@mui/material";
import { Footer } from "./Footer/index.jsx";
import api from "./utils/Api"
import { PageCatalog } from "./pages/CatalogPage/CatalogPage.jsx";
import { PageProduct } from "./pages/ProductPage/ProductPage.jsx";
import { Route, Routes } from "react-router-dom";

export const AppMui = () => {
  const [posts, setPost] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {

    // api.getProductsList()
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))

    // api.getUserInfo()
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))

    Promise.all([api.getProductsList(), api.getUserInfo()])
      .then(([postData, userData]) => {
        setPost(postData)
        setCurrentUser(userData)
      })
  }, [])

  function handlePostLike({ _id, likes }) {
    const isLiked = likes.some(id => id === currentUser._id)
    api.changeLikeStatus(_id, isLiked)
      .then((newPost) => {
        const newPostsState = posts.map(c => {
          console.log('Пост с сервера', newPost);
          console.log('Пост из стейта в пререборе', c);
          return c._id === newPost._id ? newPost : c
        }
        )
        setPost(newPostsState);
        console.log(postData)
      })
  }

  function handleDeletePost(post) {
    api.deletePost(post._id).then(() => {
        const newPostsState = 
          posts.filter((c) => c._id !== post._id)
                setPost(newPostsState);
      })
  }
  

 return (
    <>
      <AppHeader user={currentUser} />
      <Divider />
      <Container>
        <Routes>
          <Route path='/' element = {
            <PageCatalog 
        currentUser = {currentUser} 
        posts= {posts}
        handlePostLike = {handlePostLike} 
        handleDeletePost = {handleDeletePost}/>
          }/>
        <Route path='/post/:postID' element = {
          <PageProduct 
        currentUser = {currentUser} 
        handlePostLike = {handlePostLike}
        />
        }/>
        
        <Route path='*' element = {<h1>Страница не найдена</h1>}/>
        
        </Routes>
                
      </Container> 
      <Footer />
    </>
  )
}
