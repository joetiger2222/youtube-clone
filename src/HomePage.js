import React, { useEffect, useState } from "react";
import logo from './logo.png';
import SideBar from "./SideBar";
import SuggestedVideoCard from "./SuggestedVideoCard";
import Header from "./Header";
import './HomePage.css';

export default function HomePage(){
    const [category,setCategory]=useState('New')

    const [suggestedVideos,setSuggestedVideos]=useState([]);

function getSuggestedVideos(){

    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9987e2b55cmsheebd5b7718b9e31p1a4c3djsn213f209f1eff',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch(`https://youtube-v31.p.rapidapi.com/search?q=${category}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`, options)
	.then(response => response.json())
	.then(data => setSuggestedVideos(data.items))
	.catch(err => console.error(err));
}


useEffect(()=>{
    
    getSuggestedVideos();
    console.log(suggestedVideos)
},[category])


if(suggestedVideos===null){
    return(
        <h1>Loading...</h1>
    )
}


    return (
        <div style={{backgroundColor:'black',width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>

            <Header/>

    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1 style={{color:'white'}}><span style={{color:'red'}}>{category}</span> Videos</h1>
        <div style={{display:'flex',backgroundColor:'black',width:'100%',margin:'50px 0 0 0'}}>{/*sidebar and content*/}
       

        <SideBar setWord={(e)=>setCategory(e)}/>

        <div className="videos" style={{display:'flex',flexWrap:'wrap',width:'80%',margin:'0 0 0 20%'}}>{/*content*/}
        {suggestedVideos.map((video)=>(
            <SuggestedVideoCard image={video.snippet.thumbnails?.high?.url} title={video.snippet.title} channel={video.snippet.channelTitle} channelId={video.snippet.channelId} videoId={video.id.videoId} />
        ))}

        </div>

        </div>
        </div>

        </div>
    )
}