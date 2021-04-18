import React from 'react';

import HeaderComponent from '../../components/Header/Header.component';
import SidebarComponent from '../../components/Sidebar/Sidebar.component';

function ExplorePage() {
    return (
        <div>
            <HeaderComponent />
            <div className="main">

                <SidebarComponent />
                Public
            </div>
        </div>
    )
}

export default ExplorePage;
