import { Link } from 'react-router-dom';

function NavBar() {
  return (
    // navigation panel header
    <nav>
        <div>Stranger Things Group 2</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/logout">Sign Out</Link></li>              
      </ul>
    </nav>
  );
}

export default NavBar;
