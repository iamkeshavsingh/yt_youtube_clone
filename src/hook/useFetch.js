import { useState, useEffect } from 'react';
import axios from 'axios';


function useFetch(url) {

    var [isLoading, setLoading] = useState(true);
    var [error, setError] = useState(null);
    var [data, setData] = useState(null);

    useEffect(() => {
        (async function () {
            try {
                var response = await axios.get(url);
                setData(response.data);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        })()
    }, []);

    return {
        data,
        isLoading,
        error
    };
}


export default useFetch;