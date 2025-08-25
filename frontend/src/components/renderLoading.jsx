import { useState } from "react";


export default function RenderLoading({loading}){


    if(loading===true){
        return <><h2 style={{height:100,width:100}}>Loading...</h2></>
    }

}