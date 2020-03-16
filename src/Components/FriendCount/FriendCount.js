import React from 'react';
import './FriendCount.css'


const FriendCount = (pros) => {
    let count=0
    let total=0;
    const totalUser= pros.newUser;

    count= totalUser.length;

    for( let i=0; i< count; i++){
        let proc= totalUser[i];
        total= total+ Number( proc.company.salary);
    }

    return (
        <div className="friend_Count"> 
            <h2>Friend Counter</h2>
            <p>Friends: {count} </p>
            <p>Salary: {total}</p>
        </div>
    );
};

export default FriendCount;