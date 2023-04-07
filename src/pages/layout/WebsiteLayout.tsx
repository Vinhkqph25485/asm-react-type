
import React from 'react'
import { Outlet } from 'react-router-dom'
import { FooterPage } from '../../components/Footer'
import { HeaderPage } from '../../components/Header'
import { ContentPage } from '../../components/Contents'

function WebsiteLayout() {
    return (
        <div>
            <HeaderPage/>
            {/* <ContentPage/> */}
            <main>
                <Outlet />
            </main>

            <FooterPage/>
        </div>
    )
}

export default WebsiteLayout