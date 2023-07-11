import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const items = [
    { name: 'Accordion', link: '/accordion' },
    { name: 'Alert', link: '/alert' },
    { name: 'Avatar', link: '/avatar' },
    { name: 'Badge', link: '/badge' },
    { name: 'Breadcrumb', link: '/breadcrumb' },
  ];

  return (
    <div className="sidebar-items">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
