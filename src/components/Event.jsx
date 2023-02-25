import react from "react"
import "./Event.css"
const Event = (props) => {
    return(
        <div className="card-event">
            <img src={props.image} />
            <div className="card-event-footer">
                <h2 className="card-event-footer-name">{props.name}</h2>
                <p>location: {props.location}</p>
                <p>{props.day}</p>
                <p>{props.time}</p>
                <p>Entry Fee: ${props.entryfee}</p>
                <a href="https://www.evo.gg/rules" target={"_blank"}>RULES</a>
            </div>
        </div>
    )
}

export default Event;