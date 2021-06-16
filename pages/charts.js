import React from 'react'
export default function charts() {
    
    const watchHistory = JSON.parse(sessionStorage.getItem("watchHistory"))
    
    return (
        
        <div>
            {watchHistory ? (<div>hi</div>) : (<div>NO GOOD</div>)}
        </div>
    )
}
