import React from 'react'; 

const SimuladorAdviceModal = () => {

    return (
        <div className='modal-simulator'>
            <span className='modal-close' ></span>
            <div className='modal-simulator__container' style={{
                width: "416px",
                height: "212px"
            }}>
                <div className="modal-simulator__container__advice">
                    <h1 className="regular-16">¿Estás seguro que quieres salir del simulador?</h1>
                    <p className="regular-14">Si detienes el Simulador ahora, el intento del se marcará como completado.</p>
                </div>
                <div className="modal-simulator__container__buttons">
                    <button>
                        <span className="regular-14">No, volver</span>
                    </button>
                    <button >
                        <span className="blue regular-14 white">Si, quiero salir</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SimuladorAdviceModal;