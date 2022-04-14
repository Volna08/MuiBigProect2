import React, { useEffect, useState } from "react";
import api from "../../utils/Api"
import { Product } from "../../Product/Product.jsx";
import { useParams } from "react-router-dom";

// const ID_POST = "625829430cdd7d3fd52f82ba"

export const PageProduct = ({currentUser}, {handlePostLike}) => {
  const [posts, setPost] = useState([])
 const {postID} = useParams()
  
  
  useEffect(() => {
    api.getProductByID(postID)
      .then((postData) => {
        setPost(postData)
       
      })
  }, [])
  
  

 return (
    <>
     
        <Product {...posts} currentUser={currentUser} onPostLike={handlePostLike}/>
     </>
  )
}
