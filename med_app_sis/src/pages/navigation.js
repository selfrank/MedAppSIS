function Navigation(){
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login/">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/food/">Food</a>
            </li>   
            <li className="nav-item">
              <a className="nav-link" href="/Sleep/">Sleep</a>
            </li>   
            <li className="nav-item">
              <a className="nav-link" href="/Stress/">Stress</a>
            </li>   
            <li className="nav-item">
              <a className="nav-link" href="/Symptoms/">Symptoms</a>
            </li>   
            <li className="nav-item">
              <a className="nav-link" href="/alldata/">AllData</a>
            </li>     
 
              <li className="nav-item">
              <a className="nav-link" href="/dashboard/">Dashboard</a>
              </li>  
          </ul>
        </div>
      </nav>
)}

export default Navigation