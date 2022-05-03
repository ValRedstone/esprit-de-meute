import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/apropos" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>À propos</li>
                </NavLink>
                <NavLink to="/prestations" className={(nav) => (nav.isActive ? "nav-active": "")}>
                    <li>Prestations</li>
                </NavLink>
                <NavLink to="/galerie" className={(nav) => (nav.isActive ? "nav-active": "")}>
                    <li>Galerie</li>
                </NavLink>
                <NavLink to="/actualites" className={(nav) => (nav.isActive ? "nav-active": "")}>
                    <li>Actualités</li>
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active": "")}>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;