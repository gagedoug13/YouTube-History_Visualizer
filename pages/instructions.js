import React from 'react'
import Image from 'next/image'
import styles from '../styles/instructions.module.css'

export default function Instructions() {
    return (
        <div>
            <div className={styles.instructionsCard}>
                <h2 className={styles.instructionsBody}>Step 1. go to <a target='_blank' href='https://takeout.google.com/'>takeout.google.com</a> to download your youtube history.</h2>
                <Image rel="preload" src='/instructions/google-takeout.png' alt="me" width={850} height={420} />
            </div>

            <div className={styles.instructionsCard}>
                <h2 className={styles.instructionsBody}>Scroll down and hit deselect all to uncheck all of the chosen data. </h2>
                <Image rel="preload" src='/instructions/deselect-all.png' alt="me" width={850} height={420}/>
            </div>

            <div className={styles.instructionsCard}>
                <h2 className={styles.instructionsBody}>Now go to the bottom and hit the checkmark next to the YouTube icon. Next, click on Multiple Formats under the YouTube button. </h2>
                <Image rel="preload" src='/instructions/select-youtube.png' alt="me" width={850} height={420}/>
            </div>

            <div className={styles.instructionsCard}>
                <h2 className={styles.instructionsBody}>Under the History tab, change the format from HTML to JSON and hit OK.</h2>
                <Image rel="preload" src='/instructions/conversion.png' alt="me" width={850} height={420}/>
            </div> 

            <div className={styles.instructionsCard}>
                <h2 className={styles.instructionsBody}>Hit the <span>Next step</span> button and then scroll down and hit <span>Create export</span>.</h2>
                <Image rel="preload" src='/instructions/create-export.png' alt="me" width={850} height={420}/>
            </div>

            <div className={styles.instructionsCard}>
                <h2 className={styles.instructionsBody}>When the data is ready, go to the email from Google and download your files.</h2>
                <Image rel="preload" src='/instructions/download-your-files.png' alt="me" width={850} height={420}/>
            </div>

            <div className={styles.instructionsCard}>
                <h2 className={styles.instructionsBody}>In the location that you saved your data, go to the zip file and double-click takeout / youtube and youtube music / history/ and at the top of the page hit extract all.</h2>
                <Image rel="preload" src='/instructions/extract-all.png' alt="me" width={850} height={420}/>
            </div>

            <div className={styles.instructionsCard}>
                <h2 className={styles.instructionsBody}>Its time to upload your data. When choosing the file, go to Takeout / YouTube and YouTube Music / History / Watch History.</h2>
                <Image rel="preload" src='/instructions/zip-file.png' alt="me" width={850} height={420}/>
            </div>
        </div>
    )
}
