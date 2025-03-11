import {useState, useContext} from "react";
import { DataContext } from "../App";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'

export default function Profile(){
const user={
    name: "Placeholder",
    pronouns:"(She/her)",
    city:"Greenwood, South Carolina, United States",
    type:"Student",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    about: "I am a user",
    education: [
        {year: "2025",
         degree: "BS in Something",
         school: "School name",
        }
    ],
    experience: [
        {yearsWorked: "2023-2025",
         role:"Something",
         company:"Somewhere"
        }
    ]
}



  return(
    <div className="profilePage">
        <div classname="userLeftDiv">
            {/*Left*/}
        <img src={user.image}/>
        <h2>{user.name}</h2>
        <h2>{user.pronouns}</h2>
        <h2>{user.city}</h2>
        <h2>{user.type}</h2>
        </div>
        
        {/*RIGHT*/}

        <div className="userRightDiv">
        <div>
        <h1 className="profH1">About Me</h1>
            <h2>{user.about}</h2>
        </div>

        <div>
        <h1 className="profH1">Education</h1>
            <h2>{}</h2>
        </div>

        <div>
        <h1 className="profH1">Experience</h1>
            <h2></h2>
        </div>

        <div>
        <button>Link to Resume</button>
        </div>
        
        
        
        </div>
        
    </div>
  );
}