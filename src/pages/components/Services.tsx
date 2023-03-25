import styles from '../../styles/Home.module.css';

export default function Services(){
    return(
        <div className={styles.services_container}>
            <div className={styles.services_header}>
                <div className={styles.about_hamburgers}>
                    <div className={styles.about_hamburger_1}></div>
                    <div className={styles.about_hamburger_2}></div>
                    <div className={styles.about_hamburger_3}></div>
                </div>
                <div className={styles.about}>
                    <p className={styles.services_header_title}>Services</p>
                    <div className={styles.services_header_title_underline}></div>
                </div>
            </div>
            <div className={styles.banners}>
                <div className={styles.banner}>
                    <p className={styles.banner_title}><span style={{color: '#52DE21'}}>Social Media</span> Advertisement</p>
                    <div className={styles.banner_breakline}></div>
                    <p className={styles.banner_description}>
                        We’ll help you manage your <span style={{color: '#17DDEA'}}>social media accounts</span>, including
                        <span style={{color: '#17DDEA'}}> creating</span> and <span style={{color: '#17DDEA'}}>scheduling posts, responding</span> to messages and
                        comments and <span style={{color: '#52DE21'}}>growing</span> your followers.
                    </p>
                </div>
                <div className={styles.banner}>
                    <p className={styles.banner_title}><span style={{color: '#E28D0C'}}>Reddit</span> Advertising Campaigns</p>
                    <div className={styles.banner_breakline} style={{width: '460px'}}></div>
                    <p className={styles.banner_description}>
                        We’ll create and run <span style={{color: '#E28D0C'}}>Reddit</span> advertising <span style={{color: '#17DDEA'}}>compaigns</span> tailored to
                        your specific <span style={{color: '#17DDEA'}}>target audience</span>, ensuring that your <span style={{color: '#17DDEA'}}>message in seen </span>
                        by the <span style={{color: '#17DDEA'}}>right people</span>.
                    </p>
                </div>
                <div className={styles.banner}>
                    <p className={styles.banner_title}><span style={{color: '#DADE1E'}}>Custom</span> Marketing Plans</p>
                    <div className={styles.banner_breakline} style={{width: '365px'}}></div>
                    <p className={styles.banner_description}>
                        We’ll work with you to develop a <span style={{color: '#17DDEA'}}>customized</span> marketing plan that
                        aligns with your <span style={{color: '#17DDEA'}}>business goals</span> and help you <span style={{color: '#17DDEA'}}>achieve the results </span>
                        you’re looking for
                    </p>
                </div>
            </div>
        </div>
    )
}