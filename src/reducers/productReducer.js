import {ADD_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from "../constant/types";


const initialState = {
    productlist: [
        {
            "id": 1,
            "name": "LED Television",
            "price": 80,
            "quantity": 20
        },
        {
            "id": 2,
            "name": "Leather Lounge",
            "price": 3000,
            "quantity": 54
        },
        {
            "id": 3,
            "name": "Mens T-shirt",
            "price": 500,
            "quantity": 800
        },
        {
            "id": 4,
            "name": "Refrigerator",
            "price": 5000,
            "quantity": 20
        },
        {
            "id": 5,
            "name": "Apple Charger",
            "price": 1200,
            "quantity": 90
        }
        ],
        product: null,
};


 export const productReducer = (state = initialState, action) => {
     switch (action.type) {
         case ADD_PRODUCT:
             return{
                 ...state,
                 productlist: [action.payload, ...state.productlist],
             };

         case GET_PRODUCT:
             let arr = state.productlist.filter((product)=> product.id == action.payload);
             arr = arr.values();
             for (let val of arr) {
                 arr = val;
             }
             return {
                 ...state,
                 product: arr,
             };

        case UPDATE_PRODUCT:
            return{
                ...state,
                productlist: state.productlist.map((product) => product.id == action.payload.id ? action.payload: product),
            };

        case DELETE_PRODUCT:
            return{
                ...state,
                productlist : state.productlist.filter((product) => product.id != action.payload),
            }
         default:
            return state;
     }
 }