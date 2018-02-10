import React from "react"
import styles from "./css_modules/contacto.module.css";
import bkg_image from "./img/bkg_contacto.png";

export default () => (
    <div className={styles.wrapper}>
        
        <div className={styles.formulario}>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <div>
                    <div><input type="text" name="nombre" id="name" placeholder="Nombre" /></div>
                    <div><input type="email" name="email" id="email" placeholder="Email" /></div>
                    <div><textarea name="mensaje" id="message" placeholder="Mensaje" rows="4"></textarea></div>
                </div>
                <input type="submit" value="Enviar" />
                
            </form>
                
        </div>
        <div className={styles.informacion}>
            <h3>Muriel Lama</h3>
            <p>muriellama@muriel.cl</p>
            <p>whatsapp:+569 9562 6431</p>
        </div>
        <div className={styles.wrpImage}>
            <img className={styles.imageLateral} src={bkg_image} alt="image" />
        </div>
    </div>
);
