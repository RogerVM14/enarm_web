import React, { useContext, useEffect, useState } from 'react';
import { CategoryResultsContext } from '../../../../contexts/platform/CategoryResultsContext';
import GraphicResults from '../../subComponents/feedbak/GraphicResults';

const PanelRightGraphic = (props) => {

    const [menuPosition, setMenuPosition] = useState([]);
    const { results } = useContext(CategoryResultsContext);

    useEffect(() => {
        setMenuPosition([
            { label: "1er", isActive: true },
            { label: "2do", isActive: false },
            { label: "3ro", isActive: false },
            { label: "4to", isActive: false },
            { label: "5to", isActive: false },
        ])
    }, []);

    const handleSelectMenu = (i) => {
        setMenuPosition((items) => {
            const NEW_ARRAY = items.map((it, ix) => {
                if (ix === i) {
                    return { ...it, isActive: true }
                }
                return { ...it, isActive: false }
            });

            return NEW_ARRAY;
        })
    }

    return (
        <div className='c-panel-results-right'>
            <div className="panel-results-right__head">
                <h1 className='semibold-16'>Desglose de Resultados por Categorías</h1>
            </div>
            <div className="panel-results-right__body">
                <div className="panel-results-right__body__menu">
                    {
                        menuPosition.map((menu, indexMenu) => {
                            return (
                                <div
                                    key={indexMenu}
                                    className={`body__menu__tries ${menu.isActive ? "medium-16 selected" : "regular-16"}`}
                                    onClick={(e) => {
                                        handleSelectMenu(indexMenu)
                                    }}
                                >
                                    {menu.label} intento
                                </div>
                            )
                        })
                    }
                </div>
                <div className="panel-results-right__body__graphic">
                    <GraphicResults results={results}/>
                </div>
            </div>
        </div>
    )
}

export default PanelRightGraphic;