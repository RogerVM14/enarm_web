import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbs from '../../components/platform/subComponents/BreadCrumbs';
import DatePlansList from '../../components/platform/subComponents/DatePlansList';
import drNewsMini from '../../assets/imgs/novedades-img-mini.png'
import { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';
import '../../css/platform/pages/AdvicesNewsPage.css';

const AdvicesNewsPage = () => {

    const { device, isSmart } = useContext(PlatformResponsiveContext);

    const navigate = useNavigate();
 
    return (
        <div className={`main-container ${device}`}>
            <div className='advices-news-container'>
                {
                    isSmart ? (
                        <span className='regular-14 underline' onClick={() => { navigate(-1) }}>Regresar</span>
                    ) : (
                        <BreadCrumbs
                            currentPage="Mesa de Trabajo"
                            currentSubPage="Novedades" 
                        />
                    )
                }
                <div className="heading-left">
                    <h3 className={ isSmart ? "medium-16" : "regular-20"}>Novedades</h3>
                </div>
                <div className={`content-head ${device}`}>
                    <div>
                        <img
                            style={ isSmart ? { width: "33px", height: "33px" } : { width: "72px", height: "72px" }}
                            src={drNewsMini}
                            alt="mini_news"
                        />
                    </div>
                    <div className={`sub_content-head ${device}`}>
                        <h3 className={ isSmart ? "medium-16" : "regular-20"}>A continuación te mostramos todas las fechas de nuestros Planes de Esudio.</h3>
                        <h5 className='regular-14 gray'>Fechas de Planes de Estudio</h5>
                    </div>
                </div>
                <div className="content-body"></div>
                <DatePlansList />
            </div>
        </div>
    )
}

export default AdvicesNewsPage;