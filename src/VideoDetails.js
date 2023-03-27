import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useState } from "react";
import SideBarSuggest from "./SideBarSuggest";
import './HomePage.css';

export default function VideoDetails(){
    const {videoId}=useParams();


console.log(videoId)

    const [suggestedVideos,setSuggestedVideos]=useState([]);
    const [videoInfo,setVideoInfo]=useState(null);
function getSuggestedVideos(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9987e2b55cmsheebd5b7718b9e31p1a4c3djsn213f209f1eff',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
    
    fetch(`https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`, options)
        .then(response => response.json())
        .then(data => setSuggestedVideos(data.items))
        .catch(err => console.error(err));
}


function getVideoDetails(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9987e2b55cmsheebd5b7718b9e31p1a4c3djsn213f209f1eff',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
    
    fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`, options)
        .then(response => response.json())
        .then(data => setVideoInfo(data.items[0].snippet))
        .catch(err => console.error(err));
}


useEffect(()=>{
    getSuggestedVideos();
    getVideoDetails();
},[videoId])


if(videoInfo===null|| suggestedVideos===null)return <h1>Loading...</h1>



    return (
        <div className="videoPage" style={{display:'flex',width:'100%',backgroundColor:'black',height:'100%',minHeight:'100vh'}}>

<div style={{width:'80%',display:'flex',flexDirection:'column'}}>

<div style={{width:'100%',margin:'0 0 0 0',}}>
            <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="500px"
            ></ReactPlayer>

</div>

<h1 style={{color:'white',}}>{videoInfo.title}</h1>

</div>


<div className="sideBarSuggestHolder" style={{width:'20%',display:'flex',flexDirection:'column',overflow:'auto',position:'sticky'}}>
        
{suggestedVideos.map((video)=>(
            <SideBarSuggest  image={video.snippet.thumbnails?.high?.url} title={video.snippet.title} channel={video.snippet.channelTitle} channelId={video.snippet.channelId} videoId={video.id.videoId} />
        ))}
    
            </div>

        </div>
    )
}