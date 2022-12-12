import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch ,useSelector} from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const {image,title,price,category,description} = product
    const {productId} = useParams();
    const dispatch = useDispatch()
    const fetchProductDetail = async() => {
        const response = await axios.get(`{https://fakestoreapi.com/products/${productId}}`)
        .catch(err => {console.log(err)})

        dispatch(selectedProduct(response.data))
    }

    useEffect(()=> {
        if(productId && productId !== "")fetchProductDetail()
        return () =>{
            dispatch(removeSelectedProduct())
        }
    },[productId])
    return (
        <div className='ui grid container'>
            {Object.keys(product).length === 0 ? (<div>...Loading</div>):(
                <div>
                    <p>data</p>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;