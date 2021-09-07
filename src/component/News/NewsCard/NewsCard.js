
export const NewsCard = ({ news }) => {

    return (
        <div className="card mb-2">
            <div className="card-body">
                <h4 className="card-title p-3 bg-success">{news.title}</h4>
                <p className="card-text p-1 ">{news.description}</p>
            </div>
        </div>
    )
}