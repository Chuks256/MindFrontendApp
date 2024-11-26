
import styled from "styled-components"
import React from "react"
import { useNavigate} from "react-router-dom"
import mindOrb from "../assets/mindOrb.png"

const Container=styled.div`
color:var(--global-text-color);
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:50px;
gap:230px;
`;

const SplashLogoContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const SplashTxt=styled.b``;

const BtnContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:5px;
`;

const BtnTxt=styled.p`
font-size:13px;
width:230px;
text-align:center;
`;

const OnboardBtn=styled.button`
font-size:13px;
padding:12px;
width:300px;
border-radius:5px;
background:var(--global-text-color);
color:var(--global-bg-color);
font-weight:bold;
cursor:pointer;
`;



// splash screen page 
const OnboardScreen=()=>{
    const navigate=useNavigate();
    const handleOnboardBtn=(ev)=>{
        ev.stopPropagation();
        navigate("/app")
    }

    return(
        <Container>
            <SplashLogoContainer>
                <img src={mindOrb} />
                <SplashTxt>Mind.</SplashTxt>
            </SplashLogoContainer>
            <BtnContainer>
                <BtnTxt>Say your mind, emotions and secrets anonymously</BtnTxt>
                <OnboardBtn onClick={()=>{handleOnboardBtn()}}>Say Your Mind.</OnboardBtn>
            </BtnContainer>
        </Container>
    )
}

export default OnboardScreen;