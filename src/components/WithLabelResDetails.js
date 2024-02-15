import React from 'react'
import Restaurant from './Restaurant';

const WithLabelResDetails = () => {
  return (props) => {
    console.log(props);
    return (<>
    <span>WithLabelResDetails</span>
    <Restaurant data={props}/>
    </>
  )
  }
}

export default WithLabelResDetails;