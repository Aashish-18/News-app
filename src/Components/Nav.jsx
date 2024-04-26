import { Link } from "react-router-dom"

const Nav=({setCategory})=>{
    return(
        <nav  className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div  className="container-fluid">
        <a className="navbar-brand"  >
        <img src="src\assets\images.png" alt="Logo" height="40" />
    </a>
          <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse navbar-collapse" id="navbarNav">
            <ul  className="navbar-nav">
              <li  className="nav-item">
                <div  className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
              </li>
              <li  className="nav-item">
              <div  className="nav-link" onClick={()=>setCategory("business")} >Business</div>
              </li>
              <li  className="nav-item">
              <div  className="nav-link" onClick={()=>setCategory("sports")} >Sports</div>
              </li>
              <li  className="nav-item">
              <div  className="nav-link" onClick={()=>setCategory("entertainment")} >Entertainment</div>
              </li>
              <li  className="nav-item">
              <div  className="nav-link" onClick={()=>setCategory("health")} >Health</div>
              </li>
              <li  className="nav-item">
              <Link to='/game' className="nav-link">Feeling Bored?</Link>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    )
}
export default Nav