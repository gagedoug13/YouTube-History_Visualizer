import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  let fileReader;
  const [watchHistory, setWatchHistory] = useState(null);

  const handleFileChosen = (file) => { 
    if (file.type != "application/json") {
        alert("Please choose the json file from your watch history.")
        file = null;
        return;
    } else {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        console.log(fileReader.readAsText(file));
    }
  };


  const handleFileRead = (e) => {
    const content = JSON.parse(fileReader.result);
    if (content[0]["subtitles"]){
      setWatchHistory(content)
      sessionStorage.setItem("watchHistory", JSON.stringify(content));
    } else {
      alert('Please choose correct file.')
      return;
    }
  };


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
            onChange={e => handleFileChosen(e.target.files[0])}
        />
        {watchHistory ? <Link
                          href={{
                            pathname: "/charts",
                          }}
                        >
                          <a><button>see data</button></a>
                        </Link> : null}
                
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
