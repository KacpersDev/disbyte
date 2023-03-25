import styles from '../../styles/Home.module.css';

export default function Contact(){
    return(
        <div className={styles.contact_container}>
            <div className={styles.contact_header}>
                <div className={styles.about_hamburgers}>
                    <div className={styles.about_hamburger_1}></div>
                    <div className={styles.about_hamburger_2}></div>
                    <div className={styles.about_hamburger_3}></div>
                </div>
                <div className={styles.about}>
                    <p className={styles.about_header_title}>Contact</p>
                    <div className={styles.about_header_title_underline}></div>
                </div>
            </div>
            <div className={styles.contact_form}>
                <form action="POST">
                    <div className={styles.contact_fullname}>
                        <input className={styles.contact_input_box} id={styles.input_name} type="text" name='name' placeholder='Name' required/>
                        <input className={styles.contact_input_box} id={styles.input_surname} type="text" name='surname' placeholder='Surname' required/>
                    </div>
                    <div>
                        <input className={styles.contact_input_box} id={styles.input_email} type="email" name='email' placeholder='Email Address' required/>
                    </div>
                    <textarea className={styles.contact_textarea} name='message' placeholder='Message...' required/>
                    <button className={styles.contact_submit}>Submit</button>
                </form>
            </div>
        </div>
    )
}