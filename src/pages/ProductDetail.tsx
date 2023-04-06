import React from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../interfaces/products'
interface IProps{
    products: IProduct[]
}
const ProductDetailPage = (props:IProps) => {
    const { id } = useParams()
    const currentProduct = props.products.find((item) => item._id == id)

    return (
        <div>
            <h3>{currentProduct?.name}</h3>
            <p>{currentProduct?.price}</p>
            <img src={currentProduct?.image} alt=""></img>
                <h4>{currentProduct?.description}</h4>
        </div>
    )
}

export default ProductDetailPage