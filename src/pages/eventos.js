import React from "react"
import styles from "./css_modules/eventos.module.css";
import bkg_image from "./img/bkg_discografia.png";
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
            <p className={styles.titleVideo}>Garota de Ipanema</p>
            <iframe width="336" height="240" src="https://www.youtube.com/embed/k85XGq2aM8E?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div className={styles.video2}>
            <p className={styles.titleVideo}>Aguas de Março</p>
            <iframe width="336" height="240" src="https://www.youtube.com/embed/6VVezg_3VjE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div className={styles.video3}>
            <p className={styles.titleVideo}>What a wonderful world</p>
            <iframe width="336" height="240" src="https://www.youtube.com/embed/t94JT0L4OSE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div className={styles.video4}>
            <p className={styles.titleVideo}>New York</p>
            <iframe width="336" height="240" src="https://www.youtube.com/embed/F-_S99UnzSE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
);
