import React from 'react';

import HeaderComponent from '../../components/Header/Header.component';
import SidebarComponent from '../../components/Sidebar/Sidebar.component';
import Protector from '../../components/Protector/Protector.component';

function SubscriptionPage() {
    return (
        <div>
            <HeaderComponent />
            <div className="main">
                <SidebarComponent />
                <Protector>
                    Private In Nature
                </Protector>
            </div>
        </div>
    )
}

export default SubscriptionPage;
