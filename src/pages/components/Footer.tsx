import styles from '../../styles/Home.module.css';
import Logo from '../../images/logo.png';
import Discord from '../../images/discord.png';

import { useRouter } from 'next/router';

export default function Footer(){

    const router = useRouter();

    return(
        <div className={styles.footer_container}>
            <div className={styles.footer_boxes}>
                <div className={styles.footer_box}>
                    <p className={styles.footer_box_title}>Nagivation</p>
                    <div className={styles.footer_nav_buttons}>
                        <button className={styles.footer_nav_button} onClick={(() => router.push('/'))}>Home</button>
                        <button className={styles.footer_nav_button} onClick={(() => router.push('/products'))}>Products</button>
                        <button className={styles.footer_nav_button} onClick={(() => router.push('/contact'))}>Contact</button>
                    </div>
                </div>
                <div className={styles.footer_box}>
                    <img className={styles.footer_logo} src={Logo.src} alt={"Logo"} />
                </div>
                <div className={styles.footer_box}>
                    <p className={styles.footer_box_title}>Socials</p>
                    <div className={styles.footer_nav_buttons}>
                        <img className={styles.footer_socials_discord} src={Discord.src} alt={"Discord logo"} />
                    </div>
                </div>
            </div>
        </div>
    )
}