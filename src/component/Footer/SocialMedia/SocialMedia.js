import style from './SocialMedia.module.scss'

export const SocialMedia = ({socialMedia}) => {

    return (
        <div className={style.SocialMedia}>
            {socialMedia.map(item => <button type="button" className="btn btn-primary p-2 m-2"
                                             key={item}>{item}</button>)}
        </div>
    )

}