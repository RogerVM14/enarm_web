import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import DashboardLayout from '../components/layouts/DashboardLayout';
import PlatformResponsiveProvider from '../contexts/platform/PlatformResponsiveContext';

const PlatformPrivateRoute = (props) => {

    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? (
        <PlatformResponsiveProvider>
            <DashboardLayout hasAside={props.hasAside}>
                {props.children}
            </DashboardLayout>
        </PlatformResponsiveProvider>
    ) : <Navigate to="/iniciar_sesion" />
}

export default PlatformPrivateRoute;