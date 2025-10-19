import twitterLogo from '../assets/twitter-icon.png'
import facebookLogo from '../assets/facebook-icon.png'
import instagramLogo from '../assets/instagram-icon.png'
import githubLogo from '../assets/github-icon.png'

export default function Footer() {
    return (
        <footer>
            <a href = "https://www.x.com/@jivnplatss"> <img src = {twitterLogo} alt = "Twitter Logo" /></a>
            <a href = "https://www.facebook.com/jivan.plata"> <img src = {facebookLogo} alt = "Facebook Logo" /> </a>
            <a href = "https://www.instagram.com/ji.vannn"><img src = {instagramLogo} alt = "Instagram Logo" /></a>
            <a href = "https://www.github.com/Jivan-Plata"><img src = {githubLogo} alt = "Github Logo" /> </a>
        </footer>
    )
}