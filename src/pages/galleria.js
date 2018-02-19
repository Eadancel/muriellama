import React from "react"
import styles from "./css_modules/gallery.module.css";
import bkg_image from "./img/bkg_actuaciones.png";
import Gallery from 'react-grid-gallery';

import hori1 from "./img/gallery/full/hori_1.jpg";
import hori1_th from "./img/gallery/thumbnail/hori_1.jpg";
import hori2 from "./img/gallery/full/hori_2.jpg";
import hori2_th from "./img/gallery/thumbnail/hori_2.jpg";
import hori3 from "./img/gallery/full/hori_3.jpg";
import hori3_th from "./img/gallery/thumbnail/hori_3.jpg";

import hori4 from "./img/gallery/full/hori_4.jpg";
import hori4_th from "./img/gallery/thumbnail/hori_4.jpg";
import hori5 from "./img/gallery/full/hori_5.jpg";
import hori5_th from "./img/gallery/thumbnail/hori_5.jpg";
import hori6 from "./img/gallery/full/hori_6.jpg";
import hori6_th from "./img/gallery/thumbnail/hori_6.jpg";

import verti1 from "./img/gallery/full/vert_1.jpg";
import verti1_th from "./img/gallery/thumbnail/vert_1.jpg";

import verti2 from "./img/gallery/full/vert_2.jpg";
import verti2_th from "./img/gallery/thumbnail/vert_2.jpg";

import verti3 from "./img/gallery/full/vert_3.jpg";
import verti3_th from "./img/gallery/thumbnail/vert_3.jpg";

const IMAGES =
[{
        src: hori1,
        thumbnail: hori1_th,
        thumbnailWidth: 200,
        thumbnailHeight: 134,        
},
{
        src: hori2,
        thumbnail: hori2_th,
        thumbnailWidth: 200,
        thumbnailHeight: 134,        
},
{
    src: verti2,
    thumbnail: verti2_th,
    thumbnailWidth: 300,
    thumbnailHeight: 400
},
{
        src: hori3,
        thumbnail: hori3_th,
        thumbnailWidth: 200,
        thumbnailHeight: 134
},
{
        src: hori4,
        thumbnail: hori4_th,
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
    src: verti1,
    thumbnail: verti1_th,
    thumbnailWidth: 222,
    thumbnailHeight: 400
},
{
        src: hori5,
        thumbnail: hori5_th,
        thumbnailWidth: 200,
        thumbnailHeight: 144
},
{
        src: hori6,
        thumbnail: hori6_th,
        thumbnailWidth: 200,
        thumbnailHeight: 150    
},{
    src: verti3,
    thumbnail: verti3_th,
    thumbnailWidth: 300,
    thumbnailHeight: 400
}]

export default () => (
    <div className={styles.wrpGallery}>
        <div className={styles.imGallery}>
        
         <img className={styles.imageLateral} src={bkg_image} alt="image" />
         </div>
        <div className={styles.secGallery}>
            <Gallery images={IMAGES} backdropClosesModal={true} enableImageSelection={false}/>
        </div>
    </div>
);
