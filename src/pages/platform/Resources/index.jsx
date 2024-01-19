import React, { useState } from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import SpecialitiesList from "../../../components/platform/SpecialitiesList";
import GuideContent from "../../../components/platform/GuideContent";
import ChevronIcon from "../Assets/Icons/chevronicon.svg";
import BackIcon from "../Assets/Icons/backicon.svg";
import ui from "./index.module.css";

const ResourcesPage = () => {

  const [display, setDisplay] = useState(false);

  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.gridContainer}>
          <SpecialitiesList
            displayContainer={display}
            handleDisplay={() => { setDisplay(!display) }}
          />
          <ResourceContainer
            display={display}
            handleDisplay={() => { setDisplay(!display) }}
          />
        </div>
      </div>
    </DashboardLayout>
  )
}

const ResourceContainer = ({
  display,
  handleDisplay = () => { }
}) => {
  if (display === false) return null;
  return (
    <section id={ui.resourceSectionContainer}> 
      <header>
        <div className={ui.containerHeader}>
          <div className={ui.resourceTitle}>
            <button type="button" onClick={() => { handleDisplay() }}>
              <img src={BackIcon} alt="chevron" height={14} width={14} />
            </button>
            <h4>Infectología</h4>
            <p>Recursos</p>
          </div>
          <div className={ui.resourseFilters}>
            <div className={ui.filter}>
              <label htmlFor="resourseFilterOption">
                Filtrar por:
              </label>
              <select name="resourceFilterOption" id="resourceFilterOption" disabled>
                <option value="0" selected>Tipo de documento</option>
              </select>
            </div>
            <div className={ui.turns}>
              <p>Vuelta</p>
              <div className={ui.checkboxLabel}>
                <input type="checkbox" name="firstTurn" id="firstTurn" />
                <label htmlFor="turn">1ra</label>
              </div>
              <div className={ui.checkboxLabel}>
                <input type="checkbox" name="secondTurn" id="secondTurn" />
                <label htmlFor="turn">2da</label>
              </div>
              <div className={ui.checkboxLabel}>
                <input type="checkbox" name="thirdTurn" id="thirdTurn" />
                <label htmlFor="turn">3ra</label>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={ui.containerBody}>
        <GuideContent />
      </div>
    </section>
  )
}

export default ResourcesPage;