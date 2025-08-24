import { useLocation } from "react-router-dom";
import NavBar from "../components/navBar";


export default function Buy(){


    const location=useLocation()
    const query=location.search
    const id=query.replace("?","")

    return<>
     <NavBar/>
     <h1>{id}</h1>
    </>
}