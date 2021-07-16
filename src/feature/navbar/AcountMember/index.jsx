import React from 'react';
import ListAcount from './pages';
function AcountMember() {
    const dataNavBar = [
        {
            id: 1,
            nickname: 'buiduclong0511',
            name: 'Long Bùi',
            img: 'https://tiktok.f8team.dev/storage/users/6/yqXhCZedzUlLXebcYUeafgsd0jGyTFdJys1fBxYB.png',
            followNumber: 20,
            likeNumber: 7
        },
        {
            id: 2,
            nickname: 'quangnam1',
            name: 'quangnam',
            img: 'https://tiktok.f8team.dev/storage/users/3/hkGGhzJXGgupU4hAAMMhJVvQ4TKO02lpdhXlRcOw.jpg',
            followNumber: 20,
            likeNumber: 7
        },
        {
            id: 3,
            nickname: 'truonghoainam12b1',
            name: 'Nam Trương Hoài',
            img: 'https://tiktok.f8team.dev/storage/users/11/V82l5rtz6h5500KAnpaEtxnEnbqu3rgnRPlxt729.jpg',
            followNumber: 20,
            likeNumber: 7
        },
        {
            id: 4,
            nickname: 'ducdm1909',
            name: 'Đức Minh',
            img: 'https://tiktok.f8team.dev/storage/users/10/Lgcm4zvYfUwLCi4KqZ903seFPrh9deMpDY8sDoiT.jpg',
            followNumber: 20,
            likeNumber: 7
        },
        {
            id: 5,
            nickname: 'sondnf8',
            name: 'Sơn Đặng',
            img: 'https://tiktok.f8team.dev/storage/users/1/tCMIqBgeCp3IevzIN2wtoQelBOgoSbKMg2rTh0Eg.jpg',
            followNumber: 20,
            likeNumber: 7
        },
    ]
    return (
        <div>
            <p style={{marginBottom: '8px',padding: '16px 0 0 4px',color: 'rgba(22,24,35,.75)' }}>
                Tài khoản được đề xuất
            </p>
            <ListAcount data={dataNavBar}/>
            <p style={{color: 'var(--primary-color)',fontSize: '18px',
            fontWeight: '600',margin: '12px 0',paddingLeft: '16px',cursor: 'pointer'}}>
                Xem thêm
            </p>
        </div>
    );
}

export default AcountMember;