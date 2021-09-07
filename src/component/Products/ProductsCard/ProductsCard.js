
export const ProductsCard = ({ products }) => {

    return (
        <div className="card mb-2">
            <div className="card-body">
                <h4 className="card-title p-3 bg-info">{products.title}</h4>
                <p className="card-text p-1 ">{products.description}</p>
            </div>
        </div>
    )
}