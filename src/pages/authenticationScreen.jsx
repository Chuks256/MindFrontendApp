
import styled from "styled-components"
import React from "react"
import { useState } from "react"
import { IoArrowBack } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";
import { TbSettings2 } from "react-icons/tb";
import { RiSearchFill } from "react-icons/ri";
import { RiNotificationFill } from "react-icons/ri";
import { TbPhotoBolt } from "react-icons/tb";
import { FaDeleteLeft } from "react-icons/fa6";

const Container=styled.div`
display:flex;
align-items:center;
flex-direction:column;
gap:10px;
color:var(--global-text-color);
padding:20px;
`;
const AuthHeaderContainer = styled.div`
display:flex;
align-items:center;
gap:100px;
`;
const AuthHeaderTxt=styled.b`
font-size:14px;
`;

const PassCodeParentContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:30px;
padding-top:20px;
justify-content:center;
`;


const PassCodeSubContainer = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
column-gap:10px;
row-gap:20px;
width:350px;
align-items:center;
justify-items:center;
line-spacing:10px;
`;


const PassCodeView=styled.input`
padding:15px;
width:260px;
color:var(--global-text-color);
background:var(--global-bg-color);
outline:none;
border-style:solid;
border-color:transparent;
text-align:center;
font-size:25px;
`;

const PassCodeBtn=styled.button`
border-radius:100px;
width:70px;
font-size:20px;
font-weight:bold;
height:70px;
display:flex;
justify-content:center;
align-items:center;
background:var(--global-bg-shade-color);
color:var(--global-text-color);
cursor:pointer;
`;
const BtnContainer=styled.div`
`;

const PasscodeWrapperContainer =styled.div`
display:flex;
align-items:center;
flex-direction:column;
gap:50px;
`;

const ProceedBtn=styled.button`
font-size:13px;
padding:10px;
width:300px;
border-radius:5px;
background:var(--global-text-color);
color:var(--global-bg-color);
font-weight:bold;
cursor:pointer;`;

const Emptydiv=styled.div``;

const DeleteBtn=styled.button`
border-radius:100px;
width:70px;
font-size:20px;
font-weight:bold;
height:70px;
display:flex;
justify-content:center;
align-items:center;
background:var(--global-bg-shade-color);
color:var(--global-text-color);
cursor:pointer;
`;

const AuthenticationScreen=()=>{
    const [getInputValue,setInputValue]=useState("");

   const passCodeBtnData=[
        {
            id:'one',
            value:1
        },
        {
            id:'two',
            value:2
        },
        {
            id:'three',
            value:3
        },
        {
            id:'four',
            value:4
        },
        {
            id:'five',
            value:5
        },
        {
            id:'six',
            value:6
        },
        {
            id:'seven',
            value:7
        },
        {
            id:'eight',
            value:8
        },
        {
            id:'nine',
            value:9
        },
        {
            id:'star',
            value:"*"
        },
        {
            id:'zero',
            value:0
        }
    ]

    const handlePassCodeButtonAction=(data)=>{
        const value=getInputValue+data
        if(value.length<5){
            setInputValue(value)
        }
    }

    const handleDelete=()=>{
        setInputValue("");
    }

    // function for handling procee button
    const handleProceedBtn=()=>{

    }


    return(
        <Container>
            <AuthHeaderContainer>
                <IoArrowBack size={20} />
                <AuthHeaderTxt>Enter Password</AuthHeaderTxt>
                <Emptydiv></Emptydiv>
            </AuthHeaderContainer>
            {/* passcode container section */}
            <PasscodeWrapperContainer>
            <PassCodeParentContainer>
                <PassCodeView value={getInputValue} maxLength="4" type="password" readOnly  placeholder="----" />
                <PassCodeSubContainer>
                {
                 passCodeBtnData.map((data)=>(
                <PassCodeBtn key={data.id} onClick={()=>{handlePassCodeButtonAction(data.value)}} >{data.value}</PassCodeBtn>
                 ))   
                }
                <DeleteBtn onClick={()=>{handleDelete()}}><FaDeleteLeft/></DeleteBtn>
                </PassCodeSubContainer>
        
               </PassCodeParentContainer>
            <ProceedBtn onClick={()=>{handleProceedBtn()}}>Proceed</ProceedBtn> 
            </PasscodeWrapperContainer>
          
        </Container>
    )
}

export default AuthenticationScreen;