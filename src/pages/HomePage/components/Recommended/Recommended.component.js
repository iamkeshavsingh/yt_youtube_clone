import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Video from '../Video/Video.component';
import { homeFetchAsync } from '../../../../store/actions/home.action';
import './Recommeneded.css';

function RecommendedComponent({ data, homeFetch }) {

    useEffect(() => {
        homeFetch();
    }, []);

    return (
        <div className="recommended">
            {data.map(video => <Video {...video} key={video.id} />)}
        </div>
    )
}


var mapStateToProps = (state) => {

    return {
        data: state.home.data
    };
}


var mapDispatchToProps = (dispatch) => ({
    homeFetch: () => dispatch(homeFetchAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedComponent);
