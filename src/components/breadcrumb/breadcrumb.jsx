import { useLocation } from "react-router-dom"
import './breadcrumb.css'


export default function Breadcrumb() {

  const location = useLocation().pathname.split("/").pop();

  return (
    <div className="breadcrumb container">
        <a href="/"><i className="fa-solid fa-house"></i>Homepage</a>
        <i className="fa-solid fa-angles-right"></i>
        <p>{location}</p>
    </div>
  )
}
