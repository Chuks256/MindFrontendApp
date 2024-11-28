
import styled from "styled-components"
import React from "react"
import { useNavigate} from "react-router-dom"
import mindOrb from "../assets/mindOrb.png"
import {useEffect} from "react"

const Container=styled.div`
color:var(--global-text-color);
display:flex;
align-items:center;
justify-content:center;
margin-top:200px;
`;

// splash screen page 
const SplashScreen=()=>{
    const navigate=useNavigate()
        setTimeout(()=>{
            navigate("/onboard");
       },6000)
       clearTimeout();
       
    return(
        <Container>
            <img src={mindOrb}  />
        </Container>
    )
}

export default SplashScreen;