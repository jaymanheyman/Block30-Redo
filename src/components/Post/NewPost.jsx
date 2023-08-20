import React, { useState, } from 'react';
import BASE_URL from "../../API/index.js";


export default function NewPost () {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
  
    const makePost = async (ev) => {
      ev.preventDefault();
      try {
        const response = await fetch(`${BASE_URL}/posts`, {
          method: "POST",
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
        setTitle("");
        setDescription("");
      } catch (err) {
        console.error(err);
      }
    }
  
    return <>

    </>
  }
