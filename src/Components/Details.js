import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';

function Details(props) {

    const { user } = props;
    let [info, setInfo] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/' + user.id + '.json')
            .then(response => response.json())
            .then(data => {
                setInfo(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="Details">
            {loading ? <p>загрузка...</p> : <UserProfile info={info} />}
        </div>
    )
}

export default Details;