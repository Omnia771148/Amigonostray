export function Universal({ Name, price, pic }) {
    return (
            <div className="card-hot" >
            <img src={pic} alt={Name} className="card-img-top" />
            <div className="card-body-hot">
                <h5 className="card-title-hot">{Name}</h5>
                <p className="card-text-hot">Price: {price}</p>
            </div>
        </div>
    );
}
