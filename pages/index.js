import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.homeDiv} >             
      <div className={styles.welcomeDiv}>
        <h1 className={styles.welcome}>Welcome to YouTube Data Visualizer</h1>
      </div>
    
      <div className={styles.fileInstructionsDiv}>
        <input 
            className={styles.fileButton} 
            type="file" 
            accept='.json' 
            id="myFile" 
            name="filename"
        />
                
        <h3 className={styles.or}>or</h3>
        <Link href='/instructions'>
          <a><button className={styles.basicInstructionsButton}>instructions</button></a>
        </Link>

      </div>
    
      <div className={styles.basicInstructionsDiv}>
        <p className={styles.howTitle}>how it works</p>
        <h3 className={styles.basicInstructions}>You download your raw <span style={{color: "red"}}>YouTube</span> data from <a className='googleLink' href='https://google.takeouts.com'>google.takeouts.com</a> and we 
          visualize it for you.</h3>
    
        <h3 className={styles.basicInstructions}>All you have to do is follow the instructions 
          above and you'll be able to see your most viewed channels, videos, 
          and key words from your YouTube history.</h3>
      </div>
    </div>
  )
}
