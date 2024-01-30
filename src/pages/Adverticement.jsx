import React, { useEffect, useState } from 'react'
import adImage from '../assets/images/ad.png'
import { useNavigate } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";

import showAD from '../layouts/MainLayOut'


const Adverticement = (showAD) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const navigate = useNavigate()

    const closeModul = () => {
        showAD = false
    }

    return (
        <div className='w-full h-full fixed bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center' onClick={closeModul}>
            <div className='bg-white rounded-[10px] flex space-x-5' data-aos="zoom-in">
                <img src={adImage} className='w-[360px]' alt="adverticement image" />
                <div className='px-5 py-10 w-[380px]'>
                    <div className="mb-5">
                        <p className='text-[32px] font-900 textStyle'>Ishonchli mashina tanlaymiz</p>
                        <p className='text-[18px] fontStyle'>Eng yaxshi shartlar da kredit oylik tolov <span className='font-bold'>943,650 sum dan</span> narxda</p>
                    </div>
                    <button onClick={() => navigate('/')} className='text-white py-3 w-full bg-[#E70A32] rounded'>Avtoni snab korish</button>
                </div>
            </div>
        </div>
    )
}

export default Adverticement