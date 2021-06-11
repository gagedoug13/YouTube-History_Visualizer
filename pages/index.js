import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  let fileReader;
  let fileData = null;
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
    // console.log(file)
  };

const test = () => {
  console.log('this is a test')
}
useEffect(test)



const handleFileRead = (e) => {
    const content = fileReader.result;
    fileData = content;
    setWatchHistory(fileData)
};

// componentDidMount(){
  // this.topFiveChannels()
  // this.topFiveKeywords()
  // this.videosPerMonth()
// }

// videosPerMonth = () => {
//   const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//   const monthValues = [null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  
//   for (let i=0; i<data.length; i++) {
//       const time = data[i]["time"]
//       const year = time.split('').slice(2,4).join('')
//       if (time) {
//           if (year == 20) {
//               let month = +time.split('').slice(5,7).join('')
//               monthValues[month]++
//           } else {
//               continue
//           }
//       } 
//   }
//   let views = monthValues.slice(1)
//   let monthlyViews = []

//   for (let i=0; i<views.length; i++) {
//       monthlyViews.push([monthNames[i], views[i]])
//   }
 
//   let sortedMonths = monthlyViews.sort((a, b) => b[1] - a[1]).slice(0, 3)

//   this.setState({
//       viewsPerMonth: views,
//       topThreeMonths: sortedMonths
//   })
  
// }

// listOfTopChannels = () => {
//   let channels = {}
//   for (let i=0; i<data.length; i++) {
//       if (data[i]["subtitles"]) {
//           const channel = data[i]["subtitles"][0]["name"]
//           if (!channels[channel]) {
//               channels[channel] = 1
//           } else {
//               channels[channel]++
//           }
//       }
//   }
//   let arrayOfChannels = []
//   for (let obj in channels) {
//       arrayOfChannels.push([obj, channels[obj]])
//   }
  
//  let sortedList = arrayOfChannels.sort(function(a, b) {
//       return b[1] - a[1] 
//   })

//   sortedList = sortedList.slice(0, 50)

//   this.setState({
//       chartData: sortedList
//   })
//   return sortedList
// }


// listOfTopKeywords = () => {
//   let keywords = {}
//   const uselessKeywords = ["watched", "-", "the", "that", "you", "i", "has", "my", "&", "of", "a",
//                            "to", "|", "with", "for", "and", "in", "on", "how", "is", "at", "be",
//                           "by", "from", "this", "out", "his", "do", "an", "it", "or", "get", "gets",
//                           "your", "1", "2", '""', "vs.", "he", "new", "they", "video", "been", 
//                           "what", "removed", "3"]
//   for (let i=0; i<data.length; i++) {
//       if (data[i]["title"]) {
//           const title = data[i]["title"].toLowerCase().split(' ')
          
//          for (let word of title) {
//              if (word == "") {
//                  continue

//              } else if (!uselessKeywords.includes(word)) {
//                   if (!keywords[word]) {
//                       keywords[word] = 1
//                   } else {
//                       keywords[word]++
//                   }
//              }
//          }
//       }
//   }

//   let arrayOfKeywords = []
//   for (let obj in keywords) {
//       arrayOfKeywords.push([obj, keywords[obj]])
//   }
  
//  let sortedList = arrayOfKeywords.sort(function(a, b) {
//       return b[1] - a[1] 
//   })
  
//   sortedList = sortedList.slice(0, 50)
 
//   this.setState({
//       chartData: sortedList
//   })
//   return sortedList
// }

// popUpWindow = (event) => {
//   let popup = document.querySelector(`.popup${event.target.id}`)

//   if (popup) {
//       popup.style.display = ""
//       popup.style.position = "relative"
//       popup.style.width = "6vw"
     
//       popup.style.top = -10 + "px"
//       popup.style.left = 18 + "px"
//   } 

// }

// deletePopUpWindow = (event) => {
//   let popup = document.querySelector(`.popup${event.target.id}`)
//   if (popup) {
//       popup.style.display = "none"
//   }
 
// }

// topFiveVideos = () => {
//   let titles = {}
//   for (let i=0; i<data.length; i++) {
//       const videoTitle = data[i]['title'].split('').slice(8).join('')
//       if (videoTitle) {
//           if (titles[videoTitle]) {
//               titles[videoTitle]++
//           } else {
//               titles[videoTitle] = 0
//           }
//       }
//   }

//   let arrayOfTitles = []
//   for (let obj in titles) {
//       arrayOfTitles.push([obj, titles[obj]])
//   }
  
//  let sortedList = arrayOfTitles.sort(function(a, b) {
//       return b[1] - a[1] 
//   })

//   sortedList = sortedList.slice(0, 50)

// }

// topFiveChannels = () => {
//   const topFive = this.listOfTopChannels(data).slice(0, 5)
//   this.setState({
//       topFiveChannels: topFive
//   })
// }

// topFiveKeywords = () => {
//   const topFive = this.listOfTopKeywords(data).slice(0, 5)

//   this.setState({
//       topFiveKeywords: topFive
//   })
// } 
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
