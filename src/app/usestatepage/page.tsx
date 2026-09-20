'use client';
import React, { useState } from 'react';

export default function page() {
    // Use State hooks
    // let count = 10;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(10);

    const increase = () => {
        // count = count + 1;
        setCount(count + 1);
        console.log(count);
    }
    
    const decrease = () => {
        // count = count - 1;
        setCount(count - 1);
        console.log(count);
    }

    return (
        <div className='flex flex-col items-center justify-center bg-green-50 w-full h-screen'>
            <p className='text-[25px] font-extrabold'>Count</p>
            <p className='text-[50px] font-bold text-amber-700'>{count}</p>
            <div className='flex gap-4 mt-5'>
                <button onClick={decrease} className='bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-5xl'>
                    -1
                </button>
                <button onClick={increase} className='bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-5xl'>
                    +1
                </button>
            </div>
        </div>
    )
}
