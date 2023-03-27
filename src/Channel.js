import React, { useEffect, useState } from "react";
import Header from './Header'
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import SuggestedVideoCard from "./SuggestedVideoCard";
export default function Channel(){
    let {channelId}=useParams();
     const [channelDetails,setChannelDetails]=useState(null);
     const [channelVideos,setChannelVideos]=useState(null);


function getChannelDetails(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9987e2b55cmsheebd5b7718b9e31p1a4c3djsn213f209f1eff',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
    
    fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${channelId}`, options)
        .then(response => response.json())
        .then(data => setChannelDetails(data.items[0]))
        .catch(err => console.error(err));
}
   

function getChannelVideos(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9987e2b55cmsheebd5b7718b9e31p1a4c3djsn213f209f1eff',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
    
    fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=50`, options)
        .then(response => response.json())
        .then(data => setChannelVideos(data.items))
        .catch(err => console.error(err));
}





useEffect(()=>{
    getChannelDetails();
    getChannelVideos();
   
},[])
console.log('from channel',channelDetails);
console.log('from channel videos',channelVideos);
if(channelDetails===null||channelVideos===null)return <h1>Loading...</h1>

    return (
        <div style={{backgroundColor:'black',width:'100%',height:'100%',display:'flex',flexDirection:'column',minHeight:'100vh',alignItems:'center',lineHeight:'10px'}}>
            <Header/>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>{/*img and it's data*/}
            <img src={channelDetails.snippet?.thumbnails?.default?.url}
                style={{width:'150px',height:'150px',borderRadius:'100%'}}
            />
            <h3 style={{color:'white'}}>{channelDetails.snippet.title}</h3>
            <p style={{color:'white',opacity:'.8'}}>{channelDetails.statistics.subscriberCount+' Subscriber'}</p>
            <p style={{color:'white',opacity:'.8'}}>{channelDetails.statistics.videoCount+' Videos'}</p>
        </div>

        <div className="videos" style={{display:'flex',flexWrap:'wrap',width:'90%',margin:'0 0 0 0',lineHeight:'30px',justifyContent:'center'}}>{/*content*/}
        {channelVideos.map((video)=>(
            <SuggestedVideoCard image={video.snippet.thumbnails?.high?.url} title={video.snippet.title} channel={video.snippet.channelTitle} channelId={video.snippet.channelId} videoId={video.id.videoId} />
        ))}

        </div>


        </div>
    )
}