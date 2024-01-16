import React, { useContext } from 'react';
import PanelBody from '../../components/platform/subComponents/panel_results/PanelBody';
import PanelHeader from '../../components/platform/subComponents/panel_results/PanelHeader';
import PanelLeftResults from '../../components/platform/subComponents/panel_results/PanelLeftResults';
import PanelRightGraphic from '../../components/platform/subComponents/panel_results/PanelRightGraphic';
import PanelAttemptsContainer from '../../components/platform/subComponents/panel_results/PanelAttemptsContainer';
import { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';
import '../../css/platform/pages/SimulatorPanelResultsPage.css';

const SimulatorPanelResultsPage = () => {

  const { device, isSmart } = useContext(PlatformResponsiveContext);

  return (
    <div className={`main-container ${device}`}>
      <div className={`resources-wrapper panel-results-container ${device}`}>
        <PanelHeader
          deviceType={device}
          isSmart={isSmart}
        />
        {
          isSmart ? (
            <PanelAttemptsContainer
              deviceType={device}
              isSmart={isSmart}
            />
          ) : (
            <PanelBody>
              <PanelLeftResults />
              <PanelRightGraphic />
            </PanelBody>
          )
        }
      </div>
    </div>
  )
}

export default SimulatorPanelResultsPage;