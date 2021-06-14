import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {addProduct} from '/home/rohit/ReactWork/ecom/src/actions/productaction';
import shortid from 'shortid';
import {useHistory} from "react-router-dom";

const AddProduct = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName]=useState();
    const [price, setPrice]=useState();
    const [quantity, setQuantity]=useState();

    const createProduct = e => {
        e.preventDefault();
        const newProduct = {
            id: shortid.generate(),
            name: name,
            price: price,
            quantity: quantity,
        }
        dispatch(addProduct(newProduct));
        history.push("/");

    };

    return (
        <div className="card border-0 shadow">
            <div className="card-header">ADD PRODUCT</div>
            <div className="card-body">
                <form onSubmit={(e) => createProduct(e)}>
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
                    <button className="btn btn-primary" type="submit">Create Product</button>
                </form>
            </div>

        </div>
    )
}

export default AddProduct;
