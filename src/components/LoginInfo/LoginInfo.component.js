import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { signInAsync } from '../../store/actions/user.action';

function LoginInfoComponent({ signIn }) {
    return (
        <div>
            <p>You need to Login first before continuing to this.</p>
            <Button color="primary" onClick={signIn}>Login In</Button>
        </div>
    )
}


var mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAsync())
});

export default connect(null, mapDispatchToProps)(LoginInfoComponent);
