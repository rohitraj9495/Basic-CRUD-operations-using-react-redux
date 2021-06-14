import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getProduct, updateProduct} from '/home/rohit/ReactWork/ecom/src/actions/productaction';
import {useParams, useHistory} from "react-router-dom";

const EditProduct = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector((state) => state.product.product);
    const [name, setName]=useState();
    const [price, setPrice]=useState();
    const [quantity, setQuantity]=useState();


    useEffect(() => {
        if (product != null) {
            setName(product.name)
            setPrice(product.price)
            setQuantity(product.quantity)
        }
        dispatch(getProduct(id))
    },[product]);


    const onUpdateProduct = (e) => {
        e.preventDefault();

        const updatedProduct = Object.assign(product,{
            name: name,
            price: price,
            quantity: quantity,

        })
        dispatch(updateProduct(updatedProduct));
        history.push("/")
    };

    return (
        <div className="card border-0 shadow">
            <div className="card-header">EDIT PRODUCT</div>
            <div className="card-body">
                <form onSubmit = {(e) => onUpdateProduct(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name of Product"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Price of Product"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Quantity of Product"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            />
                    </div>
                    <button className="btn btn-secondary" type="submit">Update Product</button>
                </form>
            </div>

        </div>
    )
}

export default EditProduct;
