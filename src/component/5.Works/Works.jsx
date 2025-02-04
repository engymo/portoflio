import './Works.css';
import { Link } from 'react-router-dom';
import max from '../../assets/max.png';
import todo from '../../assets/todolist.png';
import youtubecolne from '../../assets/youtubecolne.png';
import whatches from '../../assets/whatches.png';
import furnture from '../../assets/furnture.png';
import clothesweb from '../../assets/clothesweb.png';


export default function Works() {

  const CardWork = [
    {
      id: 1,
      title: "E-commerce Web Site",
      description: "useing HTML CSS Bootstrap JavaScript",
      image: whatches,
    },
    {
      id: 2,
      title: "E-commerce Web Site",
      description: " useing HTML CSS Bootstrap JavaScript",
      image: clothesweb,
    },
    {
      id: 3,
      title: "restaurant web site",
      description: "useing HTML CSS Bootstrap JavaScript",
      image: max,
    },
    {
      id: 4,
      title: "youtube colne",
      description: "useing HTML CSS Bootstrap JavaScript",
      image: youtubecolne,
    },
    {
      id: 5,
      title: "Todolist",
      description: "useing HTML CSS Bootstrap JavaScript",
      image: todo,

    },
    {
      id: 6,
      title: "Furniture",
      description: " useing HTML CSS Bootstrap JavaScript",
      image: furnture,
    },



  ]
  return (
    <>
      <h2 className='fw-bold text-center mb-5' style={{ color: '#603F26', marginTop: '10%' }} >works</h2>

        <div className='container'>
          <div className='row'>
            {CardWork.map((Work) => (
              <div className='col-md-12 col-lg-4 mb-4' key={CardWork.id}>
                <div className="card card-work rounded p-4" style={{ background: '#B6A28E' }}>
                  <img src={Work.image} className=" rounded" alt="" />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{Work.title}</h5>
                    <span className="card-text d-block">{Work.description}</span>
                    <Link to='/https://github.com/engymo' className="btn btn-secondary mt-4"><i className="bi bi-github"></i> REPO</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    </>
  )
}
