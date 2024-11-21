import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <header className={`navbar navbar-expand-lg fixed-top border-bottom mb-5 ${styles.navbar}`} data-bs-theme='dark'>

      <nav className='container-fluid d-flex align-items-center justify-content-around' id='navbar'>

        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
          <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}></span>
        </button>

        <ul className='collapse navbar-collapse navbar-nav col-lg-4 order-2 order-lg-0 justify-content-center gap-4 gap-lg-1 my-3 my-lg-0' id='navbarToggler'>

          <Link to='/category/celulares' className={` nav-item nav-link ${styles.navLink}`}>Celulares</Link>
          <Link to='/category/computadoras' className={` nav-item nav-link ${styles.navLink}`}>Computadoras</Link>
          <Link to="/category/tablets" className={` nav-item nav-link ${styles.navLink}`}>Tablets</Link>

        </ul>

        <div className='col-lg-4 text-center'>
          <Link to='/' className={`fs-1 navbar-brand d-inline-flex text-decoration-none py-0 mx-0 ${styles.navbarBrand}`}>TECNOW</Link>
        </div>

        <div className='col-lg-4 text-center d-flex justify-content-center'>
          <CartWidget />
        </div>

      </nav>

    </header>
  )
}

export default Navbar