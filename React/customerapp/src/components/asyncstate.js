import React, { useEffect, useState } from 'react';

function AsyncStateExample() {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            setTimeout(() => {
                setData({ id: 1, name: "sonam" });//fetching data from some dummy API
                setIsLoading(false);
            }, 3000);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }
    //execute when the component start itself
    useEffect(() => {
        fetchData();
    }, [])
    return (<div>
        <h1>Async State Demo</h1>
        {isLoading ? (<div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>)
            : (error ? (<p>Error:{error.message}</p>) : <p>Data:{JSON.stringify(data)}</p>)}
    </div>);
}

export default AsyncStateExample;