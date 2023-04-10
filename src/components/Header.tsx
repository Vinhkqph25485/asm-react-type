import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface User {
    name: string;
}
export const HeaderPage = () => {
    const [loggedIn, setLoggedIn] = useState<User | null>(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    });

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setLoggedIn(null);
    };
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

                   

                    <div className="text-white flex items-end">
                        {loggedIn ? (
                            <>
                                <div className="text-white me-3">Xin chào : {loggedIn.name}</div>
                                <button onClick={handleLogout} className="btn btn-primary ms-3 " style={{ marginRight: "30px" }} > Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/signin" className="btn btn-primary ms-3">Signin</Link>
                                <Link to="/signup" className="btn btn-primary ms-3" style={{ marginRight: "30px" }}>Signup</Link>
                            </>
                        )}
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
