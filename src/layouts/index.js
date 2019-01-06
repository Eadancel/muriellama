import React from "react";
import Link from "gatsby-link";
import Navigation from "../components/navigation"
import styles from "./index.module.css";
import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";
import youtube from "./img/youtube-play.svg";
import itunes from "./img/apple_alone.svg";
import spotify from "./img/spotify_alone.svg";
import { slide as Menu } from 'react-burger-menu'
// import ResponsiveMenu from 'react-responsive-navbar';

import { FaBars, FaClose } from 'react-icons/lib/fa';

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem`,marginBottom:"0px" }} >
    <Link to={props.to}  >
      {props.children}
    </Link>
  </li>


export default ({ children }) =>
  <div className={styles.wrpTotal}>
      <header>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1 style={{ display: `inline` }}>MURIEL LAMA</h1>
        </Link>

        <div className={styles.wrpNavi}>
            <ul style={{marginBottom:"0px"}} >
              <ListLink to="/">INICIO</ListLink>
              <ListLink to="/actuaciones/">ACTUACIONES</ListLink>
              <ListLink to="/eventos/">EVENTOS</ListLink>
              <ListLink to="/discografia/">DISCOGRAFIA</ListLink>
              <ListLink to="/clases/">CLASES</ListLink>
              <ListLink to="/galleria/">GALERIA</ListLink>
              <ListLink to="/contacto/">CONTACTO</ListLink>
            </ul>
        </div>
        </header>
        <div className={styles.wrpNaviSmall}>
          <Navigation />
        </div>

    {children()}
    <footer>
        <ul className={styles.wrpItunesSpotify}>
            <li className={styles.btnSocial}><a href="https://itunes.apple.com/us/artist/muriel-lama/1294925042"><img src ={itunes} alt="Itunes" /></a></li>
            <li className={styles.btnSocial}><a href="https://open.spotify.com/artist/3E5zYk1G3gZyQ19lMDKrzq"><img src ={spotify} alt="Spotify" /></a></li>
        </ul>
        <ul className={styles.wrpSocial}>
            <li className={styles.btnSocial}><a href="https://www.facebook.com/Muriel-Lama-213429635346068/"><img src ={facebook} alt="Facebook" /></a></li>
            <li className={styles.btnSocial}><a href="https://www.youtube.com/channel/UCeRbRHpfOj_xg3pCfLk3EsA"><img src ={youtube} alt="Youtube" /></a></li>
        </ul>
    </footer>
  </div>