
export const PartnersCard = ({ partners }) => {

    return (
        <div className="card mb-2">
            <div className="card-body">
                <h4 className="card-title p-3 bg-info">{partners.name}</h4>
                <p className="card-text p-1 ">{partners.description.replace(/<\/?[^>]+(>|$)/g, " ")}</p>
            </div>
        </div>
    )
}