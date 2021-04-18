import React from 'react';
import { Link } from 'react-router-dom';

import './SidebarItem.css';

function SidebarItemComponent({ title, Icon, active, link }) {
    return (
        <Link to={link} className="sidebar_links">
            <div className={`${active && 'active'} sidebar_item`}>
                <Icon className="sidebar_item__icon" />
                <h4>{title}</h4>
            </div>
        </Link>
    )
}

export default SidebarItemComponent;
