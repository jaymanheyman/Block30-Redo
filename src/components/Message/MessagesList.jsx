import React from "react";
import Message from "./Message";

// Define a functional component for rendering a list of messages
const MessagesList = (props) => {
    // Extract "data" property from "props.userData"
    const {
      userData: { data },
    } = props;
  
    // Render the component
    return (
      <MessageContainerList>
        <div>
          {/* Check if "data" exists */}
          {data
            ? // Map through messages and render individual Message components
              data.messages.map((message) => {
                return <Message key={message._id} message={message} />;
              })
            : // Render nothing if "data" doesn't exist
              null}
        </div>
      </MessageContainerList>
    );
  };
  
  // Export the MessagesList component as the default export
  export default MessagesList;
  