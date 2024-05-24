import { Link } from 'react-router-dom'

export default function ProjectCard({ img, title, link }) {
    return (
        <div className="card project-card mx-5">
            <img src={img} className="card-img-top" alt="Picture Of Project" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={link} className="btn btn-primary">{title}</Link>
            </div>
        </div>
    )
}