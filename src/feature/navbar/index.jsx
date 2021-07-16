import React from 'react';
import AcountMember from './AcountMember';
import TopNavBar from './TopNavbar';
function NavBar() {
    return (
        <>
            <TopNavBar />
            <AcountMember/>
            <p style={{fontSize: '11px'}}> Giới thiệuBảng tinLiên hệSự nghiệpByteDance
                TikTok for GoodAdvertiseDevelopersTransparency Trợ giúpAn toànĐiều khoảnQuyền riêng tưCreator
                PortalHướng dẫn Cộng đồng More
                © 2021 TikTok
            </p>
        </>
    );
}

export default NavBar;