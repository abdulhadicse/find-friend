import React from 'react';
import './Friends.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faDollarSign, faUserMd } from '@fortawesome/free-solid-svg-icons';

const Friends = (props) => {
    return (
        <div className="Friends">

            <div className="all_friends">
                
                <div className="logo">
                    <img src={props.users.img} alt=""/>
                </div>
                
                <div className="name">
                    <h4>{props.users.name}</h4>
                    <p> <FontAwesomeIcon icon={faGlobe} /> {props.users.website}</p>
                </div>
                
                <div className="role">
                    <p> <FontAwesomeIcon icon={faUserMd} /> {props.users.company.name}</p>
                    <p> <FontAwesomeIcon icon={faDollarSign} /> {props.users.company.salary}</p>
                </div>

                <div className="viewDetails">
                    <p onClick= {()=>props.handleUser(props.users)}>+Add Lists</p>
                </div>

            </div>
            
        </div>
    );
};

export default Friends;