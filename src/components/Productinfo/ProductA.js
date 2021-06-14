import React from 'react';
import {useSelector} from 'react-redux';
import ProductB from './ProductB';


const ProductA = () => {
    const products = useSelector(state => state.product.productlist);
    return (
    <div>
        <table className="table table-shadow">
                  <thead className="bg-default text-white">
    <tr>
      <th scope="col">
          <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <label className="custom-control-label"></label> 
          </div>
      </th>
      <th>ID</th>
      <th>NAME</th>
      <th>PRICE</th>
      <th>QUANTITY</th>
      <th>ACTIONS</th>
    </tr>
  </thead>
  <tbody>
      {
          products.map((product) => <ProductB product={product} key={product.id}/>)}
  </tbody>
</table>
        </div>
    )
}

export default ProductA
