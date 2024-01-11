import logo from './assets/logo.png';

function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
        <div className="navbar-brand">
            <a className="navbar-brand" href="/"></a>
            <div className="d-flex">
                <img src={logo} alt="logo" className='mr-2'/> 
                <div>ProjectMgmt</div>
            </div>
        </div>
    </nav>
  )
}

export default Header