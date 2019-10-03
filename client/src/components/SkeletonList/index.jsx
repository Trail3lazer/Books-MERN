import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './index.css'

export default function SkeletonList() {
    const list = [];
    for(let i=0; i<3; i++){
        list.push(
            <li className="list-group-item list-group-flush" key={i}>
                <Skeleton circle={true} height={50} width={50}/>
                <br />
                <Skeleton count={2} duration={3}/>
            </li>
        )
    }
    return (
        <ul className="list-group">
            {list}
        </ul>
    )
}
