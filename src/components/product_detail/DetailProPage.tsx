import React from 'react'

export const DetailProPage = () => {
  return (
    <div>
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
    </div>
  )
}
