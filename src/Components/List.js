import React, { useState, useEffect } from 'react';
import Card from './Card';

function List(props) {

    let [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(true);

    const getUsers = () => {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="List">
            {loading ? <p>загрузка...</p> : users.map((o) => <Card key={o.id} id={o.id} name={o.name} setUserInfo={props.setUserInfo} />)}
        </div>
    )
}

export default List;

