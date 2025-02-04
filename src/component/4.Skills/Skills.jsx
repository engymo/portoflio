import HTMLImage from '../../assets/HTML.jpeg';
import CSSImage from '../../assets/CSS3.jpeg';
import JSImage from '../../assets/js.jpeg';
import ReactImage from '../../assets/react.jpeg';
import BootstrapImage from '../../assets/Bootstrap.jpeg';
import GitHubImage from '../../assets/GitHub.jpeg';
import VisualStudioImage from '../../assets/VisualStudio.jpeg';
import './Skills.css';

export default function Skills() {
    const Cards = [
        {
            id: 1,
            title: 'HTML',
            image: HTMLImage,
        },
        {
            id: 2,
            title: 'CSS',
            image: CSSImage,
        },
        {
            id: 3,
            title: 'JavaScript',
            image: JSImage,
        },
        {
            id: 4,
            title: 'Visual Studio',
            image: VisualStudioImage,
        },

        {
            id: 5,
            title: 'Bootstrap',
            image: BootstrapImage,
        },
        {
            id: 6,
            title: 'GitHub',
            image: GitHubImage,
        },
        {
            id: 7,
            title: 'React',
            image: ReactImage,
        }

    ];
    return (
        <>
            <h2 className='text-center fw-bold mb-5' id='#Skills' style={{ color: '#603F26', marginTop: '10%' }}>My Skills</h2>
            <div style={{ background: '#FAF7F0' }}>
                <div className='container'>
                    <div className='row gap-3 align-items-center justify-content-center'>
                        {Cards.map((card) => (
                            <div className='col-md-12 col-lg-2 text-center p-0' key={card.id}>
                                <img
                                    className='border border-5 shadow rounded-circle my-4 skill'
                                    src={card.image}
                                    alt={card.title}
                                    style={{ width: '40%', display: 'block', margin: '0 auto' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
