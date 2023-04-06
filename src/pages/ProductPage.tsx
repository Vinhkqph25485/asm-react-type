import React, { useEffect, useState } from 'react'
import { IProduct } from '../interfaces/products'

interface IProps{
  products: IProduct[],
  onRemove: (id: number | string) => void
}
function ProductPage(props: IProps) {
    const [data, setData] = useState<IProduct[]>([])
    console.log(props);
    
    useEffect(() => {
        setData(props.products)
    }, [props])

    const deleteProduct = (id: number | string) => {
      props.onRemove(id)
    }
  return (
    <div>
    {
        data.map((item) => {
            return <div key={item._id}>
                <h3 >{item?.name}</h3>
                <h3>{item?.price}</h3>
                <img src={item?.image} alt=""></img>
                <h4>{item?.description}</h4>
                <button onClick={() => deleteProduct(item._id)}>Remove</button>
            </div>
        })
    }
</div>
  )
}

export default ProductPage