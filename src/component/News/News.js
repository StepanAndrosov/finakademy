import {connect} from "react-redux"
import {NewsCard} from "./NewsCard/NewsCard"
import style from './News.module.scss'

const News = ({language, news}) => {

    const title = language === 'ru' ? 'Новости' : 'News'

    return (
        <div className={style.News + " card mb-3 mt-2"}>
            <h3 className=" bg-dark p-3 m-2">{title}</h3>
            <div className="row">
                {news.map((item, index) => {
                    return (
                        <div key={item.title} className="col-sm-4 pt-3">
                            <NewsCard news={news[index]}/>
                        </div>)
                })}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        language: state.language
    }
}

export default connect(mapStateToProps)(News)