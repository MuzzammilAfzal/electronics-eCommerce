import { useState } from "react";


export default function RenderLoading({loading}){


    if(loading===true){
        return <><h2 style={{height:100,width:"auto"}}>Loading...Free Servers takes time 😂</h2></>
    }

}