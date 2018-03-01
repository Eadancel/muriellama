import React from "react"
import styles from "./css_modules/contacto.module.css";
import bkg_image from "./img/bkg_contacto.png";

export default () => (
    <div className={styles.wrapper}>
        <div className={styles.informacion}>
            <h3>Muriel Lama</h3>
            <a href="mailto:muriellama@muriel.cl">muriellama@muriel.cl</a>
            <p>whatsapp:+569 9562 6431</p>
            <br/>
            <h3>Otras p&aacute;ginas de Muriel Lama</h3>
            <a href="http://www.terapiasdebienestar.cl">www.terapiasdebienestar.cl</a><br/>
            <a href="http://www.murielflowers.com">wwww.murielflowers.com</a>
            <br/>
            <br/>

            <h3>Dise&ntilde;o Web</h3>
            <a href="mailto:lrosas@gmail.com">Leopoldo Rosas</a><br/>

        </div>

        <div className={styles.wrpImage}>
            <img className={styles.imageLateral} src={bkg_image} alt="image" />
        </div>
    </div>
);
