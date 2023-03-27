import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import './HomePage.css';

export default function Header (){
    const [searchTerm,setSearchTerm]=useState("");
    const [searchList,setSearchList]=useState(null);
    const [searchListActive,setSearchListActive]=useState(false);
    const navigate=useNavigate();

    function getSuggestions(e){
        setSearchTerm(e.target.value);

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9987e2b55cmsheebd5b7718b9e31p1a4c3djsn213f209f1eff',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };
        
        fetch(`https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`, options)
            .then(response => response.json())
            .then(data => setSearchList(data.items))
            .catch(err => console.error(err));
        }


    

    function getSearch(){
        if(searchTerm!==''){
            navigate('/Search',{state:searchTerm});
        }
    }

    function renderSuggestions(){
        if(searchList){
            
        return (
            <ul style={{zIndex:'200',background:'white',width:'250px',borderRadius:'10px',display:searchListActive?'block':'none'}}>
            {searchList.slice(0,5).map((video)=>(
            <li style={{margin:'20px 0',lineHeight:'15px'}}>{video.snippet.title}</li>
        ))}
            </ul>
        )
            }
    }

    useEffect(()=>{
        if(searchTerm===''|| searchTerm===null){
            setSearchListActive(false);
        }else{
            setSearchListActive(true)
        }
        console.log(searchListActive)
    },[searchTerm])

    return(
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'100px',width:'100%',margin:'60px 0 0 0'}}>{/*header*/}
        <div style={{margin:'0 0 0 30px'}}>
            <Link to='/'>
        <img src={logo}style={{width:'100px'}}/>
        </Link>
        </div>
        <div style={{zIndex:'200',margin:searchListActive?'350px 80px 0 0':'0 80px 0 0',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div style={{display:'flex',alignItems:'center'}}>
            <input onBlur={()=>setSearchListActive(false)} className="searchInput" placeholder="Search..." onChange={getSuggestions} style={{borderRadius:'10px',width:'300px',height:'30px',margin:'0 20px 0 0',fontSize:'25px'}} type='text'></input>
            <button onClick={getSearch} style={{backgroundColor:'white',margin:'0 0 0 -60px',border:'none',cursor:'pointer'}}><AiOutlineSearch/></button>
            </div>
           
            {renderSuggestions()}
            
        </div>
    </div>
    )
}