import React, { useEffect, useState } from 'react';
import { guideList } from '../../../utils/GuideList';
import { Link } from 'react-router-dom';
import ResourceContainerHead from './ResourceContainerHead';

const ResourceContainerData = (props) => {

  const [guide, setGuide] = useState(guideList);

  useEffect(() => {
    const httpGetGuides = () => {
      setGuide(guideList)
    }
    httpGetGuides()
  }, []);

  const { deviceType, isSmart } = props;

  return (
    <div className={`resource-container ${deviceType}`}>
      {
        props.hasHead && (
          <ResourceContainerHead
            title={props.title}
            deviceType={deviceType}
            isSmart={isSmart}
            resourceSelected={() => { props.resourceSelected() }}
          />
        )
      }
      <div className="container-body">
        <div className="guidelist-container-data">
          {
            guide.map((item, index) => {
              return (
                <div className="guidelist-unity" key={index}>
                  <div className='guide-header' style={item?.padding}>
                    {
                      item.url ? (
                        <Link className="guide-item-list noDecor blueSpan regular-14" to={`${item.url}`} target="_blank"> {item.title} </Link>
                      ) : (
                        <div className='guide-item-list'>
                          <span className='regular-14'>{item.title}</span>
                        </div>
                      )
                    }
                  </div>

                  {
                    item.subtitles ? (
                      <div className='guide-header'>
                        <ul style={{ marginLeft: "44px" }}>
                          {
                            item.subtitles.map((sub, subIndex) => {
                              return (
                                sub?.url ? (
                                  <li key={subIndex}>
                                    <Link className="guide-item-list noDecor regular-14 blueSpan" to={`${sub.url}`} target="_blank" > {sub.title} </Link>
                                  </li>
                                ) : (
                                  <li key={subIndex}>
                                    <div className="guide-item-list">
                                      <span className='regular-14 blueSpan'>{sub.title}</span>
                                    </div>
                                  </li>
                                )
                              )
                            })
                          }
                        </ul>
                      </div>
                    ) : null
                  }
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default ResourceContainerData;