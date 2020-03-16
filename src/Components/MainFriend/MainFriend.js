import React from 'react';
import './MainFriend.css';
import member from '../../assets/images/member.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faPhoneSquareAlt ,faMapMarkerAlt, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';


const MainFriend = (props) => {
    

    return (
        <div>
            <div className="selectedFriend">
                    <div className="friend_img"> <i class="fas fa-money-check-alt"></i>
                        <img src={member} alt=""/>
                    </div>

                    <div className="friend_details">
                        <h2>HMM</h2>
                        <span> <FontAwesomeIcon icon={faEnvelope} /> shah548@gmail.com</span>
                        <span className="phone"> <FontAwesomeIcon icon={faPhoneSquareAlt} /> 0154785468755</span>
                        <p> <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: DIT, Merul , Dhaka-1212</p>
                        <span> <FontAwesomeIcon icon={faMoneyCheckAlt} /> Salary: 35,210</span>

                        <span className="subs_area subs_area1"> 400 followers</span>

                        <span className="subs_area"> 31 following</span>

                        <span className="subs_area subs_area3" > +Follow </span>

                    </div>
                </div>
        </div>
    );
};

export default MainFriend;