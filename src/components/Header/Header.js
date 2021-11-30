import "./Header.css";
const Header=()=>{
    return (
      <div className='Header'>
        <img
          src='https://ii1.pepperfry.com/images/svg/pf-logo-jan18.svg?v=1'
          alt='logo'
          className="paperFry-logo"
        ></img>
        <form action='#' className="search-form">
          <input type='text' placeholder='Search' className="search-box"></input>
          {/* <input type="button"></input> */}
        </form>
        <ul className='navbar-list'>
          <li className='list-item'>
            <div>icon1</div>
            <p>Track</p>
          </li>
          <li className='list-item'>
            <div>icon1</div>
            <p>Track</p>
          </li>
          <li className='list-item'>
            <div>icon1</div>
            <p>Track</p>
          </li>
          <li className='list-item'>
            <div>icon1</div>
            <p>Track</p>
          </li>
        </ul>
      </div>
    )
}

export default Header;