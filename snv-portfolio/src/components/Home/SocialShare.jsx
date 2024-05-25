import React from 'react'
import '../../CSS/socials.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faLinkedinIn ,faGithub,faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialShare = () => {
  return (
    <div className="footer-social">
        <div className="credits">
            <h3>
                Develeoped By SREENATH V
            </h3>
        </div>
        <div className="social-links">
                <a href="https://instagram.com/_im.sreenath_/" target = "_blank" className="icon">
                <FontAwesomeIcon className='icon-i' icon={faInstagram} />
                </a>
                <a href="https://github.com/sreenathsnv/" target = "_blank" className="icon">
                <FontAwesomeIcon className='icon-i' icon={faGithub} />
                </a>
                <a href="https://in.linkedin.com/in/sreenath-v-097050217" className="icon" target = "_blank">
                    <FontAwesomeIcon className='icon-i' icon={faLinkedinIn} />
                </a>
                <a href="https://twitter.com/Sreenath_snv" target = "_blank" className="icon">
                <FontAwesomeIcon className='icon-i' icon={faXTwitter} />
                </a>
                <a href="mailto:sreenathsnvaltpb@gmail.com" className="icon" target = "_blank">
                <FontAwesomeIcon className='icon-i' icon={faEnvelope} />
                </a>
            </div>
    </div>


  )
}

export default SocialShare