export function Navbar(){
  return (
    <nav className="
      bg-white
      shadow-sm
      mb-3
      navbar
      navbar-expand
      navbar-light
      sticky-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/store">Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/about">About</a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-lg btn-outline-primary rounded-circle position-relative">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
          <div className="
            rounded-circle
            bg-danger 
            text-white
            fs-6
            d-flex 
            justify-content-center 
            align-item-center
            position-absolute
            bottom-0
            end-0" 
            style={{
              width:"1.5rem",
              transform: "translate(25%,25%)"
            }}>
            10
          </div>

        </button>
      </div>
    </nav>
  )
}
