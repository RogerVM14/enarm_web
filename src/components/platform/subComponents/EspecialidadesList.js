import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ActualGuideContext } from '../../../contexts/platform/CurrentGuideContext';

const specialList = [
    { pos: 0, label: "Infectología", isActive: true },
    { pos: 1, label: "Cardiología", isActive: false },
    { pos: 2, label: "Dermatología", isActive: false },
    { pos: 3, label: "Gastroenterología", isActive: false },
    { pos: 4, label: "Nefrología", isActive: false },
    { pos: 5, label: "Neumología", isActive: false },
    { pos: 6, label: "Urgencias", isActive: false },
    { pos: 7, label: "Reumatología", isActive: false },
    { pos: 8, label: "Oftalmología", isActive: false },
    { pos: 9, label: "Hematología", isActive: false },
    { pos: 10, label: "Cirugía General", isActive: false },
    { pos: 11, label: "Psiquiatría", isActive: false },
    { pos: 12, label: "Inmunología", isActive: false },
];

const EspecialidadesList = (props) => {

    const [specialActive, setSpecialActive] = useState(specialList);
    const { handleGuideSelector } = useContext(ActualGuideContext)

    const handleGuideListSelector = (index) => {
        setSpecialActive((list) => {
            const newList = list.map((listItem, listIndex) => {
                if (listIndex === index) {
                    return { ...listItem, isActive: true }
                }
                return { ...listItem, isActive: false }
            })

            return newList;
        });

        const newGuide = [specialList[index].pos, specialList[index].label];
        handleGuideSelector(newGuide);
        if (props.isSmart) {
            if(props.handleType === "speciality") {
                props.specialitySelect();
            } else {
                props.resourceSelected();
            }
        }
    }

    return (
        <>
            <div className={`especialidades-list ${props.deviceType}`}>
                <ul>
                    <li>
                        <div className='item-link_especialidad'>
                            <Link className="no-textDecoration gray-textColor regular-14" to="#">Especialidades</Link>
                        </div>
                    </li>
                    {
                        specialActive.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className='item-link_especialidad'>
                                        <Link
                                            className={`no-textDecoration black regular-14${item.isActive ? " active" : ""}`}
                                            to="#"
                                            onClick={(e) => handleGuideListSelector(index)}
                                        >
                                            {item.label}
                                        </Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default EspecialidadesList;