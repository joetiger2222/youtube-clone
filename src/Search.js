import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import SuggestedVideoCard from "./SuggestedVideoCard";
import Header from "./Header";

export default function Search (){
    const {state}=useLocation();
    const [searchVideos,setSearchVideos]=useState(null);



    function getSuggestedVideos(){

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9987e2b55cmsheebd5b7718b9e31p1a4c3djsn213f209f1eff',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
    
    fetch(`https://youtube-v31.p.rapidapi.com/search?q=${state}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`, options)
        .then(response => response.json())
        .then(data => setSearchVideos(data.items))
        .catch(err => console.error(err));
    }
    
    
    useEffect(()=>{
        
        getSuggestedVideos();
        console.log(searchVideos)
    },[state])




        console.log(state);
        if(searchVideos===null)return<h1>Loading...</h1>
    return (
        <div style={{display:'flex',flexDirection:'column',backgroundColor:'black',height:'100%',minHeight:'100vh'}}>
            <Header/>
        <div className="videos" style={{display:'flex',flexWrap:'wrap',width:'100%',margin:'0 0 0 0',justifyContent:'center',backgroundColor:'black',height:'100%',minHeight:'100vh'}}>{/*content*/}
        {searchVideos.map((video)=>(
            <SuggestedVideoCard image={video.snippet.thumbnails?.high?.url} title={video.snippet.title} channel={video.snippet.channelTitle} channelId={video.snippet.channelId} videoId={video.id.videoId} />
        ))}

        </div>

        </div>
    )
}