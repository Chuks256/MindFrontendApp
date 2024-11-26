
import styled from "styled-components"
import React from "react"
import { useState } from "react"
import { TbSettings2 } from "react-icons/tb";
import mindOrb from "../assets/mindOrb.png"
import PostComponent from "../components/post.component";

const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`;
const AppBarContainer =styled.div`
color:var(--global-text-color);
display:flex;
background:var(--global-bg-color);
width:100%;
justify-content:center;
position:sticky;
`;

const AppbarContent=styled.div`
display:flex;
align-items:center;
gap:150px;
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

                {/* bottom nav section */}
        </Container>
    )
}

export default MainScreen;