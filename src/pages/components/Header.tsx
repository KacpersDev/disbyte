import styles from '../../styles/Home.module.css';
import Logo from '../../images/logo.png';
import { useRouter } from 'next/router';

export default function Header(){

    const router = useRouter();

    return(
        <div className={styles.header_container}>
            <div className={styles.header_navigation}>
                <img className={styles.header_logo} src={Logo.src} alt={"Company logo"} onClick={(() => router.push('/'))}/>
                <div className={styles.header_buttons}>
                    <button className={styles.header_button} onClick={(() => router.push('/'))}>HOME</button>
                    <button className={styles.header_button} onClick={(() => router.push('/products'))}>PRODUCTS</button>
                    <button className={styles.header_button} onClick={(() => router.push('/contact'))}>CONTACT</button>
                </div>
            </div>
        </div>
    )
}