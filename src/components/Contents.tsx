import React from 'react'
import { CategoriesPage } from './CategoriesPage'
import { BannerPage } from './BannerPage'

export const ContentPage = () => {
  return (
    <section className="max-w-7xl px-10 mx-auto my-5">
    <div className="grid grid-cols-[250px,auto]">
       <CategoriesPage/>

        <div>
            <BannerPage/>

            <div className="grid grid-cols-4 gap-8">
                <div>
                    <img src="img/anh1.png" alt="" className="w-full" />
                    <div>
                        <img src="img/tikinow.png" alt="" />
                        <p className="text-[#00AB56] text-[11px]">GIAO SIÊU TỐC 2H</p>
                        <h3 className="">Càng Kỷ Luật, Càng Tự Do</h3>
                        <div className="flex gap-2 items-center">
                            <span className="flex justify-center"><img src="img/sao.svg" alt="" className="w-[12px]"/>
                                <img src="img/sao.svg" alt="" className="w-[12px]"/>
                                <img src="img/sao.svg" alt="" className="w-[12px]" />
                                <img src="img/sao.svg" alt="" className="w-[12px]" />
                                <img src="img/sao.svg" alt="" className="w-[12px]" />
                            </span>|<span className="text-[#787878] text-[11px]">Đã bán 1000+</span>
                        </div>
                        <div className="text-[#FF424E]">
                            <span className="px-1">83.300 <span className="underline">đ</span></span>
                            <span className="border px-1 text-[11px] border-[#FF424E]">-23%</span>
                        </div>
                    </div>
                </div>
            
            </div>


        </div>
    </div>
</section>
  )
}
