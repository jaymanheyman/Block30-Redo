import React, { useState, useEffect } from 'react';
import BASE_URL from "../../API/index.js";
import { useNavigate } from 'react-router-dom'

export default function DeletePost() {
    async ({token}) => {
        const navigate = useNavigate()
        try {
            const response = await fetch(`${BASE_URL}/post/${posts_id}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          const result = await response.json();
          console.log(result);
          navigate('/post')
          return result
        } catch (err) {
          console.error(err);
        }
      }
};

