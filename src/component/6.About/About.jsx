import codeImg from '../../assets/Code.jpeg';
import responImg from '../../assets/3resposive.jpeg';
import cleanImg from '../../assets/2cleancode.jpeg';

export default function WhatDo() {
    const CardWork = [
        {
            id: 1,
            image: responImg,
            title: 'Responsive',
            description: 'I build websites that adapt seamlessly to different screen sizes, ensuring optimal performance everywhere.',
        },
        {
            id: 2,
            image: codeImg,
            title: 'From Design to Code',
            description: 'I take your visual designs and turn them into functional, responsive websites. Every element is coded to ensure a flawless user experience across all devices.',
        },
       
        {
            id: 3,
            image: cleanImg,
            title: 'Clean Code',
            description: 'I write efficient, maintainable code that ensures smooth updates and scalability over time.',
        }
    ];

    return (
        <>
            <h2 className="text-center mb-5" style={{ color: '#603F26', marginTop: '10%' }}>What I Do</h2>
            <div style={{ background: '#FAF7F0' }} >
                <div className="container">
                    {CardWork.map((work, index) => (
                        <div
                            className="card mb-5 shadow"
                            style={{
                                maxWidth: "600px",
                                marginLeft: index % 2 === 0 ? "auto" : "0",
                                marginRight: index % 2 !== 0 ? "auto" : "0",
                            }}
                            key={work.id}
                        >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={work.image} className="img-fluid rounded-start" alt={work.title} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{work.title}</h5>
                                        <p className="card-text">{work.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
