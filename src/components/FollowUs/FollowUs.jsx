import { TfiFacebook } from 'react-icons/tfi';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { AiFillYoutube } from 'react-icons/ai';

const FollowUs = () => {
    return (
        <div>
            <h3>Follow Us</h3>
            <ul>
                <li>
                    <a href="https://www.facebook.com/goITclub/" target="_blank" rel="noreferrer">
                        <TfiFacebook />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/goitclub/" target="_blank" rel="noreferrer">
                        <BiLogoInstagramAlt />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/c/GoIT" target="_blank" rel="noreferrer">
                        <AiFillYoutube />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default FollowUs;