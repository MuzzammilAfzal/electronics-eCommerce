import { useState } from "react";
import gif from "../assets/loading.gif"

export default function RenderLoading({loading}){


    if(loading===true){
        return <div className="flex justify-center items-center z-50">
             <span className="text-2xl ">Loading</span>
              <img src={gif} alt="" className="h-[10vh]"/>
            </div>
    }

}