import React, { useState } from "react";
import "./userModal.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserId,
  selectUserInfoComplete,
  setInfoCompleted,
  setUserFullname,
} from "../../store/reducers/user/UserInformationSlice";
import { saveComplementaryStudentInfo } from "../../apis/student/studentApi";
import showToast from "../../utils/toasts/commonToasts";

const ModalComplementaryUserInfo = ({ isOpen, onClose }) => {
  const isModalOpen = useSelector(selectUserInfoComplete);
  const [isUserInfoAlreadySaved, setIsUserInfoAlreadySaved] = useState(isModalOpen);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    specialty1: "",
    specialty2: "",
    phone: "",
  });

  const user_id = useSelector(selectUserId);
  const handleComplementaryInformation = () => {
    const info = {
      fullname: formData.fullName,
      telephone_number: formData.phone,
      top_specialties: `${formData.specialty1.trim()}-${formData.specialty2.trim()}`,
      user_id,
    };
    
    saveComplementaryStudentInfo(info)
      .then((res) => {
        if (res.data.status_Message === "student info updated") {
          showToast.success("Información guardada");
          setIsUserInfoAlreadySaved(true);
          dispatch(setUserFullname(formData.fullName));
          dispatch(setInfoCompleted(true));
        } else {
          showToast.error("Hubo un error al guardar tus datos");
        }
      })
      .catch((err) => {
        showToast.error("Hubo un error al guardar tus datos");
      });
  };

  const [errors, setErrors] = useState({});
  const isFormValid = () =>
    formData.fullName &&
    formData.specialty1 &&
    formData.specialty2 &&
    Object.values(errors).every((error) => error === "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";
    if (!value && name !== "phone") errorMsg = "Este campo es obligatorio.";
    if (name === "phone" && value && !/^\d+$/.test(value)) errorMsg = "El teléfono debe contener solo números.";
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      handleComplementaryInformation();
    } else {
      alert("Por favor, completa todos los campos requeridos.");
    }
  };

  if (isUserInfoAlreadySaved) return null;

  return (
    <div className="user-info-modal-overlay">
      <div className="user-info-modal-container">
        <h2 className="user-info-modal-title">Llena la información para continuar</h2>
        <p className="user-info-modal-subtitle">
          La siguiente información es importante para mantener tu perfil correctamente administrado.
        </p>
        <form onSubmit={handleSubmit} className="user-info-modal-form">
          <label className="user-info-modal-form-label">
            Nombre Completo
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="user-info-modal-form-input"
              required
            />
            {errors.fullName && <span className="user-info-modal-error">{errors.fullName}</span>}
          </label>

          <label className="user-info-modal-form-label">
            Opción de Especialidad 1
            <input
              type="text"
              name="specialty1"
              value={formData.specialty1}
              onChange={handleChange}
              className="user-info-modal-form-input"
              required
            />
            {errors.specialty1 && <span className="user-info-modal-error">{errors.specialty1}</span>}
          </label>

          <label className="user-info-modal-form-label">
            Opción de Especialidad 2
            <input
              type="text"
              name="specialty2"
              value={formData.specialty2}
              onChange={handleChange}
              className="user-info-modal-form-input"
              required
            />
            {errors.specialty2 && <span className="user-info-modal-error">{errors.specialty2}</span>}
          </label>

          <label className="user-info-modal-form-label">
            Teléfono (opcional)
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="user-info-modal-form-input"
            />
            {errors.phone && <span className="user-info-modal-error">{errors.phone}</span>}
          </label>

          <button type="submit" className="user-info-modal-submit-button" disabled={!isFormValid()}>
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalComplementaryUserInfo;
