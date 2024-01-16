import React, { useContext } from 'react';
import DashboardContainerHead from '../../components/platform/DashboardContainerHead';
import BigCardNews from '../../components/platform/subComponents/BigCardNews';
import BigCardAdvice from '../../components/platform/subComponents/BigCardAdvice';
import Cards from '../../components/platform/subComponents/Cards';
import { PlatformResponsiveContext } from '../../contexts/platform/PlatformResponsiveContext';
import '../../css/platform/pages/DashboardPage.css';

const StudyPlansPage = () => {

  const { device } = useContext(PlatformResponsiveContext);

  const cardList = [
    { icon: "people", title: "Planes de Estudio", redirect: false, route: "", parraf: "Dentro del panel principal puedes encontrar los Planes de Estudio distribuidos por tiempos. Elige el plan que más te convenga para seguir el curso." },
    { icon: "people", title: "Recursos", redirect: true, route: "/u/recursos", parraf: "Puedes acceder a todos los recursos utilizados en la Plataforma desde la sección de Recursos dentro del panel principal." },
    { icon: "people", title: "Simuladores", redirect: true, route: "/u/simulador", parraf: "Cuando sea momento de practicar puedes acceder fácil y rápidamente desde la sección de Simuladores encontrada en el panel principal." },
    { icon: "people", title: "Documentos ENARM", redirect: true, route: "/u/documentos", parraf: "Dentro de esta sección del panel principal, encontrarás todo lo que necesitas saber sobre metodología y forma de trabajo de Plataforma ENARM." },
  ];

  return (
    <>
      <div className={`main-container ${device}`} >
        <DashboardContainerHead currentPage="Mesa de Trabajo" />
        <div className={`c-cards-container ${device}`}>
          {cardList.map((item, indexKey) => {
            return (
              <Cards
                key={indexKey}
                icon={item.icon}
                title={item.title}
                redirect={item.redirect}
                route={item.route}
                parraf={item.parraf}
                device={device}
              />
            )
          })}
        </div>
        <div className={`bigCards-container ${device}`}>
          <BigCardAdvice device={device} />
          <BigCardNews device={device} />
        </div>
      </div>

    </>
  )

}

export default StudyPlansPage;