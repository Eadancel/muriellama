import React from "react"
import styles from "./css_modules/discografia.module.css";
import bkg_image from "./img/bkg_discografia.png";
import spotify from "./img/BadgeSpotfy_dark.svg"
import itunes from "./img/GetItOniTunes_dark.svg"
import coverRespuesta from "./img/coverRespuesta.png";
import coverVidaNova from "./img/coverVidaNova.png"
import itunes_alone from "./img/apple_alone_dark.svg";
import spotify_alone from "./img/spotify_alone_dark.svg";

const Disco = props =>
<div className={styles.disco}>
  <img src={props.cover} className={styles.cover} alt="" />
  <div className={styles.title}>
    <h3>{props.title}</h3>
    <div className={styles.iconoswrp_small}>
        <img className={styles.iconos} src={spotify_alone}/>
        <img className={styles.iconos} src={itunes_alone}/>
    </div>
  </div>
  <div className={styles.iconos_wrp}>
        <img className={styles.iconos} src={spotify}/>
        <img className={styles.iconos} src={itunes}/>
  </div>
  
</div>

export default () => (
    <div className={styles.wrapper}>

        <div className={styles.discografia}>
            <Disco 
                cover={coverRespuesta}
                title="Respuesta"
                spotify_link="./"
                itunes_link="./"    
            />
            <Disco 
            cover={coverVidaNova}
            title="Vida Nova"
            spotify_link="./"
            itunes_link="./"    
            />
        </div>
        <div className={styles.wrpImage}>
            <img className={styles.imageLateral} src={bkg_image} alt="image" />
        </div>
    </div>
);
