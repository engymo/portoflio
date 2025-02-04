import './NavBar.css';
import imgmnu from '../../assets/img1.png';
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <div >
            <nav className="navbar fixed-top" style={{ background: "#D0B8A8" }}>
                <div className="container-fluid container">
                        <Link to="/ " className="navbar-brand fw-bold navname" style={{ color:'#3C2A21' }}>ENG/Angie <i className="fw-bold bi bi-laptop"></i></Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-light"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header " style={{ background: "#D0B8A8" }}>
                            <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-flex justify-content-center" style={{ position: 'relative', background: "#D0B8A8" }}>
                            <ul className="navbar-nav text-center ">
                                <li className="nav-item " style={{ backgroundColor: "white", borderRadius: "20px", width: "300px", marginBottom: "20px", }}>
                                    <Link to="/" className="nav-link fw-bold">Home</Link >
                                </li>
                                <li className="nav-item " style={{ backgroundColor: "white", borderRadius: "20px", width: "300px", marginBottom: "20px" }}>
                                    <Link to="/" className="nav-link fw-bold">Links</Link>
                                </li>
                                <li className="nav-item " style={{ backgroundColor: "white", borderRadius: "20px", width: "300px", marginBottom: "20px" }}>
                                    <Link to="/Works" className="nav-link fw-bold">Works</Link>
                                </li>
                                <li className="nav-item " style={{ backgroundColor: "white", borderRadius: "20px", width: "300px", marginBottom: "20px" }}>
                                    <Link to="/Skills" className="nav-link fw-bold">Skills</Link>
                                </li>
                                <li className="nav-item " style={{ backgroundColor: "white", borderRadius: "20px", width: "300px", marginBottom: "20px" }}>
                                    <Link to="/Contact" className="nav-link fw-bold">Contact Us</Link>
                                </li>
                            </ul>
                            <img src={imgmnu} alt='imgmnu' style={{ width: '60%', height: '50%', position: 'absolute', bottom: '0', left: '20%' }} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
