import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import logo from '/assets/background2.jpg'

var sectionStyle = {
    width: "100%",
    height: "839px",
    backgroundImage: `url(${logo})`
};

export default function Home() {
    return (
        <div className="" style={sectionStyle} >
            <div className='flex justify-left p-11 w-2/4 text-7xl'>
                <h1 className='mt-96 h-auto font-semibold text-white'>Tecnologia para Transformar</h1>
            </div>
            <div>
                <span className='flex justify-left px-11 w-2/3 text-2xl font-semibold text-white'>A GIS é uma plataforma que une a experiência à técnologia de inovação por meio de pessoas. Desenvolvemos soluções para ajudar seu negócio a se tornar referência na área.</span>
            </div>
        </div >
    )
}