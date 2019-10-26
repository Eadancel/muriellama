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
    <p>{props.description}</p>
    <div className={styles.iconoswrp_small}>
        <a href={props.spotify_link}><img className={styles.iconos} src={spotify_alone}/></a>
        <a href={props.itunes_link}><img className={styles.iconos} src={itunes_alone}/></a>
    </div>
  </div>
  <div className={styles.iconos_wrp}>
        <a href={props.spotify_link}><img className={styles.iconos} src={spotify}/></a>
        <a href={props.itunes_link}><img className={styles.iconos} src={itunes}/></a>
  </div>

</div>

export default () => (
    <div className={styles.wrapper}>

        <div className={styles.discografia}>
            <p>
                Canciones in&eacute;ditas compuestas por Muriel Lama
            </p>
            <Disco
                cover={coverVidaNova}
                title="Vida Nova"
                description="Bossa Nova y m&uacute;sica brasileira"
                spotify_link="https://open.spotify.com/album/5tzqjYvRYNukfxfDwVH8Kn"
                itunes_link="https://itunes.apple.com/us/album/vida-nova/1294925041"
            />
            <Disco
                cover={coverRespuesta}
                title="Respuesta"
                description="Pop&amp;Rock"
                spotify_link="https://open.spotify.com/album/3HULmp7M7h1j8DZrgawVJl"
                itunes_link="https://itunes.apple.com/us/album/respuesta/1325414591"
            />
            <p className={styles.titleVideo}>(Official Music Video)</p>
            <iframe width="330" height="210"  src="https://www.youtube.com/embed/_fLISTk-FLA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" ></iframe>
        </div>
        <div className={styles.wrpImage}>
            <img className={styles.imageLateral} src={bkg_image} alt="image" />
        </div>
    </div>
);
