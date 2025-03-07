// write product card here
import React from 'react';
import '../App.css';
import Button from '../components/button'

const productcard=({Image,ProductName,Price})=>{
    return(
        <div>
          <div className="box">
            <img src={Image} alt='image' />
          </div>
          <div className="name">
          <p><strong>Product Name :</strong>{ProductName}</p>
          </div>
          <div className="price">
          <p><strong>Price :</strong>{Price}</p>
          </div>
          <Button />
        </div>
    )
}
export default productcard;