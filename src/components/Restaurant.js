import React from "react";


const Restaurant = (props) => {
    const { info, order } = props.data;
    const { name, image, rating, cuisine } = info;
    const cus = cuisine.map((cus) => {
        return cus.name;
    }).join(", ");
    return (
        <div className="card">
        <img src={image?.url} alt="Avatar" />
        <div className="container">
                <h4><b>{ name}</b></h4>
                <p>{cus}</p>
            <div className="details">
                <div>
                    {rating?.aggregate_rating} Stars
                </div>
                <div>
                    {order.deliveryTime}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Restaurant;