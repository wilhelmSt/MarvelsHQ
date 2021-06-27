import styles from '../styles/components/About.module.css'

export default function About() {
    return (
        <div className={styles.About}>
            <div className={styles.AboutContent}>
                <div className={styles.exitButton}>X</div>

                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus diam, posuere non arcu id, 
                    egestas eleifend mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Suspendisse vel diam hendrerit, sodales leo non, tincidunt velit. Praesent a fermentum arcu. Fusce in augue ut tortor 
                    semper semper at vitae lectus. Integer ut enim sed velit viverra vehicula. Vestibulum pellentesque eleifend justo a pulvinar.
                    Maecenas dignissim id erat sed congue. Vivamus suscipit ipsum nunc, vel consequat lorem luctus ut. Praesent placerat ante
                    id est consequat, volutpat sodales ex tristique. Integer venenatis sit amet tortor vel auctor. Aliquam dapibus nisl turpis,
                    et ornare ipsum rhoncus vel. Donec et risus ultrices, faucibus elit quis, ullamcorper mauris.
                    <br />
                    <br />
                    Nullam elit nibh, semper nec augue non, tincidunt convallis turpis. Quisque vitae accumsan eros. In nisl leo, cursus id enim a, 
                    scelerisque bibendum lorem. Nullam cursus ante nisi, eu viverra lacus interdum malesuada. Suspendisse dignissim tempus arcu in aliquet.
                    Nam pharetra blandit ipsum, sit amet aliquam dolor elementum nec. Nunc condimentum velit eu nisl tincidunt tristique. Morbi lacinia
                    purus non ipsum porta semper. Ut id justo nisi. Vivamus ultricies quis urna ac dignissim. Aliquam consequat vehicula orci, a congue velit.
                    Sed tincidunt nibh non nunc eleifend, a bibendum ipsum ornare. Integer sit amet dui eu quam euismod vestibulum feugiat faucibus enim.
                    Aenean vel risus lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi tincidunt dolor tellus.
                </p>
            </div>
        </div>
    );
}