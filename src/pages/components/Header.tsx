import styles from '../../styles/Home.module.css';
import Logo from '../../images/logo.png';

export default function Header(){
    return(
        <div className={styles.header_container}>
            <div className={styles.header_navigation}>
                <img className={styles.header_logo} src={Logo.src} alt={"Company logo"}/>
                <div className={styles.header_buttons}>
                    <button className={styles.header_button}>HOME</button>
                    <button className={styles.header_button}>PRODUCTS</button>
                    <button className={styles.header_button}>CONTACT</button>
                </div>
            </div>
        </div>
    )
}