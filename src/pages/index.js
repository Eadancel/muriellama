import React from "react"
import bkg_image from "./img/bkg_inicio.png"
import spotify from "./img/BadgeSpotfy_dark.svg"
import itunes from "./img/GetItOniTunes_dark.svg"
import styles from "./css_modules/index.module.css";

export default () => (
    <inicio className={styles.inicio}>
        <imagen_lateral>
            <img className={styles.imageLateral} src={bkg_image} alt="image" />
        </imagen_lateral>
        <titulo><h2>Cantante y Compositora</h2></titulo>
        <iconos>
            <img style={{marginRight:"10px"}}src={spotify}/>
            <img src={itunes}/>
        </iconos>
    </inicio>
);
