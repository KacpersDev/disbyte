import styles from '../../styles/Home.module.css';

export default function About(){
    return(
        <div className={styles.about_container}>
            <div className={styles.about_title}>
                <div className={styles.about_hamburgers}>
                    <div className={styles.about_hamburger_1}></div>
                    <div className={styles.about_hamburger_2}></div>
                    <div className={styles.about_hamburger_3}></div>
                </div>
                <div className={styles.about}>
                    <p className={styles.about_header_title}>About Us</p>
                    <div className={styles.about_header_title_underline}></div>
                </div>
            </div>
            <div className={styles.about_box}>
                <p className={styles.box_content}>
                    At Disbyte, we specialize in <span style={{color: "#6B5AB0"}}>social media</span> management and
                    <span style={{color: "#E28D0C"}}> Reddit</span> advertising campaigns that help server hosters <span style={{color: "#6B5AB0"}}>boost </span>
                    their sales and <span style={{color: "#6B5AB0"}}>reach</span> their target audience.
                </p>
            </div>
            <div className={styles.about_break_point}></div>
            <div className={styles.about_box}>
                <p className={styles.box_content}>
                    We understand that <span style={{color: "#6B5AB0"}}>unique challenges</span> facing server hosting
                    businesses in the <span style={{color: '#ED6464'}}>competitive</span> gaming industry, and we are
                    <span style={{color: "#6B5AB0"}}> dedicated </span> to helping our clients <span style={{color: "#6B5AB0"}}>overcome</span> those challenges.
                </p>
            </div>
        </div>
    )
}