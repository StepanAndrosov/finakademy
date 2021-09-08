import {connect} from "react-redux"
import {ProductsCard} from "./ProductsCard/ProductsCard"
import style from './Products.module.scss'

const Products = ({language, products}) => {

    const title = language === 'ru' ? 'Наши продукты' : 'Our products'

    return (
        <div className={style.Products + " card mb-3 mt-2"}>
            <h3 className=" bg-dark p-3 m-2">{title}</h3>
            <div className="row">
                {products.map((item, index) => {
                    return (
                        <div key={item.title} className="col-sm-4 pt-3">
                            <ProductsCard products={products[index]}/>
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

export default connect(mapStateToProps)(Products)