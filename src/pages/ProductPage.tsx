import React, { useEffect, useState } from 'react'
import { IProduct } from '../interfaces/products'
import { CategoriesPage } from '../components/CategoriesPage';
import { BannerPage } from '../components/BannerPage';
import { Link } from 'react-router-dom';

interface IProps {
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
    <section className="max-w-7xl px-10 mx-auto my-5">
      <div className="grid grid-cols-[250px,auto]">
        <CategoriesPage />

        <div>
          <BannerPage />

          <div className="grid grid-cols-4 gap-8">
            {
        data.map((item, index) => {
            return <Link key={index} to={"/products/"+ item._id}>
            <img src={item?.image} alt="" className="w-full" />
            <div>
              <img src="img/tikinow.png" alt="" width={100}/>
              <p className="text-[#00AB56] text-[11px]">GIAO SIÊU TỐC 2H</p>
              <h3 className="">{item.name}</h3>
              <div className="flex gap-2 items-center">
                <span className="flex justify-center"><img src="img/sao.svg" alt="" className="w-[12px]" />
                  <img src="img/sao.svg" alt="" className="w-[12px]" />
                  <img src="img/sao.svg" alt="" className="w-[12px]" />
                  <img src="img/sao.svg" alt="" className="w-[12px]" />
                  <img src="img/sao.svg" alt="" className="w-[12px]" />
                </span>|<span className="text-[#787878] text-[11px]">Đã bán 1000+</span>
              </div>
              <div className="text-[#FF424E]">
                <span className="px-1">{item.price} <span className="underline">đ</span></span>
                <span className="border px-1 text-[11px] border-[#FF424E]">-23%</span>
              </div>
            </div>
          </Link>
        })
    }

          </div>


        </div>
      </div>
    </section>
  )
}

export default ProductPage