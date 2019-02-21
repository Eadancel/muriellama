import React from "react"
import styles from "./css_modules/eventos.module.css";
import bkg_image from "./img/bkg_eventos.png";
import YouTube from 'react-youtube';

export default () => (
    <div className={styles.wrpActuaciones}>
        <div className={styles.wrpImage}>
            <img className={styles.imageLateral} src={bkg_image} alt="image" />
        </div>
        <div className={styles.title}>
            <p>
                Muriel Lama se especializa cantando en eventos de empresas y matrimonios Bossa Nova y otros
            </p>
        </div>

        <div className={styles.video1}>
            <p/>
            <p className={styles.titleVideo}>Cantante Bossa Nova - Eventos</p>

            <iframe width="330" height="210" src="https://www.youtube.com/embed/siQbG5wdkoQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
        </div>


        <div className={styles.video2}>
            <p className={styles.titleVideo}>Bora pra lá</p>
            <p className={styles.titleVideo}>(Official Music Video)</p>

            <iframe width="330" height="210" src="https://www.youtube.com/embed/_fLISTk-FLA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
        </div>
    </div>
);
