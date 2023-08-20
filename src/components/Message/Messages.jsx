import React from "react";

// Define a functional component for displaying a message
const Message = (prop) => {
    // Extract message data from props
    const { message } = prop;
  
    // Render the message components
    return (
      <MessageList>
        <Container>
          <Title>
            {/* Display the message title */}
            <h3>Re: {message.post.title}</h3>
          </Title>
          <Content>
            {/* Display sender information */}
            <div>
              <strong>From:</strong> {message.fromUser.username}
            </div>
            {/* Display message content */}
            <div>
              <strong>Message:</strong> {message.content}
            </div>
          </Content>
        </Container>
      </MessageList>
    );
  };
  
  // Export the Message component as the default export
  export default Message;