import styles from '../../styles/Home.module.css';

export default function Slogan(){
    return(
        <div className={styles.slogan_container}>
            <div className={styles.slogan}>
                <div className={styles.slogan_left}>
                    <p className={styles.slogan_left_text}>
                        Do you want to take your <span className={styles.slogan_important}>online
                        presence</span> to the <span className={styles.slogan_important}>next level</span> and <span className={styles.slogan_important}>grow</span> your customer base?
                    </p>
                </div>
                <div className={styles.slogan_right}>
                    <p className={styles.slogan_right_title}>Look no further then</p>
                    <div className={styles.slogan_hamburgers}>
                        <p className={styles.slogan_company_title}>Disbyte</p>
                        <div className={styles.slogan_hamburger_1}></div>
                        <div className={styles.slogan_hamburger_2}></div>
                        <div className={styles.slogan_hamburger_3}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}