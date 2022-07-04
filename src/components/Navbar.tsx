export function Navbar(){
  return (
    <nav className="bg-white shadow-sm mb-3 navbar navbar-expand navbar-light sticky-top">
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
      </div>
    </nav>
  )
}
