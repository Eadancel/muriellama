import React from "react"
import styles from "./css_modules/clases.module.css";
import bkg_image from "./img/bkg_actuaciones.png";

export default () => (
    <div className={styles.wrpClases}>
        <div className={styles.wrpImage}>
            <img className={styles.imageLateral} src={bkg_image} alt="image" />
        </div>
        <div className={styles.textoClases}>
            <h3>Clases de Canto</h3>
            <p>4 clases por $52.000</p>
            <p>1 clases por $15.000</p>
        </div>
    </div>
);
