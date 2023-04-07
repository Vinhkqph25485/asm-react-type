import React from 'react'

export const ProDetailPage = () => {
  return (
    <div>
         <section className="max-w-7xl px-10 mx-auto my-5">
        <div className="grid grid-cols-[444px,auto] gap-8">
            <div className="border-r px-8">
                <div className="text-center px-8">
                    <img src="img/anh1.png" alt="" width="444" height="444"/>
                </div>
                <div className="grid grid-cols-5 gap-3 my-3">
                    <img src="img/anh1.png" alt="" width="64" height="64"/> 
                    <img src="img/anh2.png" alt="" width="64" height="64"/>
                    <img src="img/anh3.png" alt="" width="64" height="64"/>
                    <img src="img/anh4.png" alt="" width="64" height="64"/>
                    <img src="img/anh5.png" alt="" width="64" height="64"/>
                </div>
            </div>
            <div>
                <div className="flex text-[13px]">
                    <p className="pr-3">Tác giả: <span className="text-[#0D5CB6]">Ca Tây</span></p>
                    <p>Đứng thứ 13 trong <span className="text-[#0D5CB6]">Top 1000 Sách tư duy - Kỹ năng
                            sống bán chạy tháng này</span></p>
                </div>
                <h2 className="text-[23px]">Càng Kỷ Luật, Càng Tự Do</h2>
                <div className="flex gap-2 items-center">
                    <span className="flex justify-center"><img src="img/sao.svg" alt="" className="w-[12px]"/>
                        <img src="img/sao.svg" alt="" className="w-[12px]" />
                        <img src="img/sao.svg" alt="" className="w-[12px]" />
                        <img src="img/sao.svg" alt="" className="w-[12px]" />
                        <img src="img/sao.svg" alt="" className="w-[12px]" />
                    </span>
                    <span className="text-[#787878] text-[11px] space-x-2">(Xem 2942 đánh giá)</span>
                    <span className="text-[#787878] text-[11px]">|</span>
                    <span className="text-[#787878] text-[11px]">Đã bán 1000+</span>
                </div>
                <div className="text-[#FF424E] px-5 py-5 border-b">
                    <span className="px-1 text-[32px]">83.300 <span className="underline">đ</span></span>
                    <span className="px-1 text-[13px] text-[#808089]">83.300 <span className="underline">đ</span></span>
                    <span className="border px-1 text-[14px] border-[#FF424E]">-23%</span>
                </div>

                <div className="my-3">
                    <p className="py-2">Số lượng</p>
                    <div className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                        <button
                            className="font-semibold border-r border-gray-400 h-full w-20 flex rounded-l  cursor-pointer">
                            <span className="m-auto">-</span>
                        </button>
                        <input type="hidden"
                            className="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
                            readOnly name="custom-input-number" />
                        <div className="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                            <span>2</span>
                        </div>

                        <button
                            className="font-semibold border-l  border-gray-400 h-full w-20 flex rounded-r cursor-pointer">
                            <span className="m-auto">+</span>
                        </button>
                    </div>
                </div>

                <button type="button" className="px-5 py-2 bg-[#FF3945] w-[280px] text-white rounded text-[14px]">Chọn
                    Mua</button>
            </div>
        </div>
        </section>

        <section className="max-w-7xl px-10 mx-auto my-5">
        <h2 className="text-[20px] font-semibold">Sản phẩm tương tự</h2>
        <div className="grid grid-cols-6">
            <div>
                <img src="img/anh6.png" alt="" className="w-full"/>
                <div>
                    <h3 className="">Càng Kỷ Luật, Càng Tự Do</h3>
                    <div className="flex gap-2 items-center">
                        <span className="flex justify-center"><img src="img/sao.svg" alt="" className="w-[12px]"/>
                            <img src="img/sao.svg" alt="" className="w-[12px]" />
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
        </section>

        <section className="max-w-7xl px-10 mx-auto my-5">
        <h2 className="text-[20px] my-5">Thông tin chi tiết</h2>
        <table>
            <tr>
                <th className="w-[220px] text-[#4F4F4F] bg-[#EFEFEF] font-normal">Công ty phát hành</th>
                <td className="w-[660px] px-5">Bloom Books</td>
            </tr>
            <tr>
                <th className="w-[220px] text-[#4F4F4F] bg-[#EFEFEF] font-normal">Ngày xuất bản</th>
                <td className="bg-[#FAFAFA] w-[660px] px-5">2020-09-01 00:00:00</td>
            </tr>
            <tr>
                <th className="w-[220px] text-[#4F4F4F] bg-[#EFEFEF] font-normal">Kích thước</th>
                <td className="w-[660px] px-5">14.5 x 20 cm</td>
            </tr>
            <tr>
                <th className="w-[220px] text-[#4F4F4F] bg-[#EFEFEF] font-normal">Dịch Giả</th>
                <td className="bg-[#FAFAFA] w-[660px] px-5">Tuyết Mai</td>
            </tr>
            <tr>
                <th className="w-[220px] text-[#4F4F4F] bg-[#EFEFEF] font-normal">Loại bìa</th>
                <td className="w-[660px] px-5">Bìa mềm</td>
            </tr>
            <tr>
                <th className="w-[220px] text-[#4F4F4F] bg-[#EFEFEF] font-normal">Số trang</th>
                <td className="bg-[#FAFAFA] w-[660px] px-5">288</td>
            </tr>
            <tr>
                <th className="w-[220px] text-[#4F4F4F] bg-[#EFEFEF] font-normal">Nhà xuất bản</th>
                <td className="w-[660px] px-5">Nhà Xuất Bản Thế Giới</td>
            </tr>
        </table>
        </section>

        <section className="max-w-7xl px-10 mx-auto my-5">
        <h2 className="text-[20px] my-5">Mô tả sản phẩm</h2>
        <p>
            KỶ LUẬT vốn là ván cờ bạn phải tự đấu với chính mình. Thắng - bạn sẽ có được “bản năng của người mạnh mẽ
            nhất”, đó là sự tự kiểm soát bản thân. Thua - bạn mãi sống trong cảm giác tạm bợ
        </p>
        <div className="text-center my-5">
            <button type="button" className="px-10 rounded py-2 border border-[#189EFF] text-[#189EFF]">Xem thêm nội
                dung</button>
        </div>
        </section>

    </div>
  )
}
