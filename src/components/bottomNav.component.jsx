
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
padding:20px;
justify-content:center;
align-items:center;
background:grey;
width:350px;
background:var(--global-blur-color);
backdrop-filter:blur(10px);
`;

const NavIconParentContainer=styled.div`
display:flex;
color:grey;
align-items:center;
justify-content:space-between;
`;

const BottomNavComponent=()=>{
    return(
        <ParentContainer>
            <BottomNavigationParentContainer>
                <NavIconParentContainer>
                <RiHomeSmile2Fill style={{cursor:'pointer'}} size="25" />
                <RiSearchFill style={{cursor:'pointer'}} size="25" />
                <BsFillBookmarkDashFill  style={{cursor:'pointer'}} size="23" />
                <RiNotification4Fill style={{cursor:'pointer'}} size="25" />
                </NavIconParentContainer>
            </BottomNavigationParentContainer>
        </ParentContainer>
    )
}

export default BottomNavComponent;