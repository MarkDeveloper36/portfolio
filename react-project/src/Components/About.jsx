import './About.css'

export default function About() {
    return (
        <section id='aboutSection' className='text-start container-fluid py-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col'>
                    <p id='greeting'>Hi, my name is...</p>
                    <h1 className='h1'>Mark</h1>
                    <h2 className='h2 text-primary text-white text-opacity-75'>Hier komt een quote</h2>
                    <p className='text-primary text-white text-opacity-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magnam itaque sint fugit neque sequi eaque dolores blanditiis! Animi ullam odit ex, aliquam dolorum veritatis perspiciatis repellat error sit officiis.</p>
                    <button id='projects-btn'>See Projects</button>
                </div>
                <div className='col-1'></div>
            </div>
        </section>
    )
}