import plataPicture from "../assets/plata-picture.JPG";
import mailLogo from "../assets/Mail.png";
import linkedinLogo from "../assets/linkedin.png";

export default function Info() {
    
    return (
        <>
            <img src = {plataPicture} alt = "Jivan Plata" id = "coverPicture"/>

            <div id = "infoContent">
                <h1>Jivan Plata</h1>
                <p id = "frontendDeveloper">Frontend Developer</p>
                <p>jivanplata.website</p>
            </div>

            <div id = "infoButtons">

                <button id = "emailButton">   
                    <span> <img src= {mailLogo} alt = "Mail Logo" /> </span> Email
                </button>

                <button id = "linkedinButton">
                    <span> <img src = {linkedinLogo} alt = "Linkedin Logo" /> </span> LinkedIn
                </button>

            </div>

        </>
    )

}