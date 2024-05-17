import './Footer.css'

export default function Footer() {
    return (
        <footer className='container-fluid p-4 g-5'>
            <div className='container-fluid mb-5 d-flex flex-column align-items-center'>
                <h2>WANT TO GET IN TOUCH?</h2>
                <h3 className='underline-hover'>M.Kranenburg@qquest.nl</h3>
            </div>
            <div className='container-fluid pb-2'>
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-5 d-flex flex-column align-items-center'>
                        <p className='underline-hover footer-link'>Mark Kranenburg</p>
                        <p className='underline-hover footer-link'>Schiedam, Nederland</p>
                        <p>&copy;</p>
                    </div>
                    <div className='col-5 d-flex flex-column align-items-center'>
                        <p className='underline-hover footer-link'><a href='https://github.com/MarkDeveloper36' target="_blank" className='footer-link'>Github</a></p>
                        <p className='underline-hover footer-link'><a href='https://www.linkedin.com/in/mark-kranenburg-317522152/' target="_blank" className='footer-link'>LinkedIn</a></p>
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        </footer>
    )
}