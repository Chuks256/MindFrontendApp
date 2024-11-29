
import styled from "styled-components"
import React, { useEffect } from "react"
import { useState } from "react"
import { TbSettings2 } from "react-icons/tb";
import mindOrb from "../assets/mindOrb.png"
import PostComponent from "../components/post.component";
import { Link } from "react-router-dom";
import BottomNavComponent from "../components/bottomNav.component";

const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`;
const AppBarContainer =styled.div`
color:var(--global-text-color);
display:flex;
background:var(--global-bg-color);
align-items:center;
justify-content:center;
position:sticky;
margin-right:50px;
top:0px;
`;

const AppbarContent=styled.div`
display:flex;
align-items:center;
gap:140px;
`;

const AppBarProfileContainer=styled.div`
display:flex;
align-items:center;
`;
const AppBarTxtContainer = styled.div`
line-height:10px;
`;
const Greeting=styled.p`
font-size:11px;
`;
const ProfileName =styled.b`
font-size:11px;
`;
const OrbImg=styled.img`
width:70px;
height:70px;
`;

const PostButton=styled.button `
background:ivory;
position:fixed;
top:500px;
display:flex;
align-items:center;
justify-content:center;
left:250px;
font-weight:bold;
width:90px;
height:45px;
border-radius:10px;
z-index:1;
cursor:pointer;
font-size:13px;
`;

const MainScreen=()=>{
    
    return(
        <Container>
            <AppBarContainer>
                <AppbarContent>
                <AppBarProfileContainer>
                <OrbImg src={mindOrb}  />
                <AppBarTxtContainer>
                    <Greeting>Hey,</Greeting>
                    <ProfileName>JudeTheBoy</ProfileName>
                </AppBarTxtContainer>
                </AppBarProfileContainer>
                <TbSettings2 style={{cursor:"pointer"}} size={25} />
                </AppbarContent>
                </AppBarContainer>
                {/* post componet section */}
                     <PostComponent />

                     {/* post button */}
                     <PostButton>
                        Post
                     </PostButton>

                {/* bottom nav section */}
                <BottomNavComponent />
              
        </Container>
    )
}

export default MainScreen;