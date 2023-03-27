import React, { useState } from "react";

export default function SideBar({setWord}){
    const [active,setAtive]=useState("New");
    const [hColor,setHColor]=useState("red");

    
    return (
        <div style={{width:'18%',position:"fixed",top:'150px',left:'20px',alignItems:'center',display:'flex',flexDirection:'column',}}>
        
        <div  onClick={()=>setWord("New")}  style={{width:'80%',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
            <h5 onClick={()=>setAtive('New')} style={{color: active==='New'?'White':'red'}}>New</h5>
            </div>
        <div onClick={()=>setWord("ReactJs")} style={{width:'80%',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}} >
            <h5 onClick={()=>setAtive('ReactJs')} style={{color: active==='ReactJs'?'White':'red'}}>ReactJs</h5>
            </div>
        <div onClick={()=>setWord("Coding")} style={{width:'80%',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
            <h5 onClick={()=>setAtive('Coding')} style={{color: active==='Coding'?'White':'red'}}>Coding</h5>
            </div>
        <div onClick={()=>setWord("Music")} style={{width:'80%',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
            <h5 onClick={()=>setAtive('Music')} style={{color: active==='Music'?'White':'red'}}>Music</h5>
            </div>
        <div onClick={()=>setWord("Educational")} style={{width:'80%',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
            <h5 onClick={()=>setAtive('Educational')} style={{color: active==='Educational'?'White':'red'}}>Educational</h5>
            </div>
        <div onClick={()=>setWord("Podcast")} style={{width:'80%',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
            <h5 onClick={()=>setAtive('Podcast')} style={{color: active==='Podcast'?'White':'red'}}>Podcast</h5>
            </div>
        <div onClick={()=>setWord("Movie")} style={{width:'80%',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
            <h5 onClick={()=>setAtive('Movie')} style={{color: active==='Movie'?'White':'red'}}>Movie</h5>
            </div>
    
            </div>
    )
}