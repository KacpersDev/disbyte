import styles from '../../styles/Home.module.css';

export default function Features(){
    return(
        <div className={styles.features_container}>
            <div className={styles.features_title}>
                <p style={{color: "white", fontSize: "25px"}}>Why DISBYTE?</p>
            </div>
            <div className={styles.features_boxs}>
                <div className={styles.features_box}>
                    <p className={styles.features_box_title}><span style={{color: 'lime'}}>Affordable</span> Pricing</p>
                    <p className={styles.features_box_description}>
                        Our services are priced to fit within
                        your budget, with packages starting at
                        just $10 for the first month.
                    </p>
                </div>
                <div className={styles.features_box}>
                <p className={styles.features_box_title}>Data <span style={{color: '#9C1A1A'}}>privacy</span> and <span style={{color: '#9C1A1A'}}>security</span></p>
                    <p className={styles.features_box_description}>
                        We prioritize the security
                        and privacy of our clients'
                        data above all else, and we never handle client data.
                    </p>
                </div>
                <div className={styles.features_box}>
                <p className={styles.features_box_title}><span style={{color: '#AF0DD8'}}>Transparent</span> planning</p>
                    <p className={styles.features_box_description}>
                        We prioritize open and honest
                        communication with our clients
                        throughout the entire marketing process.
                    </p>
                </div>
            </div>
        </div>
    )
}