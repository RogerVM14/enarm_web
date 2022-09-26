import React, { useContext, useEffect, useState } from 'react';
import DashboardNavbar from '../platform/DashboardNavbar';
import DashboardLeftAside from '../platform/DashboardLeftAside';
import DashboardRightAside from '../platform/DashboardRightAside';
import { DashAsideContext } from '../../contexts/platform/DashboardAsideContext';
import CurrentWeekStudyContext from '../../contexts/platform/CurrentWeekStudyContext';
import CurrentGuideContext from '../../contexts/platform/CurrentGuideContext';
import AsideLeftPositionContext from '../../contexts/platform/AsideLeftPositionContext';
import ModalStartingSimulator from '../../contexts/platform/ModalStartingSimulator';
import CurrentCourseProvider from '../../contexts/platform/CurrentCourseContext';
import CountDownProvider from '../../contexts/platform/CountDownContext';
import ModalRetroSimulator from '../../contexts/platform/ModalRetroSimulator';
import FeedbackQuestionsResultsProvider from '../../contexts/platform/FeedbackQuestionsResultsContext';
import AdviceModalProvider from '../../contexts/platform/AdviceModalContext';
import PlanRoutesProvider from '../../contexts/platform/PlanRoutesContext';
import CategoryResultsProvider from '../../contexts/platform/CategoryResultsContext';
import SimulatorAttemptsProvider from '../../contexts/platform/SimulatorAttemptsContext';
import PlatformResponsiveProvider, { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';
import '../../css/platform/layouts/Dashboard.css'

const DashboardLayout = (props) => {

    const { isShort } = useContext(DashAsideContext);
    const { device } = useContext(PlatformResponsiveContext);
    const [isSmartMenu, setStartMenu] = useState(false);
    const [isSmart, setIsSmart] = useState((() => {
        return device === "smart";
    })());

    useEffect(() => {

        const isSmartphoneDevice = () => {
            return device === "smart";
        }

        setIsSmart(isSmartphoneDevice);

    }, [device])

    return (
        <>
            <PlatformResponsiveProvider>
                <CurrentGuideContext>
                    <CurrentWeekStudyContext>
                        <CurrentCourseProvider>
                            <AsideLeftPositionContext>
                                <ModalStartingSimulator>
                                    <ModalRetroSimulator>
                                        <CountDownProvider>
                                            <FeedbackQuestionsResultsProvider>
                                                <AdviceModalProvider>
                                                    <PlanRoutesProvider>
                                                        <CategoryResultsProvider>
                                                            <SimulatorAttemptsProvider>
                                                                <div className={`platform-wrapper platform-wrapper--${device}`}>
                                                                    <DashboardNavbar handleSmartMenu={() => { setStartMenu(!isSmartMenu) }} />
                                                                    {
                                                                        (isSmart && isSmartMenu) ? (
                                                                            <div className='hamburger-menu'>
                                                                                <span className='hamburguer__bottom' onClick={() => { setStartMenu(false) }}></span>
                                                                                <DashboardLeftAside
                                                                                    deviceType={device}
                                                                                    isSmart={isSmart}
                                                                                    menuActive={isSmartMenu}
                                                                                    handleCloseMenu={()=> {setStartMenu(false)}}
                                                                                />
                                                                            </div>
                                                                        ) : (
                                                                            <DashboardLeftAside
                                                                                deviceType={device}
                                                                                isSmart={isSmart}
                                                                                menuActive={isSmartMenu}
                                                                            />
                                                                        )
                                                                    }
                                                                    <main className={`main-platform main-platform--${device} ${isShort ? "minimized" : ""}`}>
                                                                        {props.children}
                                                                    </main>
                                                                    {props.hasAside && <DashboardRightAside />}
                                                                </div>
                                                            </SimulatorAttemptsProvider>
                                                        </CategoryResultsProvider>
                                                    </PlanRoutesProvider>
                                                </AdviceModalProvider>
                                            </FeedbackQuestionsResultsProvider>
                                        </CountDownProvider>
                                    </ModalRetroSimulator>
                                </ModalStartingSimulator>
                            </AsideLeftPositionContext>
                        </CurrentCourseProvider>
                    </CurrentWeekStudyContext>
                </CurrentGuideContext>
            </PlatformResponsiveProvider>
        </>
    )
}

export default DashboardLayout;