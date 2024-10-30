import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CurrentWeekContext } from '../../../contexts/platform/CurrentWeekStudyContext';
import ResourceContainerData from './ResourceContainerData';
import SimulatorCardBody from './simulador/SimulatorCardBody';
import { videos_thumbnails } from '../../../utils/VideosCourse';
import alertIcon from '../../../assets/icons/alert.png';

const CourseContent = (props) => {

  const navigate = useNavigate();

  const [resume, setResume] = useState(false);
  const [graficos, setGraficos] = useState(false);
  const [video, setVideo] = useState(false);
  const [simulator, setSimulator] = useState(false);
  const importedVideos = videos_thumbnails;

  const { currentWeek } = useContext(CurrentWeekContext);
  const { deviceType, isSmart } = props;

  return (
    <div className={`course-container ${deviceType}`}>
      <div className={`course-container__header-box ${deviceType}`}>
        <div className={`container-box__head ${deviceType}`}>
          <div>
            <i className="material-icons button-back" onClick={() => navigate(-1)}>arrow_back</i>
            <span className={`medium-${isSmart ? "16" : "20"}`}>{props.class}</span>
          </div>
          <span className={`${isSmart ? "roboto-14" : "regular-14"} gray-textColor`}>Contenido</span>
        </div>
        <div className={`container-box__body ${deviceType}`}>
          <p className='regular-14'>
            Bienvenido al contenido de {props.class}. A continuación tendrás acceso a los contenidos que tenemos preparados especialmente para ti.
            Es importante que revises cada uno de ellos en el orden en el que se presentan para asegurar el éxito de este curso.
          </p>
        </div>
      </div>
      <div className={`course-container__container-box ${deviceType} resume`}>
        <div className={`container-box__head ${deviceType}`} onClick={() => setResume(!resume)}>
          <div className='head__title'>
            <i className="material-icons">chevron_right</i>
            <span className='regular-14 bold'>1. Resúmenes</span>
          </div>
          <div className='head__body'>
            <p className='regular-14'>Resúmenes, Flash cards y Tips</p>
            <span className='regular-14 gray-textColor'>130 recursos</span>
          </div>
        </div>
        {
          resume && (
            <div className={`container-box__body ${deviceType}`}>
              <ResourceContainerData
                deviceType={deviceType}
                isSmart={isSmart}
                title={currentWeek.class}
              />
            </div>
          )
        }
      </div>

      <div className={`course-container__container-box ${deviceType} graphs`}>
        <div className={`container-box__head ${deviceType}`} onClick={() => setGraficos(!graficos)}>
          <div className='head__title'>
            <img src={alertIcon} alt="alert" />
            <span className='regular-14 bold'>2. Gráficos</span>
          </div>
          <div className='head__body'>
            <p className='regular-14'>Antes de continuar, asegúrate de tener tus <b className='regular-14 bold'>gráficos</b></p>
            <span className='regular-14 gray-textColor'>130 recursos</span>
          </div>
        </div>
        {
          graficos && (
            <div className={`container-box__body ${deviceType}`}> </div>
          )
        }
      </div>

      <div className={`course-container__container-box ${deviceType} videos`}>
        <div className={`container-box__head ${deviceType}`} onClick={() => setVideo(!video)}>
          <div className='head__title'>
            <i className="material-icons">chevron_right</i>
            <span className='regular-14 bold'>3. Video-clases</span>
          </div>
          <div className='head__body'>
            <p className='regular-14'>Repasa tus gráficos con las video-clases</p>
            <span className='regular-14 gray-textColor'>5 video-clases</span>
          </div>
        </div>
        {
          video && (
            <div className={`container-box__body ${deviceType}`}>
              {
                importedVideos.map((vid, index) => {
                  return (
                    <div key={index} className='item-video'>
                      <img src={vid} alt={`video-${index}`} />
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>

      <div className={`course-container__container-box ${deviceType} simulator`}>
        <div className={`container-box__head ${deviceType}`} onClick={() => setSimulator(!simulator)}>
          <div className='head__title'>
            <i className="material-icons">chevron_right</i>
            <span className='regular-14 bold'>4. Simulador Infecto</span>
          </div>
          <div className='head__body'>
            <p className='regular-14'>Practica en nuestro simulador</p>
          </div>
        </div>
        {
          simulator && (
            <div className={`container-box__body ${deviceType}`}>
              <SimulatorCardBody
                deviceType={deviceType}
                isSmart={isSmart}
                clase={props.class}
              />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CourseContent