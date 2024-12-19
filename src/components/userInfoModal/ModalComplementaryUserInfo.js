import React, { useState } from "react";
import "./userModal.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthToken,
  selectUserId,
  selectUserInfoComplete,
  setInfoCompleted,
  setUserFullname,
} from "../../store/reducers/user/UserInformationSlice";
import { saveComplementaryStudentInfo } from "../../apis/student/studentApi";
import showToast from "../../utils/toasts/commonToasts";
import { removeSession } from "../../hooks/removeSession";
import { useNavigate } from "react-router-dom";

const ModalComplementaryUserInfo = ({ isOpen, onClose }) => {
  const isModalOpen = useSelector(selectUserInfoComplete);
  const [isUserInfoAlreadySaved, setIsUserInfoAlreadySaved] =
    useState(isModalOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const specialties = [
    "Medicina General",
    "Cardiología",
    "Dermatología",
    "Gastroenterología",
    "Endocrinología",
    "Pediatría",
    "Ginecología y Obstetricia",
    "Neurología",
    "Psiquiatría",
    "Traumatología y Ortopedia",
    "Reumatología",
    "Oncología",
    "Oftalmología",
    "Otorrinolaringología",
    "Urología",
    "Nefrología",
    "Neumología",
    "Cirugía General",
    "Cirugía Plástica",
    "Cirugía Cardiovascular",
    "Anestesiología",
    "Hematología",
    "Medicina Interna",
    "Medicina de Urgencias",
    "Medicina del Deporte",
    "Medicina Física y Rehabilitación",
    "Patología Clínica",
    "Radiología",
    "Geriatría",
    "Infectología",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    specialty1: "",
    specialty2: "",
    phone: "",
  });

  const user_id = useSelector(selectUserId);
  const auth_token = useSelector(selectAuthToken);

  const handleComplementaryInformation = () => {
    const info = {
      fullname: formData.fullName,
      telephone_number: formData.phone,
      top_specialties: `${formData.specialty1}-${formData.specialty2}`,
      user_id,
    };

    saveComplementaryStudentInfo(info, auth_token)
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
      .catch((error) => {
        if (error.request.status === 401) {
          removeSession(dispatch, navigate);
          showToast.error("Hemos detectado una sesión activa");
        }
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
    if (name === "phone") {
      if (!/^[0-9]{0,10}$/.test(value))
        errorMsg =
          "El teléfono debe contener solo números y máximo 10 dígitos.";
    }
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
        <h2 className="user-info-modal-title">
          Llena la información para continuar
        </h2>
        <p className="user-info-modal-subtitle">
          La siguiente información es importante para mantener tu perfil
          correctamente administrado.
        </p>
        <form className="user-info-modal-form">
          <label className="user-info-modal-form-label">
            Nombre Completo *
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="user-info-modal-form-input"
              required
            />
            {errors.fullName && (
              <span className="user-info-modal-error">{errors.fullName}</span>
            )}
          </label>

          <label className="user-info-modal-form-label">
            Opción de Especialidad 1 *
            <select
              name="specialty1"
              value={formData.specialty1}
              onChange={handleChange}
              className="user-info-modal-form-input"
              required
            >
              <option value="">Selecciona una especialidad</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
            {errors.specialty1 && (
              <span className="user-info-modal-error">{errors.specialty1}</span>
            )}
          </label>

          <label className="user-info-modal-form-label">
            Opción de Especialidad 2 *
            <select
              name="specialty2"
              value={formData.specialty2}
              onChange={handleChange}
              className="user-info-modal-form-input"
              required
            >
              <option value="">Selecciona una especialidad</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
            {errors.specialty2 && (
              <span className="user-info-modal-error">{errors.specialty2}</span>
            )}
          </label>

          <label className="user-info-modal-form-label">
            Teléfono (opcional)
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="user-info-modal-form-input"
              maxLength="10"
              placeholder="Ej: 1234567890"
            />
            {errors.phone && (
              <span className="user-info-modal-error">{errors.phone}</span>
            )}
          </label>
        </form>
        <button
          onClick={handleSubmit}
          className="user-info-modal-submit-button"
          disabled={!isFormValid()}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default ModalComplementaryUserInfo;
