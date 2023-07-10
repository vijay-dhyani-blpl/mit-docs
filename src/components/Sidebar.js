import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const items = [
    { name: 'Accordion', link: 'https://example.com/accordion' },
    { name: 'Alert', link: 'https://example.com/alert' },
    { name: 'Avatar', link: 'https://example.com/avatar' },
    { name: 'Badge', link: 'https://example.com/badge' },
    { name: 'Breadcrumb', link: 'https://example.com/breadcrumb' },
    { name: 'Button', link: 'https://example.com/button' },
    { name: 'Button Group', link: 'https://example.com/button-group' },
    { name: 'Card', link: 'https://example.com/card' },
    { name: 'Checkbox', link: 'https://example.com/checkbox' },
    { name: 'Drawer', link: 'https://example.com/drawer' },
    { name: 'Dots', link: 'https://example.com/dots' },
    { name: 'Divider', link: 'https://example.com/divider' },
    { name: 'Dropdown', link: 'https://example.com/dropdown' },
    { name: 'Forms', link: 'https://example.com/forms' },
    { name: 'Input', link: 'https://example.com/input' },
    { name: 'Input File', link: 'https://example.com/input-file' },
    { name: 'Link', link: 'https://example.com/link' },
    { name: 'Modal', link: 'https://example.com/modal' },
    { name: 'Menu', link: 'https://example.com/menu' },
    { name: 'Pagination', link: 'https://example.com/pagination' },
    { name: 'Popover', link: 'https://example.com/popover' },
    { name: 'Progress', link: 'https://example.com/progress' },
    { name: 'Navbar', link: 'https://example.com/navbar' },
    { name: 'Radio', link: 'https://example.com/radio' },
    { name: 'Range', link: 'https://example.com/range' },
    { name: 'Spinners', link: 'https://example.com/spinners' },
    { name: 'Select', link: 'https://example.com/select' },
    { name: 'Sidebar', link: 'https://example.com/sidebar' },
    { name: 'Skeleton', link: 'https://example.com/skeleton' },
    { name: 'Switch', link: 'https://example.com/switch' },
    { name: 'Stepper', link: 'https://example.com/stepper' },
    { name: 'Tabs', link: 'https://example.com/tabs' },
    { name: 'Table', link: 'https://example.com/table' },
    { name: 'Textarea', link: 'https://example.com/textarea' },
    { name: 'Tooltip', link: 'https://example.com/tooltip' },
    { name: 'Kbd', link: 'https://example.com/kbd' },
  ]; // Array of list items with name and link properties

  return (
    <div className="sidebar-items">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
