import './Projects.css'
import Calculator from './../assets/Calculator.png'

export default function Projects() {
    return (
        <>
            <div id='projects-container' className='container-fluid py-5 m-0'>
                <div id='card' className="card project-card">
                    <img src={Calculator} className="card-img-top" alt="Picture Of Calculator Project" />
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}