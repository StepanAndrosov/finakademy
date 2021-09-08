import style from "./Footer.module.scss"
import {SocialMedia} from "./SocialMedia/SocialMedia"

export const Footer = ({footer}) => {

    return (
        <div className={style.Footer + " bg-secondary container-fluid"}>
            <ul className="list-group">
                <div>
                    <li>
                        <SocialMedia socialMedia={footer[0].social_media}/>
                    </li>
                </div>
                <div>
                    <li>
                        {footer[1].phone}
                    </li>
                </div>
                <div>
                    <li>
                        {footer[2].email}
                    </li>
                </div>
                <div>
                    <li>
                        {footer[3].company}
                    </li>
                </div>
            </ul>
        </div>
    )
}