
import styled from "styled-components"
import React from "react"
import { useState } from "react"
import { RiHomeSmile2Fill } from "react-icons/ri";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import { RiSearchFill } from "react-icons/ri";
import { RiNotification4Fill } from "react-icons/ri";



const ParentContainer=styled.div`
position:sticky;
bottom:0px;
display:flex;
justify-content:center;
margin-top:20px;
`;


const BottomNavigationParentContainer =styled.div`
z-index:1;
padding:35px;
justify-content:center;
align-items:center;
background:grey;
width:350px;
background:var(--global-bg-color);
backdrop-filter:blur(20px);
`;



const BottomNavComponent=()=>{
    return(
        <ParentContainer>
            <BottomNavigationParentContainer>

            </BottomNavigationParentContainer>
        </ParentContainer>
    )
}

export default BottomNavComponent;