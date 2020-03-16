import React, {useState} from 'react';
import './FindFriend.css';
import Friends from '../Friends/Friends';
import fakeData from '../../fakeData';
import FriendCount from '../FriendCount/FriendCount';


const FindFriend = () => {

    const Data= fakeData.slice(0,10);

    const [user, setUser]= useState(Data);

    const [newUser, setNewUser]= useState([]);

    const handleUser=(user)=>{
        const newUsers=[...newUser,user];
        setNewUser(newUsers);
    }


    return (
        <div className="find_friend">

            <div className="friend_info">
                
                <div>
                    {
                        user.map( users => <Friends users={users}
                        handleUser={handleUser}></Friends>)
                    }
                </div>

            </div>

            <div className="friend_count">
                <FriendCount newUser={newUser}></FriendCount>
            </div>
            
        </div>
    );
};

export default FindFriend;