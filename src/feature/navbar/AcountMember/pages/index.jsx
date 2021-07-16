import React from 'react';
import SuccessAcount from '../components/successAcount';

function ListAcount({data=[]}) {
    return (
        <div>
            {data.map(acount => (
                <SuccessAcount AcountInfors={acount} key={acount.id}/>
            ))}
        </div>
    );
}

export default ListAcount;