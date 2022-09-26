import React, { useContext, useState } from 'react';
import EspecialidadesList from '../../components/platform/subComponents/EspecialidadesList';
import ResourceContainerData from '../../components/platform/subComponents/ResourceContainerData';
import { ActualGuideContext } from '../../contexts/platform/CurrentGuideContext';
import { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';
import '../../css/platform/pages/ResourcesPage.css';

const ResourcesPage = () => {

    const { guideData } = useContext(ActualGuideContext);
    const { device, isSmart } = useContext(PlatformResponsiveContext);
    const [isResourceSelected, setResourceSelected] = useState(false);

    const handleSelectResource = (e) => {
        setResourceSelected(!isResourceSelected);
    }

    return (
        <div className={`main-container ${device}`}>
            <div className={`resources-wrapper ${device}`}>
                {
                    isSmart ? (
                        !isResourceSelected
                            ? <EspecialidadesList
                                isSmart={isSmart}
                                deviceType={device}
                                resources={{ title: guideData.label, guide: guideData.pos, hasHead: true }}
                                resourceSelected={handleSelectResource}
                            />
                            : <ResourceContainerData
                                title={guideData.label}
                                guide={guideData.pos}
                                hasHead={true}
                                isSmart={isSmart}
                                deviceType={device}
                                resourceSelected={handleSelectResource}
                            />
                    ) : (
                        <>
                            <EspecialidadesList
                                isSmart={isSmart}
                                deviceType={device}
                                resources={{ title: guideData.label, guide: guideData.pos, hasHead: true }} 
                            />
                            <ResourceContainerData
                                title={guideData.label}
                                guide={guideData.pos}
                                hasHead={true}
                                isSmart={isSmart}
                                deviceType={device} />
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default ResourcesPage;