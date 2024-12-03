import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { SelectIsLoadingContent } from "../../store/reducers/general/general";
import BouncingLoading from "../../pages/Platform/Simulators/components/BouncingLoading";

const Loader = ({ message }) => {
  const isLoadingContent = useSelector(SelectIsLoadingContent);

  if (!isLoadingContent) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-gray-100 bg-opacity-90">
      <div className="text-center">
        <BouncingLoading message={message} />
      </div>
    </div>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
};

Loader.defaultProps = {
  message: "Cargando..",
};

export default Loader;
