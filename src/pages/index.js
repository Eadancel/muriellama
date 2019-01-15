import React from "react"
import bkg_image from "./img/bkg_inicio_2.png"
import spotify from "./img/BadgeSpotfy_dark.svg"
import itunes from "./img/GetItOniTunes_dark.svg"
import styles from "./css_modules/index.module.css";

export default () => (
    <inicio className={styles.inicio}>
        <imagen_lateral>
            <img className={styles.imageLateral} src={bkg_image} alt="image" />
        </imagen_lateral>
        <titulo>
            <p>
            Muriel Lama, cantante y compositora brasileira-chilena se especializa cantando Bossa Nova y MPB (m&uacute;sica popular brasilera). Dentro de su repertorio tambi&eacute;n interpreta m&uacute;sica internacional en espa&ntilde;ol e ingl&eacute;s.<br/>
            Como compositora ha grabado dos discos que actualmente se encuentran en spotify : “Vida Nova” y “Respuesta”.<br/>
            En su curr&iacute;culum incluye participaciones estables en hoteles, eventos de empresas y matrimonios como: Sheraton Miramar, Sol Meli&aacute; Puerto Varas, Marriott, Park Plaza, Radisson, The Royal Palm Plaza (Brasil), Casa Piedra, <br/>Hotel Hyatt, entre otros.<br/>
            Represent&oacute; a Brasil en el Festival de Vi&ntilde;a del Mar 2007 y es la voz femenina de algunas canciones del Perro Chocolo en Portugu&eacute;s
            </p>
            <iconos>
                <a href="https://open.spotify.com/artist/3E5zYk1G3gZyQ19lMDKrzq"><img style={{marginRight:"10px"}}src={spotify}/></a>
                <a href="https://itunes.apple.com/us/artist/muriel-lama/1294925042"><img src={itunes}/></a>
            </iconos>
        </titulo>

    </inicio>
);
