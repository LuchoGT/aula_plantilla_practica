import { Link } from "react-router-dom"
import './AulaHeader.scss'
import { useAuthStore } from "@/hooks/useAuthStore";
import { useEffect, useState } from "react";

export const AulaHeader = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll"); // Agrega la clase al body para deshabilitar el scroll
    } else {
      document.body.classList.remove("no-scroll"); // Remueve la clase para habilitar el scroll
    }

    return () => {
      document.body.classList.remove("no-scroll"); // Limpia la clase al desmontar el componente
    };
  }, [menuOpen]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleUserMenu = () => {
    setUserOpen(!userOpen);
  };


  const {status,startLogout,user} = useAuthStore();


  // if (status !== "authenticated") {
  //   return null; // No mostrar el botón si no está autenticado
  // }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <h1>Synnexa</h1>
        </div>
        <svg
          className="navbar__icon"
          onClick={handleMenuClick}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="#000" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
        <div className="navbar__user" onClick={handleUserMenu}>
          <div className="navbar__photo">
            👨
          </div>
          <div className="navbar__data">
            <p className="navbar__data--username">{user.name}</p>
            <span>👇</span>
          </div>
          {userOpen && (
          <div className="user">
            <div className="user__title">
              <h1>Synnexa</h1>
              <svg
                onClick={handleUserMenu}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#000"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </div>
            <nav className="user__nav">
              <ul className="user__list">
                <li className="user__item">
                  <Link to='/'>{user.name}</Link>
                </li>
                <li className="user__item">
                  <Link to='/profile'>Ver mi perfil</Link>
                </li>
                <li className="user__item" onClick={startLogout}>
                  Cerrar sesion
                </li>
              </ul>
            </nav>
          </div>
        )}
        </div>
        {menuOpen && (
          <div className="menu">
            <div className="menu__container">
              <div className="menu__title">
                <h1>Synnexa</h1>
                <svg
                  onClick={handleMenuClick}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="#000"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
              </div>
              <nav className="menu__nav">
                <ul className="menu__list">
                  <li className="menu__item">
                    <Link to='/'>Inicio</Link>
                  </li>
                  <li className="menu__item">Cursos</li>
                  <li className="menu__item">Evaluacion</li>
                </ul>
              </nav>
            </div>
          </div>
        )}
       
        <div className="navbar__menu">
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to='/'>Inicio</Link>
            </li>
            <li className="navbar__item">Cursos</li>
            <li className="navbar__item">Evaluacion</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
