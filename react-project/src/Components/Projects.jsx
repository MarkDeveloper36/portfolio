import './Projects.css'
import ProjectCard from './ProjectCard'
import Calculator from './../assets/Calculator.png'

export default function Projects() {
    return (
        <>
            <div id='projects-container' className='container-fluid py-5 m-0 d-flex'>
                <ProjectCard img={Calculator} title={'Calculator'} link={'/calculator'}/>
                <ProjectCard title={'Tic Tac Toe'} link={'/tic-tac-toe'} />
            </div>
        </>
    )
}