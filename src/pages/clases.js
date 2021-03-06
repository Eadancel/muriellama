import React from "react"
import styles from "./css_modules/clases.module.css";
import bkg_image from "./img/bkg_clases.png";

export default () => (
    <div className={styles.wrpClases}>
        <div className={styles.wrpImage}>
            <img className={styles.imageLateral} src={bkg_image} alt="image" />
        </div>
        <div className={styles.textoPrecio}>
            <h3>Clases de Canto</h3>
            <p>4 clases por $60.000</p>
            <p>1 clases por $18.000</p>
        </div>
        <div className={styles.textoClases}>

            <p>Muriel Lama, cantante y compositora Brasilera Chilena, cantó en el Festival de Vińa del Mar representando a Brasil con una canción de su autoría.
            Titulada de Intérprete Vocal en el Instituto internacional de Música Projazz y con más de 15 ańos de estudios de técnicas vocales imparte clases de canto especializadas en técnicas de respiración y apoyo, vocalización, impostación, afinación, preparación de una canción y puesta en escena.
            El alumno tiene la facultad de aprender fonéticas en portugués, espańol e inglés.<br/>
            Las clases son en el sector de Plaza Ńuńoa</p>

        </div>
    </div>
);
