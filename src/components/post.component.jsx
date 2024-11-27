
import styled from "styled-components"
import React from "react"
import { useState } from "react"
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";


const Container=styled.div`
color:var(--global-text-color);
padding:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:20px;
`;

const PostProfilePics = styled.div`
padding:12px;
background:var(--global-bg-shade-color);
width:10px;
height:10px;
border-radius:100px;
`;
const PostSubContainer =styled.div`
display:flex;
gap:3px;
padding:10px;
border-style:solid;
border-top-color:transparent;
border-left-color:transparent;
border-bottom-color:#474747;
border-right-color:transparent;
border-width:1px;
width:340px;
justify-content:center;
margin-left:50px;
`;
const PostProfileTxtContainer = styled.div`
display:flex;
flex-direction:column;
line-height:8px;
`;
const PostProfileName=styled.b`font-size:13px`;
const PostProfileTimeStamp=styled.p`font-size:11px;`;
const PostContentContainer=styled.p`
font-size:11px;
margin-top:-0.1px;
width:295px;
text-align:left;
`;
const PostReactionContainer = styled.div`
display:flex;
gap:15px;
margin-top:9px;
`;

const PostMedia=styled.div`
background:var(--global-bg-shade-color);
padding:20px;
height:185px;
width:200px;
margin-top:-5px;
border-radius:10px;
`;

const MainContainer =styled.div`
display:flex;
flex-direction:column;
gap:5px;
padding:5px;
`;

const PostComponent=()=>{
    // define dummy data variable 
    const dummyData=[
        {
         id:'1',
         profilePics:"https://ktnnjntvntvtv",
         username:"Joe",
         timestamp:"2sec ago",
         content:"Lorem ipsum oor thjzgvyxtjgbxtgxbtugrdn",
         media:"https://nvtovtnvjtnvtvntvn"   
        },
        {
            id:'2',
            profilePics:"https://ktnnjntvntvtv",
            username:"John",
            timestamp:"3sec ago",
            content:"Lorem ipsum oor thjzgvyxtjgbxtgxbtugrdn",
            media:''
           },
           {
            id:'3',
            profilePics:"https://ktnnjntvntvtv",
            username:"Mary",
            timestamp:"3min ago",
            content:"Lorem ipsum oor thjzgvyxtjgbxtgxbtugrdn",
            media:"https://nvtovtnvjtnvtvntvn"   
           },
           {
            id:'4',
            profilePics:"https://ktnnjntvntvtv",
            username:"Sarah",
            timestamp:"4min ago",
            content:"Lorem ipsum oor thjzgvyxtjgbxtgxbtugrdn",
            media:''
        },
           {
            id:'5',
            profilePics:"https://ktnnjntvntvtv",
            username:"Bridget",
            timestamp:"6min ago",
            content:"Lorem ipsum oor thjzgvyxtjgbxtgxbtugrdn",
            media:''
           },
           {
            id:'6',
            profilePics:"https://ktnnjntvntvtv",
            username:"Angela",
            timestamp:"10min ago",
            content:"Lorem ipsum oor thjzgvyxtjgbxtgxbtugrdn",
            media:"https://nvtovtnvjtnvtvntvn"   
           }
    ]

    const [getHeartToggleState,setHeartToggleState]=useState(false);

    const handleReactionAction=(ev)=>{
        if(getHeartToggleState===false){
            setHeartToggleState(true);
        }
        else
        if(getHeartToggleState===true){
            setHeartToggleState(false);
        }
    }

    return(
        <>
        <Container> 
            {
                dummyData.map((data)=>(
                    <PostSubContainer  key={data.id}  >
                    <PostProfilePics></PostProfilePics>
                            <MainContainer>
                                <PostProfileTxtContainer>
                                <PostProfileName>{data.username}</PostProfileName>
                                <PostProfileTimeStamp>{data.timestamp}</PostProfileTimeStamp>
                            </PostProfileTxtContainer>
                        
                            <PostContentContainer>
                                {data.content}
                              </PostContentContainer>
                              {
                                data.media.length===0?(
                                 <></>   
                                )
                                :(
                            <PostMedia>
                            </PostMedia>
                                )
                              }
                                 
                            <PostReactionContainer>
                                {
                                    getHeartToggleState===false?(
                                        <IoIosHeartEmpty  style={{cursor:"pointer"}} onClick={()=>{handleReactionAction()}} size={20}/>
                                    ):(
                                        <IoIosHeart style={{cursor:"pointer"}} onClick={()=>{handleReactionAction()}} size={20} />
                                    )
                                }
                                 <TbMessage2 size={20}/>
                                <IoBookmarkOutline size={20}/>
                            </PostReactionContainer>
                            </MainContainer>
                            </PostSubContainer>
                ))              
            }
                        
        </Container>
        </>
    )
}

export default PostComponent;