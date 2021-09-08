import {connect} from "react-redux"
import {PartnersCard} from "./PartnersCard/PartnersCard"
import style from './Partners.module.scss'

const Partners = ({language, partners}) => {
    const title = language === 'ru' ? 'Наши партнеры' : 'Our partners'

    return (
        <div className={style.Partners + " card mt-2"}>
            <h3 className=" bg-dark p-3 m-2">{title}</h3>
            <div className="row">
                {partners.map((item, index) => {
                    return (
                        <div key={item.name} className="col-sm-4 pt-3">
                            <PartnersCard partners={partners[index]}/>
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

export default connect(mapStateToProps)(Partners)