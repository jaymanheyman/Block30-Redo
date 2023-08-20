import React, { useState } from "react";

// Define a functional component for sending a new message
const NewMessage = (props) => {
    // Extract necessary props
    const { author_id, userId, post_id, author } = props;
  
    // Set up a state variable to store the message content
    const [message, setMessage] = useState("");
  
    // Retrieve the authentication token from local storage
    const token = localStorage.getItem("token");
  
    // Define a validation function for checking message length
    const validationHandler = () => {
      // Check if the message has content
      if (message.length > 0) {
        return true; // Return true if the message is valid
      }
      return false; // Return false if the message is empty
    };
  
    // Define a function to handle sending a message
    const MessageHandler = async (event) => {
      event.preventDefault();
  
      // Check if the user is the author of the post
      if (author_id === userId) {
        alert("This is your Post!");
      } else if (validationHandler()) { // Check if the message is valid
        try {
          // Send a POST request to the API to create a new message
          const response = await fetch(
            `https://strangers-things.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/posts/${post_id}/messages`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                message: {
                  content: message,
                },
              }),
            }
          );
  
          // Parse the response and log the result
          const obj = await response.json();
          console.log(obj);
  
          // Clear the message input field
          setMessage("");
        } catch (error) {
          throw error; // Handle any errors that occur during the API call
        }
      } else {
        alert("Please Type Message"); // Alert user if message is empty
      }
    };
  
    // Render the component
    return (
      <Section className="NewMessage">
        {/* Display the message input form if the user is not the author */}
        {author_id !== userId && (
          <form onSubmit={MessageHandler}>
            <div>
              <Input
                type="text"
                placeholder="Contact owner"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Input>
              <Button type="submit">Send</Button>
            </div>
          </form>
        )}
      </Section>
    );
  };
  
  // Export the NewMessage component as the default export
  export default NewMessage;
  