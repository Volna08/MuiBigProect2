import React from "react";

import { PostsList } from "../../PostsList/index"

export const PageCatalog = ({currentUser, posts, handlePostLike, handleDeletePost}) => {
  
     
  
 return (
    <>
      
        <PostsList postData={posts}
          onPostLike={handlePostLike}
          onPostDelete={handleDeletePost}
          currentUser={currentUser} />
     
    </>
  )
}
