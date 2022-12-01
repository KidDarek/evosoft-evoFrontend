import React from 'react'
import { useParams } from 'react-router-dom';
import { users } from '../../db';

const ProfilePage = () => {
    const params = useParams();
    const id = params.id;
    return (
        <div>
            <h2>Name</h2>
            {users[id - 1].name}
            <h2>Email</h2>
            {users[id - 1].email}
        </div>
    )
}

export default ProfilePage;