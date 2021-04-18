import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

import './Header.css';

import { signInAsync, logoutAsync } from '../../store/actions/user.action';

function HeaderComponent({ auth, signIn, logout }) {


    var [val, setVal] = useState('');


    function handleClick() {

        if (!auth.user) {
            return signIn();
        }

        return logout();
    }

    function renderAvatar() {

        var child = !auth.user ? <PersonIcon /> : auth.user.name[0];

        return (
            <Avatar className="header__actions_avatar" onClick={handleClick}>
                {child}
            </Avatar>
        );
    }

    return (
        <div className="header">

            <div className="header__logo">
                <MenuIcon />
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
            </div>


            <div className="header__search">
                <input value={val} onChange={(e) => setVal(e.target.value)} type="text" placeholder="Search" />
                <Link
                    className="header__search__icon"
                    to={{
                        pathname: "/results",
                        search: "?search_query=" + val,
                    }}
                >
                    <SearchIcon />
                </Link>
                <MicIcon />
            </div>

            <div className="header__actions">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationIcon />
                {renderAvatar()}
            </div>
        </div>
    );
}

var mapStateToProps = (state) => {

    var auth = state.auth;

    return {
        auth: auth
    };
};


var mapDispatchToProps = (dispatch) => {

    return {
        signIn: () => dispatch(signInAsync()),
        logout: () => dispatch(logoutAsync())
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);