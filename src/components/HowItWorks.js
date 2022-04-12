import React from 'react';
import '../css/HowItWorks.css';
import vectorLine from '../assets/imgs/monis/vector_line.png';
import drThumb from '../assets/imgs/monis/PicsArt_09-18-11.09.36.png';
import bookImg from '../assets/imgs/monis/book.png';
import starImg from '../assets/imgs/monis/star.png';
import drWalking from '../assets/imgs/monis/PicsArt_09-18-11.11.55.png';
import halfDr from '../assets/imgs/monis/half-doctpr.png';

const cards_list = [
    {
        title: 'Resúmenes ENARM',
        parraf: 'El Resúmen te mostrará a fondo la patología que desees estudiar, lo que te permitirá una compresión al día y completa del tema.'
    },
    {
        title: 'Mini Resúmenes ENARM',
        parraf: 'El mini resúmen te ahorrará tiempo de estudio, quitandote toda la paja hasta dejarte con lo más importante de cada patología.'
    },
    {
        title: 'Mini Resúmenes ENARM',
        parraf: 'El mini resúmen te quitará todo el ruido hasta dejarte con lo más importante de cada patología.'
    },
    {
        title: 'Mini Resúmenes ENARM',
        parraf: 'El mini resúmen te quitará todo el ruido hasta dejarte con lo más importante de cada patología.'
    },
    {
        title: 'Mini Resúmenes ENARM',
        parraf: 'El mini resúmen te quitará todo el ruido hasta dejarte con lo más importante de cada patología.'
    },
    {
        title: 'Mini Resúmenes ENARM',
        parraf: 'El mini resúmen te quitará todo el ruido hasta dejarte con lo más importante de cada patología.'
    },
    {
        title: 'Mini Resúmenes ENARM',
        parraf: 'El mini resúmen te quitará todo el ruido hasta dejarte con lo más importante de cada patología.'
    },
    {
        title: 'Mini Resúmenes ENARM',
        parraf: 'El mini resúmen te quitará todo el ruido hasta dejarte con lo más importante de cada patología.'
    },
    {
        title: 'Mini Resúmenes ENARM',
        parraf: 'El mini resúmen te quitará todo el ruido hasta dejarte con lo más importante de cada patología.'
    },
    {
        title: 'Mini Resúmenes ENARM',
        parraf: 'El mini resúmen te quitará todo el ruido hasta dejarte con lo más importante de cada patología.'
    },
];

const HowItWorks = () => {
    return (
        <div className='how-it-works'>
            <div className="hiw-container">
                <div className="hiw-container-header">
                    <h1 className="title">CÓMO FUNCIONA</h1>
                    <h2 className='subtitle'>Conoce a detalle todos los métodos de estudio</h2>
                    <button className="rounded-blue">Solicitar Prueba Gratis</button>
                </div>
                <div className="hiw-container body">
                    <img className='vector-line-img' src={vectorLine} alt="vector-line" />
                    {
                        cards_list.map((item, index) => {
                            return (
                                <div className={`hiw-card no-card-${index + 1}`} key={index}>
                                    <div className='card-number'>
                                        <span>{ index + 1}</span>
                                    </div>
                                    <div className="card-text">
                                        <h1 className="title">{ item.title }</h1>
                                        <p className="parraf">{ item.parraf }</p>
                                    </div>
                                </div>
                            )
                        })
                    } 
                    <img className='hiw-icon icon-1 reveal' src={drThumb} alt="drThumb" />
                    <img className='hiw-icon icon-2 reveal' src={bookImg} alt="bookImg" />
                    <img className='hiw-icon icon-3 reveal' src={starImg} alt="starImg" />
                    <img className='hiw-icon icon-4 reveal' src={drWalking} alt="drWalking" />
                    <img className='hiw-icon icon-5 reveal' src={halfDr} alt="halfDr" />
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;