import styles from '../styles/components/ComicsImg.module.css'

export default function ComicsImg() {
    return (
        <div className={styles.ComicsImg}>
            <div className={styles.imgtest}>
                <p>0</p>
                
                <div className={styles.imgbg}></div>
                <div className={styles.imgdescription}>
                    <p>Marvel Comics</p>
                    <div className={styles.imgbutton}>Comprar</div>
                </div>
                
            </div>
        </div>
    );
}