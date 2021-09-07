import style from './Title.module.scss'

export const Title = ({ title }) => {

    return (
        <div className="card">
            <div className="card-body">
                <div className={style.Title + " bg-dark"}>
                    <h1 className="p-3">{title.title}</h1>
                </div>
                <h5 className="card-title">{title.description}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{title.short_description}</h6>
            </div>
        </div>
    )
}