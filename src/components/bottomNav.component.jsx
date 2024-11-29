
import styled from "styled-components"
import React from "react"
import { useState } from "react"
import { RiHomeSmile2Fill } from "react-icons/ri";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import { RiSearchFill } from "react-icons/ri";
import { RiNotification4Fill } from "react-icons/ri";
import { useLocation, useNavigate} from "react-router-dom";
import { useEffect} from "react";

const ParentContainer=styled.div`
position:sticky;
bottom:0px;
display:flex;
justify-content:center;
margin-top:20px;
`;


const BottomNavigationParentContainer =styled.div`
z-index:1;
padding:20px;
justify-content:center;
align-items:center;
background:grey;
width:280px;
background:var(--global-bg-color);
backdrop-filter:blur(10px);
`;

const NavIconParentContainer=styled.div`
display:flex;
color:var(if(location.pathname==="/app"){
            setColor({homeColor:"ivory"})
        });
align-items:center;
gap:3.5em;
justify-content:center;
`;

const BottomNavComponent=()=>{
    const navigate=useNavigate();
    const location=useLocation();
    const [showNav,setNav]=useState(false);

    const [getColor,setColor]=useState({
        homeColor:"ivory",
        searchColor:"--global-navIcon-color",
        bookMarkColor:"--global-navIcon-color",
        notificationColor:"--global-navIcon-color"
    })

    useEffect(()=>{
        
        if(location.pathname=="/app"){
            setColor({homeColor:"ivory",
                notificationColor:"var(--global-navIcon-color)",
                searchColor:"var(--global-navIcon-color)",
                bookMarkColor:"var(--global-navIcon-color)",
                notificationColor:"var(--global-navIcon-color)"
            })
        }
        else
        if(location.pathname=="/search"){
            setColor({searchColor:"ivory",
                notificationColor:"var(--global-navIcon-color)",
                homeColor:"var(--global-navIcon-color);",
                 bookMarkColor:"var(--global-navIcon-color)",
                notificationColor:"var(--global-navIcon-color)"
            })
        }
        if(location.pathname=="/bookmark"){
            setNav(true)
            setColor({bookMarkColor:"ivory",
                notificationColor:"var(--global-navIcon-color)",
                searchColor:"var(--global-navIcon-color);",
                homeColor:"var(--global-navIcon-color)",
                notificationColor:"var(--global-navIcon-color)"
            })
        }
    },[])

    const handleHomeNav=()=>{
        navigate("/app")
    }

    const handleSearchNav=()=>{
        navigate("/app/search")
    }

    const handleBookMarkNav=()=>{
        navigate("/app/bookmark")
    }
        
    const handleNotificationNav=()=>{}


    return(
                <ParentContainer>
                <BottomNavigationParentContainer>
                    <NavIconParentContainer>
                    <RiHomeSmile2Fill onClick={handleHomeNav} style={{cursor:'pointer',color:getColor.homeColor}} size="25" />
                      <RiSearchFill style={{cursor:'pointer',color:getColor.searchColor}} size="25" />
                    <BsFillBookmarkDashFill  style={{cursor:'pointer',color:getColor.bookMarkColor}} size="23" />
                    <RiNotification4Fill style={{cursor:'pointer',color:getColor.notificationColor}} size="25" />
                    </NavIconParentContainer>
                </BottomNavigationParentContainer>
            </ParentContainer>        
            )
}

export default BottomNavComponent;