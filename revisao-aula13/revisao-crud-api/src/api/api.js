export const Api = {
    url: 'http://localhost:3002/filmes',
    
    buildGetRequest: ()=> fetch(Api.url),
    buildGetRequestById: (id)=> fetch(Api.url + "/filme/" + id),
    fetchPost: (movie)=>{
        return fetch(Api.url+'/add',{
            method: 'POST',
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(movie)
        })
    },
    fetchPut: (body,id) =>{
        return fetch(Api.url+'/update/'+id,{
            method: 'PUT',
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(body)
        })
    }
    
    
}