import { useState } from 'react'
import Event from "./components/Event.jsx"
import SF5img from "./assets/SF5_CE_image.png" 
import SSBUimg from "./assets/SSBU-img-resize.jpg"
import SSBMimg from "./assets/ssbm-img.png"
import USF4img from "./assets/USF4.png"
import GGSimg from "./assets/GGS.jpg"
import DBFZimg from "./assets/DBFZ.jpg"
import UMVC3img from "./assets/UMVC3.png"
import Tekken7img from "./assets/Tekken7.png"
import MK11img from "./assets/MK11.png"
import BHimg from "./assets/brawlhalla-resize.jpg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Competitive Game Community<br/>Tournaments</h1>
      <div className='events-container'>
        <Event name={"Street Fighter 5"} image={SF5img} location={"online"} day={"Feb. 21 2023"} time={"1:00pm - 12:00am"} entryfee={"10"}/>
        <Event name={"SSB Ultimate"} image={SSBUimg} location={"locals"} day={"Aug. 2 2023"} time={"12:00pm - 11:00pm"} entryfee={"20"}/>
        <Event name={"SSB Melee"} image={SSBMimg} location={"online"} day={"June 15 2023"} time={"1:00pm - 12:00am"} entryfee={"10"}/>
        <Event name={"USF4"} image={USF4img} location={"online"} day={"Mar. 11 2023"} time={"1:00pm - 12:00am"} entryfee={"10"}/>
        <Event name={"GG Strive"} image={GGSimg} location={"online"} day={"Oct. 7 2023"} time={"12:00pm - 11:00pm"} entryfee={"30"}/>
        <Event name={"DBFZ"} image={DBFZimg} location={"locals"} day={"May 23 2023"} time={"12:00pm - 11:00pm"} entryfee={"20"}/>
        <Event name={"UMVC3"} image={UMVC3img} location={"locals"} day={"Feb. 2 2023"} time={"1:00pm - 12:00am"} entryfee={"30"}/>
        <Event name={"Tekken 7"} image={Tekken7img} location={"online"} day={"July 12 2023"} time={"12:00pm - 11:00pm"} entryfee={"50"}/>
        <Event name={"MK 11"} image={MK11img} location={"locals"} day={"Sept. 5 2023"} time={"1:00pm - 12:00am"} entryfee={"10"}/>
        <Event name={"Brawlhalla"} image={BHimg} location={"online"} day={"Dec 13 2023"} time={"12:00pm - 11:00pm"} entryfee={"15"}/>
      </div>
    </div>
  )
}

export default App
