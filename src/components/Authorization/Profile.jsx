import React, { useState, useEffect} from 'react';
import BASE_URL from "../../API/index.js";

const token = ""; //unsure how to link a token but setting as a placeholder

export default function Profile() {
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([]);
    const [userName, setUsername] = useState([]);
    const [id, setId] = useState([]);

    useEffect(()=>{
        const myData = async () => {
            try {
              const response = await fetch(`${BASE_URL}/users/me`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
              });
              const result = await response.json();
              setPosts(result.data.posts);
              setMessages(result.data.messages);
              setUsername(result.data.username);
              setId(result.data._id);
            } catch (err) {
              console.error(err);
            }
        }
        myData();
    }, [])
      
      return 
}