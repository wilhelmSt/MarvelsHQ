import React from 'react';
import styles from '../styles/components/ComicsImg.module.css'
import { Card } from 'antd';


interface cardProps {
    id: string,
    title: string,
    description: string,
    characters: string,
    creators: string,
    price: number,
    thumbnail: {
        path: string,
        extension: string
    }
}

const ComicsImg: React.FC<cardProps> = ({id, title, description, characters, creators, price, thumbnail}) => {

    var thumb = String(thumbnail.path + '.' + thumbnail.extension);
    const imgTest = {
        backgroundImage: `url(${thumb})`,

    }

    var propies = {
        idInfo: id,
        titleInfo: title,
        descriptionInfo: description,
        charactersInfo: characters,
        creatoresInfo: creators,
        priceInfo: price,
        thumbInfo: thumb
    }

    return (
        <Card>
            <div className={styles.ComicsImg}>
                <div className={styles.imgtest} style={imgTest}>
                    
                    <div className={styles.imgbg}></div>
                    <div className={styles.imgdescription}>
                        <p>{title}</p>
                        <div className={styles.imgbutton}>Comprar</div>
                    </div>
                    
                </div>
            </div>

        </Card>
    );
}

export default ComicsImg;