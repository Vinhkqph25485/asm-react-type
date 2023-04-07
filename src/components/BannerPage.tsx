import React from 'react'

export const BannerPage = () => {
  return (
    <div>
        <h1 className="text-[23px] font-semibold py-3">Nhà Sách Tiki</h1>
            <img src="img/banner.png" alt="" />

            <ul className="flex py-5">
                <li><a href="#" className="px-5 text-[12px] hover:text-[#0D5CB6] hover:border-b-4 hover:border-blue-500 py-4">Phổ Biến</a></li>
                <li><a href="#" className="px-5 text-[12px] hover:text-[#0D5CB6] hover:border-b-4 hover:border-blue-500 py-4">Bán Chạy</a></li>
                <li><a href="#" className="px-5 text-[12px] hover:text-[#0D5CB6] hover:border-b-4 hover:border-blue-500 py-4">Hàng Mới</a></li>
                <li><a href="#" className="px-5 text-[12px] hover:text-[#0D5CB6] hover:border-b-4 hover:border-blue-500 py-4">Giá thấp</a></li>
                <li><a href="#" className="px-5 text-[12px] hover:text-[#0D5CB6] hover:border-b-4 hover:border-blue-500 py-4">Giá cao</a></li>
            </ul>

            <hr />
            <div className="flex gap-8 px-5 py-5">
                <img src="img/tikinow.png" alt="" className="p-1 rounded-lg bg-[#EEEEEE]" />
                <img src="img/free.png" alt="" className="p-1 rounded-lg bg-[#EEEEEE]" />
            </div>
    </div>
  )
}
