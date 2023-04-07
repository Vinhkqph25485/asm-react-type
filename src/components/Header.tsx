import React from 'react'

export const HeaderPage = () => {
    return (
        <div> 
        <section className="bg-[#1A94FF] p-5 mx-auto">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <img src="/img/logo.svg" alt="" />
                    <div className="flex items-center">
                        <input type="text" className="px-12 py-1 w-[626px] rounded" />
                            <button className="bg-[#0D5CB6] flex text-white py-1 px-3 rounded items-center">
                                <img src="/img/icon-search.svg" alt="" className="mx-1" />
                                    Tìm kiếm</button>
                    </div>

                    <div className="flex items-center">
                        <img src="/img/accound.svg" className="mx-2" />
                        <div className="text-white">
                            <div className="text-[11px]">
                                <a href="signup#">Đăng nhập</a>/
                                <a href="signup#">Đăng kí</a>
                                <br />
                                    <div className="flex items-center">
                                        <a href="#">Tài khoản</a>
                                        <img src="/img/nutxuong.svg" alt="" />
                                    </div>
                            </div>

                        </div>
                    </div>

                    <div className="text-white flex items-end">
                        <img src="/img/cart.svg" className="mx-2" />
                        <a href="#" className="text-[11px]">Giỏ hàng</a>
                    </div>
            </div>
        </section>
        <nav className="bg-[#F5F5FA] p-2 mx-auto">
        <div className="max-w-7xl mx-auto">
            <ul className="flex">
                <li><a href="#" className="px-3 text-[#808089] text-[13px]">Trang chủ</a></li>
                <li><a href="#" className="px-3 text-[13px]">Nhà sách Tiki</a></li>
            </ul>
        </div>
    </nav>
        </div>
    )
}
