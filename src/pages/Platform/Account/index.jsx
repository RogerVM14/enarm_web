import React from 'react'
import DashboardLayout from "../../Layouts/Dashboard"
import ui from "./index.module.css";

const AccountPage = () => {


  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.accountContainer}>
          <article className={ui.articleContainer} style={{ marginBottom: "24px" }}>
            <header>
              <div className={ui.containerHeader}>
                <div className={ui.headerTitle}>
                  <h5>Mi cuenta</h5>
                  <p>Informacion básica</p>
                </div>
              </div>
            </header>
            <div className={ui.containerBody}>
              <form>
                <div className={ui.formInput}>
                  <label htmlFor="names" className="regular-parraf-14">Nombre (s)</label>
                  <input type="text" name="names" id="names" />
                </div>
                <div className={ui.formInput}>
                  <label htmlFor="lastNames" className="regular-parraf-14">Apellidos</label>
                  <input type="text" name="lastNames" id="lastNames" />
                </div>
                <div className={ui.formInput}>
                  <label htmlFor="username" className="regular-parraf-14">Username</label>
                  <input type="text" name="username" id="username" />
                  <p>Así se mostrará tu nombre en tu cuenta y en las valoraciones.</p>
                </div>
                <div className={ui.formInput}>
                  <label htmlFor="email" className="regular-parraf-14">Correo electrónico</label>
                  <input type="text" name="email" id="email" />
                </div>
              </form>
            </div>
          </article>
          <article className={ui.articleContainer}>
            <header>
              <div className={ui.containerHeader}>
                <div className={ui.headerTitle}>
                  <h5>Cambiar contraseña</h5>
                </div>
              </div>
            </header>
            <div className={ui.containerBody}>
              <form>
                <div className={ui.formInput}>
                  <label htmlFor="password" className="regular-parraf-14">Ingresa contraseña actual</label>
                  <input type="text" name="password" id="password" />
                </div>
                <div className={ui.formInput}>
                  <label htmlFor="passwordNew" className="regular-parraf-14">Ingresa nueva contraseña</label>
                  <input
                    type="text"
                    name="passwordNew"
                    id="passwordNew"
                    disabled
                  />
                </div>
                <div className={ui.formInput} data-position="left">
                  <label htmlFor="passwordConfirm" className="regular-parraf-14">Confirma nueva contraseña</label>
                  <input
                    type="text"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    disabled
                  />
                </div>
              </form>
            </div>
          </article>
          <div className={ui.formButton}>
            <button type="button" disabled>
              <span>Guardar cambios</span>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AccountPage