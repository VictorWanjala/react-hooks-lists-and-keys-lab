import './Navbar.css'
function Navbar(){
    return(
        <div>
            <nav>
                <ul className="navlist">
                    <li><a style={{color:"red"}} href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar