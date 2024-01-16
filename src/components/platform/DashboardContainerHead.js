import React, { useContext } from 'react';
import '../../css/platform/components/DashboardContainerHead.css';
import BreadCrumbs from './subComponents/BreadCrumbs';
import { AuthContext } from '../../contexts/AuthContext';
// import { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';
// import DashboardContainerHeadSmall from './responsive/DashboardContainerHeadSmall';
import DashboardContainerHeadMedium from './responsive/DashboardContainerHeadMedium';

const DashboardContainerHead = (props) => {

  const { user_data } = useContext(AuthContext);
  // const { device } = useContext(PlatformResponsiveContext)

  return (
    // <div className={`c-dashboard-header ${device}`}>
    <div className="c-dashboard-header">
      <BreadCrumbs
        currentPage={props.currentPage}
        currentSubPage={props.currentSubPage}
      />
      {/* <h1 className={device === "smart" ? "medium-18 text-center" : "regular-20"}>Mesa de Trabajo</h1> */}
      <h1 className="regular-20">Mesa de Trabajo</h1>
      {/* <div className='heading-left' style={device === 'smart' ? { height: "98px" } : {}}> */}
      <div className='heading-left'>
        {/* <div className={`dash-header-box content pt5 pb5 ${device}`}> */}
        <div className={"dash-header-box content pt5 pb5"}>
          {/* {
            device === "smart"
              ?
              <DashboardContainerHeadSmall
                username={user_data.username}
              />
              : <DashboardContainerHeadMedium
                username={user_data.username}
              />
          } */}
          <DashboardContainerHeadMedium
            username={user_data.username}
          />

        </div>
      </div>
    </div>
  )
}

export default DashboardContainerHead;      