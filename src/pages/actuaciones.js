import React from "react"
import styles from "./css_modules/actuaciones.module.css";
import bkg_image from "./img/bkg_actuaciones.png";
import YouTube from 'react-youtube';

export default () => (
    <div className={styles.wrpActuaciones}>
        <div className={styles.wrpImage}>
            <img className={styles.imageLateral} src={bkg_image} alt="image" />
        </div>
        <div className={styles.video1}>
            <p className={styles.titleVideo}>Festival de Vi&ntilde;a del Mar - 2007</p>
            <iframe width="336" height="240" src="https://www.youtube.com/embed/LV_ufKLjQGI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div className={styles.video2}>
            <p className={styles.titleVideo}>Raul Gil - Brasil</p>
            <iframe width="336" height="240" src="https://www.youtube.com/embed/t7ddBJJwqGc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>

    </div>
);
