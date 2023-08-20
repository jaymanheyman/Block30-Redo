import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export default function UpdatePost() {
async ({token}) => {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

     
    try {
      const response = await fetch(`${BASE_URL}/post/${posts_id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            }
        })
      });
      const result = await response.json();
      console.log(result);
      const isAuthor= `${token}`
                 ? isAuthor === true : "not the Author"
                 navigate('/post')
      return result
    } catch (err) {
      console.error(err);
    }
}}
