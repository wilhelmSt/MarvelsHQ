import styles from '../styles/components/Head.module.css'

export default function Head() {
    return (
        <div className={styles.Head}>
            <nav className={styles.navdesktop}>
                <ul>
                    <li>HQ STORE</li>
                </ul>
            </nav>

            <img src="images/cart.svg" alt="cart-shop" className={styles.cart} />
        
        </div>
    )
}