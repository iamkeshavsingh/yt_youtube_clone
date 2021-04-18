import React from 'react';
import { connect } from 'react-redux';

import './Home.css';

import HeaderComponent from '../../components/Header/Header.component';
import SidebarComponent from '../../components/Sidebar/Sidebar.component';
import RecommendedComponent from './components/Recommended/Recommended.component';
import LoaderComponent from '../../components/Loader/Loader.component';

function HomePage({ isLoading }) {
    return (
        <div className="container">
            <HeaderComponent />
            {isLoading && <LoaderComponent />}
            <div className="main">
                <SidebarComponent />
                <RecommendedComponent />
            </div>
        </div>
    )
}

var mapStateToProps = (state) => {

    var { isLoading } = state.home;
    return {
        isLoading
    };
};

export default connect(mapStateToProps)(HomePage);
