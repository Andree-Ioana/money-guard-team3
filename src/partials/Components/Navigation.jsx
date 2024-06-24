import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FaHome } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa6';
import Header from '../Components/Header';
import css from '../../sass/Module/Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn && <Header />}
      <nav className={css.navContainer}>
        {isLoggedIn ? (
          <ul className={css.list}>
            <li>
              <NavLink to="/dashboard/home" className={css.link} >
                <span className={css.iconHome}>
                  <FaHome />
                </span>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/statistics" className={css.link}>
                <span>
                  <FaChartLine />
                </span>
                <span>Statistics</span>
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to="/register" className={css.logUser}>
                Registration
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={css.logUser}>
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navigation;
