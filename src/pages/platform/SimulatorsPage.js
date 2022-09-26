import React, { useContext, useState } from 'react';
import EspecialidadesList from '../../components/platform/subComponents/EspecialidadesList';
import SimulatorsContentData from '../../components/platform/subComponents/SimulatorsContentData';
import { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';

const SimulatorsPage = () => {

    const { device, isSmart } = useContext(PlatformResponsiveContext);
    const [isSpecialitySelected, setSpecialitySelected] = useState(false);

    return (
        <div className={`main-container ${device}`}>
            <div className="resources-wrapper">
                {
                    isSmart ? (
                        !isSpecialitySelected ?
                            <EspecialidadesList
                                deviceType={device}
                                isSmart={isSmart}
                                specialitySelect={() => { setSpecialitySelected(!isSpecialitySelected) }}
                                handleType="speciality"
                            /> :
                            <SimulatorsContentData
                                deviceType={device}
                                isSmart={isSmart}
                            />
                    ) : (
                        <>
                            <EspecialidadesList
                                deviceType={device}
                                isSmart={isSmart}
                            />
                            <SimulatorsContentData
                                deviceType={device}
                                isSmart={isSmart}
                            />
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default SimulatorsPage;