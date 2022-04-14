
const onResponce = (res)=> {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}


class Api {
constructor ({baseUrl, token}) {
    this._baseUrl=baseUrl;
    this._token=`Bearer ${token}`;
}
getProductsList(){
    return fetch(`${this._baseUrl}/posts`, {
    headers: {
        authorization: this._token,
    }
}).then(onResponce)
}

getProductByID(ID_POST){
    return fetch(`${this._baseUrl}/posts/${ID_POST}`, {
    headers: {
        authorization: this._token,
    }
}).then(onResponce)
}

getUserInfo(){
    return fetch(`${this._baseUrl}/users/me`, {
    headers: {
        authorization: this._token,
    }
}).then(onResponce)
}

changeLikeStatus(postId, isLike){
    return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
        method: isLike ? "DELETE" : "PUT",
        headers: {
            authorization: this._token,
        },
    }).then(onResponce)
}

deletePost(postId) {
    return fetch(`${this._baseUrl}/posts/${postId}`, {
        method: "DELETE",
        headers: {
            authorization: this._token,
        },
    }).then(onResponce)
       }


}



const config = {
    baseUrl: "https://api.react-learning.ru",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYjYiLCJpYXQiOjE2NDcwMTM4ODYsImV4cCI6MTY3ODU0OTg4Nn0.wmH7N_uHsk1MUlimTtjuk3LUgEL02_yovtHQQ1KIiPc",
}
const api = new Api(config);
export default api;
