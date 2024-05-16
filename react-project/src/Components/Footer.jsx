import './Footer.css'

export default function Footer() {
    return (
        <footer className='container-fluid d-flex flex-column'>
            <div className='container-fluid'>
                <h2>WANT TO GET IN TOUCH?</h2>
                <h3>M.Kranenburg@qquest.nl</h3>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-5'>
                        <p>Mark Kranenburg</p>
                        <p>Schiedam, Nederland</p>
                        <p>&copy;</p>
                    </div>
                    <div className='col-5'>
                        <p>Github</p>
                        <p>LinkedIn</p>
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        </footer>
    )
}