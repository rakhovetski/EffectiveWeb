import './Footer.css'

export function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className='footer-left'>
                    <h1 className='footer-title'>
                       <img className='logo-footer' src='images/icons/letter-t.png'/> HealthCare
                    </h1>
                    <p className='footer-descr'>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <p className='footer-copyright'>©HealthCare PTY LTD 2023. All rights reserved</p>
                </div>
                <div className='footer-right'>
                    <table className='footer-table'>
                        <thead>
                            <th>Company</th>
                            <th>Region</th>
                            <th>Help</th>
                        </thead>
                        <tbody>
                            <td>
                                <tr>About</tr>
                                <tr>Testimonials</tr>
                                <tr>Find a doctor</tr>
                                <tr>Apps</tr>
                            </td>
                            <td>
                                <tr>Indonesia</tr>
                                <tr>Singapore</tr>
                                <tr>Hongkong</tr>
                                <tr>Canada</tr>
                            </td>
                            <td>
                                <tr>Help center</tr>
                                <tr>Contact support</tr>
                                <tr>Instructions</tr>
                                <tr>How it works</tr>
                            </td>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}