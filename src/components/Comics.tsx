import styles from '../styles/components/Comics.module.css'

import ComicsImg from './ComicsImg'

export default function Comics() {

    return (
        <div className={styles.Comics}>
            <div className={styles.ComicHead}>
                <h1>Marvel's Comics</h1>
                <div></div>
            </div>

            <div className={styles.Imagens}>
                <ComicsImg />
                <ComicsImg />
                <ComicsImg />
                <ComicsImg />
                <ComicsImg />
                <ComicsImg />
                <ComicsImg />
                <ComicsImg />
                <ComicsImg />
                <ComicsImg />
                
            </div>
        </div>
    )
}