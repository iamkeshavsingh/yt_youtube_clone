import React from 'react';
import { connect } from 'react-redux';

import LoginInfo from '../LoginInfo/LoginInfo.component';

function ProtectorComponent({ user, children }) {
    return !user ? <LoginInfo /> : children;
}


var mapStateToProps = ({ auth: { user } }) => ({
    user: user
});

export default connect(mapStateToProps)(ProtectorComponent);
