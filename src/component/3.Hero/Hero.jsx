import './Hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className='links d-none d-lg-block' style={{position:'absolute', left:'2%', top:'40%'}}>
      <Link to="/https://www.linkedin.com/in/angie-mohammad-32597824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='linkedin'><i className="fs-4 bi bi-linkedin"></i></Link>
      <Link to="/https://github.com/engymo" className='github'><i className="fs-4 bi bi-github"></i></Link>
      <Link to="/https://www.facebook.com/Engymohammad2312?mibextid=LQQJ4d" className='facebook'><i className="fs-4  bi bi-facebook"></i></Link>
      <Link to='/https://wa.me/201098259164?text=السلام%20عليكم' className='whatsapp'><i className="fs-4 bi bi-whatsapp"></i></Link>
      <Link to="/https://mail.google.com/mail/u/0/#inbox" className='gmail'><i className="fs-4 bi bi-envelope-at-fill"></i></Link>
    </div>
  )
}
