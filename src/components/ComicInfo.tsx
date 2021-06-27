import React from 'react';
import styles from '../styles/components/ComicInfo.module.css'

interface cardInfoProps {
    img: string;
    title: string;
    description: String;
    characters: String;
    creators: String;
    price: Number;
}

const ComicInfo: React.FC<cardInfoProps> = ({img, title, description, characters, creators, price}) => {
    return (
        <div className={styles.ComicInfo}>
            <div className={styles.ComicInfoContent}>
                <div className={styles.ComicData}>
                    <h2>Marvel's Comic</h2>
                    <div className={styles.ComicDataInfo}>

                        <div className={styles.infoContentEach}>
                            <p>Title</p>
                            <p>{title}</p>
                        </div>
                        <div className={styles.infoContentEach}>
                            <p>Description</p>
                            <p>{description}</p>
                        </div>
                        <div className={styles.infoContentEach}>
                            <p>Caracters</p>
                            <p>{characters}</p>
                        </div>
                        <div className={styles.infoContentEach}>
                            <p>Creators</p>
                            <p>{creators}</p>
                        </div>
                        <div className={styles.infoContentEach}>
                            <p>Price</p>
                            <p>U$ {price}</p>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.ComicImg}>
                    <button type='button' className={styles.buttonExit}>X</button>
                    <button type='button' className={styles.buttonBuy}>Comprar</button>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default ComicInfo;