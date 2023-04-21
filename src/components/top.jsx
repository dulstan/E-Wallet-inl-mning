import React from "react";
import "./top.scss";
import { useLocation } from 'react-router-dom'

export const Top = () => {
    const location= useLocation() 

  return <div className="header">
    {location.pathname=== '/' && 'E-Wallet'}
    {location.pathname=== '/addCard' && 'Add A New Bank Card'}
    </div>;
};

