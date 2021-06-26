import About from './About'

import styles from '../styles/components/Head.module.css'

export default function Head() {
    return (
        <div className={styles.Head}>
            <nav className={styles.navdesktop}>
                <ul>
                    <li><a href=".Head">HQ STORE</a></li>
                    <li><a href=".About-us">ABOUT US</a></li>
                </ul>
            </nav>

            <div className={styles.menumobile}>
                <nav className={styles.navmobile}>
                    <ul className={styles.scaleUl}>
                        <li><a href=".Head">HQ STORE</a></li>
                        <li><a href=".About-us">ABOUT US</a></li>
                    </ul>
                </nav>
            </div>

            <img src="images/cart.svg" alt="cart-shop" className={styles.cart} />
            
            <About />
        </div>
    )
}