import React from "react";
import LandingLayout from "../../Layouts/Landing";
import ui from "./index.module.css";
import FadeInTitle from "../../../components/FadeInTitle";
import SectionPromise from "../../../components/SectionPromise";
import BlogExample from "../../Assets/Images/BlogExample.png";
import { blogPageTitle, entries } from "../../../constants/Landing";

const BlogPage = () => {

  return (
    <LandingLayout page="blog">
      <header id={ui.hero}>
        <div className="full-container">
          <div className={ui.headerContainer}>
            <div className={ui.containerTitle}>
              <FadeInTitle words={blogPageTitle} align="center" />
            </div>
            <div className={ui.containerParraf}>
              <p className="regular-parraf text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
      </header>

      <article id={ui.article}>
        <div className="full-container">
          <div className={ui.articleContainer}>
            <h2 className="section-subtitle uppercase blue text-center">Entradas destacadas</h2>
            <div className={ui.containerGrid}>
              <div className={ui.gridEntries}>
                <div className={ui.entryCard}>
                  <div className={ui.cardimage}>
                    <img src={BlogExample} alt="blog pic" />
                  </div>
                  <div className={ui.cardInformation}>
                    <h6 className={ui.informationDate}>25/02/2021</h6>
                    <p className="regular-parraf">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                  </div>
                </div>
                <div className={ui.entryCard}>
                  <div className={ui.cardimage}>
                    <img src={BlogExample} alt="blog pic" />
                  </div>
                  <div className={ui.cardInformation}>
                    <h6 className={ui.informationDate}>25/02/2021</h6>
                    <p className="regular-parraf">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                  </div>
                </div>
                <div className={ui.entryCard}>
                  <div className={ui.cardimage}>
                    <img src={BlogExample} alt="blog pic" />
                  </div>
                  <div className={ui.cardInformation}>
                    <h6 className={ui.informationDate}>25/02/2021</h6>
                    <p className="regular-parraf">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section id={ui.entries}>
        <div className="full-container">
          <div className={ui.sectionContainer}>
            <h2>Todas las entradas</h2>
            <div className={ui.containerGrid}>
              <div className={ui.gridEntries}>
                {entries?.map((i, index) => {
                  return (
                    <div className={ui.entryCard} key={index}>
                      <div className={ui.cardimage}>
                        <img src={BlogExample} alt="blog pic" />
                      </div>
                      <div className={ui.cardInformation}>
                        <h6 className={ui.informationDate}>{i.date}</h6>
                        <p className="regular-parraf">{i.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className={ui.gridPagination}>
                <span>{"<"}1, 2, 3, 4 ... 99{">"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionPromise />
    </LandingLayout>
  )
}

export default BlogPage;