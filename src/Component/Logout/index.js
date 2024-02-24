import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Logout.scss";

const Logout = () => {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate("/");
    };

    return (
        <div className="group">
            <h2>Hello Doctor</h2>
            <Button size="lg" onClick={handleLogout}>
                Log Out
            </Button>
        </div>
    );
};

export default Logout;
