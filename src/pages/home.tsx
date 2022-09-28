import { Header } from "../components/Header";
import { Main } from "../components/Main";
import "../App.css";
import { Footer } from "../components/Footer";

export function Home (){
    return (
       <div className="home">
         <Header/>
         <Main/>
         <Footer/>
       </div>
    )
}