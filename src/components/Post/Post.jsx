import { useState, useEffect } from "react";

export default function Post ({ token }) {
    const [ message, setMessage ] = useState('')
    const [ user, setUser ] = useState({})
    const [ post, setPost ] = useState([])
    const [postList, setPostList] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


     useEffect(() => {
        async function fetchPost() {
            try

            { const response = await fetch(`${BASE_URL}/post`
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                      },
                })
    
                let result = await response.json()

                console.log("After response result: ", result)
                 setPostList(result.data.posts)
                console.log("After setting setPostList: ", setPostList)
                console.log("result.data.post: ", result.data.post)
            
                const isAuthor= `${token}`
                ? isAuthor === true : "not the Author"
                
            }
            catch (err){
              console.log("Post fetchPost: ", err);
            }
        }
       
        if (token.length !== 0) {
            fetchPost() 
        }
    }, [token])

}

