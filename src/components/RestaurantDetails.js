import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const RestaurantDetails = () => {

  const dispatch = useDispatch();

  const addItemsToCart = () => {
    dispatch(addItem('hello'));
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
    <div>
        Name
    </div>
    <div>
        Ratings
    </div>
    <div>
        Price for 2
    </div>
    <div>
        Address
    </div>
    <button onClick={addItemsToCart}>Add items</button>
    </div>
  )
}

export default RestaurantDetails