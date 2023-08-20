function Logout() {
    const handleLogout = () => {
      // Implement logout logic, such as clearing authentication tokens, etc.
      // redirect the user to the login page.
    };
  
    return (
      <div>
        <h2>Logout</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  
  export default Logout;