import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

import './Sidebar.css';
import SidebarItem from './components/SidebarItem/SidebarItem.component';

function SidebarComponent() {
    return (
        <div className="sidebar">
            <SidebarItem link="/" title="Home" Icon={HomeIcon} active />
            <SidebarItem link="/explore" title="Explore" Icon={ExploreIcon} />
            <SidebarItem link="/subscription" title="Subscription" Icon={SubscriptionsIcon} />
        </div>
    )
}

export default SidebarComponent;