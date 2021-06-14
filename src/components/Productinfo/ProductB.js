import React from 'react';
import {Link} from 'react-router-dom';
import{deleteProduct} from "../../actions/productaction";
import {useDispatch} from 'react-redux';

const ProductB = ({product}) => {
    const dispatch = useDispatch();
    const {name, price, quantity, id} = product
    return (
        <tr>
        <th>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label> 
      </div></th>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td className="actions">
            <Link to= {`/edit/${id}`}>
                <span className="material-icons mr-4">edit</span>
            </Link>
            <span className="material-icons mr-4" onClick={() => dispatch
            (deleteProduct(id))}>remove_circle</span>
        </td>
      </tr>
    )
}

export default ProductB;
