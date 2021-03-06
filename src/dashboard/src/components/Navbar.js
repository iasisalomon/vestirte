import React from 'react';
import avatar from '../assets/images/dummy-avatar.jpg'
import NavBarItem from './NavBarItem'
const links = [ 
    {
        icon: 'fa-bell',
        value: 3,
        color: 'warning',
        url: '/',

    },
    {
        icon: 'fa-envelope',
        value: 7,
        color: 'danger',
        url: '/',

    }
]

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>

        
        <ul className="navbar-nav ml-auto">
            {
                links.map((links,i)  => <NavBarItem key={i} {...links}/>)
            }

            <div className="topbar-divider d-none d-sm-block"></div>

           
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                    <img className="img-profile rounded-circle" src={avatar} width="60" alt="imagen de usuario"/>
                </a>
            </li>

        </ul>

    </nav>
    );
}

export default NavBar;