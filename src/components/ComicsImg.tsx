import React, {useEffect} from 'react';
import styles from '../styles/components/ComicsImg.module.css'
import { Card } from 'antd';
import ComicInfo from './ComicInfo';

interface cardProps {
    img: string;
    title: String;
    description: String;
    characters: String;
    creators: String;
    price: Number;
}

const ComicsImg: React.FC<cardProps> = ({img, title, description, characters, creators, price}) => {

    return (
        <Card>
            <div className={styles.ComicsImg}>
                <div className={styles.imgtest}>
                    
                    <div className={styles.imgbg}>
                        <img src={img} alt="comic thumbnail" />
                    </div>
                    <div className={styles.imgdescription}>
                        <p>Marvel Comics</p>
                        <div className={styles.imgbutton}>Comprar</div>
                    </div>
                    
                </div>
            </div>

            <ComicInfo img='aa' title='a' description='' characters='' creators='' price={10} />
        </Card>
    );
}

export default ComicsImg;