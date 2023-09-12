import { Link } from "react-router-dom"
import { LogoutLink } from './LogoutLink';


export function Header() {
  let authenticationLinks;

  if (localStorage.jwt === undefined) {
authenticationLinks = (
  <>
  <li className="nav-item">
  <Link to="/signup" className="nav-link" >Signup</Link>

</li>
<li className="nav-item">
  <Link to="/login" className="nav-link" >Login</Link>

</li>
</>
)
  } else {
    authenticationLinks = (
      <>
        <li className="nav-item">
          <LogoutLink />

        </li>
      </>
    )
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
              {authenticationLinks}
      <li className="nav-item">
          <Link to="/products" className="nav-link" >All Products</Link>

        </li>
        <li className="nav-item">
          <Link to="/products/new" className="nav-link" >New Product</Link>

        </li>
           <li className="nav-item">
          <Link to="/carted_products" className="nav-link" >Cart</Link>

        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">New Post</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
      </nav>
    </header>
  )
}
