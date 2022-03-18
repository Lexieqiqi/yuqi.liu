import React from 'react';
import './main.css';

import Image from 'next/image';

interface MainProps {
    img: {};
}

export const Main = ({img}:MainProps) => (
    <div>
        <div>
            <Image src="/assets/bus_1.jpeg" 
                    alt="my story"
                    layout="fill"/>
        </div>
    </div>
);