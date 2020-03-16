import React, {useState} from 'react';
import './FindFriend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faPhoneSquareAlt ,faMapMarkerAlt, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import Friends from '../Friends/Friends';
import fakeData from '../../fakeData';
import MainFriend from '../MainFriend/MainFriend';


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
                    <MainFriend newUser={newUser}></MainFriend>
                </div>
                <div>
                    {
                        user.map( users => <Friends users={users}
                        handleUser={handleUser}></Friends>)
                    }
                </div>

            </div>

            <div className="friend_count">
                <h2>Friend Count Here</h2>
            </div>
            
        </div>
    );
};

export default FindFriend;