import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div>
        <aside>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li> */}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
