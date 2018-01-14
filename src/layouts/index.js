import React from "react";
import Link from "gatsby-link";
import styles from "./index.module.css";
import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";
import youtube from "./img/youtube-play.svg";
import itunes from "./img/apple_alone.svg";
import spotify from "./img/spotify_alone.svg";

import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars, FaClose } from 'react-icons/lib/fa';

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem`,marginBottom:"0px" }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

 
export default ({ children }) =>
  <div className={styles.wrpTotal}>
    <header>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h1 style={{ display: `inline` }}>MURIEL LAMA</h1>
      </Link>
      <ResponsiveMenu
            menuOpenButton={<FaBars size={30} color="white" />}
            menuCloseButton={<FaClose size={30} color="white" />}
            changeMenuOn="768px"
            largeMenuClassName={styles.navi}
            smallMenuClassName={styles.naviSmall}
            menu={
                <ul>
                    
                    <ListLink to="/actuaciones/">ACTUACIONES</ListLink>
                    <ListLink to="/clases/">CLASES</ListLink>
                    <ListLink to="/discografia/">DISCOGRAFIA</ListLink>
                    <ListLink to="/contact/">CONTACTO</ListLink>
                </ul>
            }
      />
    </header>
    {children()}
    <footer>
        <ul className={styles.wrpItunesSpotify}>
            <li className={styles.btnSocial}><a href="#"><img src ={itunes} alt="Facebook" /></a></li>
            <li className={styles.btnSocial}><a href="#"><img src ={spotify} alt="Twitter" /></a></li>
        </ul>
        <ul className={styles.wrpSocial}>
            <li className={styles.btnSocial}><a href="#"><img src ={facebook} alt="Facebook" /></a></li>
            <li className={styles.btnSocial}><a href="#"><img src ={twitter} alt="Twitter" /></a></li>
            <li className={styles.btnSocial}><a href="#"><img src ={instagram} alt="Instagram" /></a></li>
            <li className={styles.btnSocial}><a href="#"><img src ={youtube} alt="Youtube" /></a></li>
        </ul>
    </footer>
  </div>