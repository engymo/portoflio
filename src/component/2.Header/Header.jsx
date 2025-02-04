
import './Header.css';
import { Link } from 'react-scroll';
import headerimg from '../../assets/ayxs4t5wn.png';
import line from '../../assets/line.png';

export default function Header() {

  return (
    <div className='container header-content '>
      <div className='row align-items-center justify-content-center'>
        <div className='col-lg-6 col-sm-12 order-2 order-lg-1'>

          <img className='d-none d-lg-block' src={line} style={{ width: '22%', position: 'absolute', left: '6.5%', top: '19.5%' }} />

          <h4 className="headline fs-5 fw-bold my-5" style={{ color: '#C5705D', position: 'relative' }}>Welcome to my website</h4>

          <h1 className='fw-bold' style={{ color: '#603F26' }}> Iam a Front end web developer </h1>

          <p className='subtitle fs-6'>Building elegant, fast, and accessible websites,
            turning design concepts into beautiful, functional web experiences.
          </p>

          <div className='mt-2 d-flex gap-5'>

            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="fw-bold btn btn-outline-secondary"
            >
              Skills
            </Link>

            <Link
              to="works"
              smooth={true}
              duration={500}
              className="fw-bold btn btn-outline-secondary"
            >
              Works
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="fw-bold btn btn-outline-secondary"
            >
              Contact
            </Link>

          </div>

          <div className='links d-flex d-lg-none mt-3' >
            <a href='#https://www.linkedin.com/in/angie-mohammad-32597824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ' className='linkedin pe-2 '><i className="fs-4 bi bi-linkedin"></i></a>
            <a href='#https://github.com/engymo' className='github pe-2' ><i className="fs-4 bi bi-github"></i></a>
            <a href='#https://www.facebook.com/Engymohammad2312?mibextid=LQQJ4d' className='facebook pe-2'><i className="fs-4  bi bi-facebook"></i></a>
            <a href='#https://wa.me/201098259164?text=السلام%20عليكم' className='whatsapp pe-2'><i className="fs-4 bi bi-whatsapp"></i></a>
            <a href="#https://mail.google.com/mail/u/0/#inbox" className='gmail'><i className="fs-4 bi bi-envelope-at-fill"></i></a>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12 order-1 order-lg-2'>
          <img className='headerimg' src={headerimg} alt='header image' style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  )
}








