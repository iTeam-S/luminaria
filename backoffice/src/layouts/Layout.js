import './Layout.css'
import logo from '../logoLuminaria.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";


function Layout () {
    return (
        <div className="admin-dashboard">
          <div className="top-bar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>Luminaria</h1>
            </div>
            <div className="user">
                <p>Admin</p>
                <button><FontAwesomeIcon icon={faPersonWalkingArrowRight} /></button>
            </div>
          </div>
          <div className="bod">
            <div className="sidebar">
                <ul>
                    <li> <a className="active">Tableau de bord</a></li>
                    <li>Evenements</li>
                    <li>Membres</li>
                    <li>Publication</li>
                    <li>Activite</li>
                </ul>
            </div>
            <div className="content">
                <h2>Bienvenue dans le tableau de bord administrateur</h2>
            </div>
          </div>
        </div>
    );
}

export default Layout;