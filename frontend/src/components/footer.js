import React from 'react';

class Footer extends React.Component{
    render() {
        return(
            <div style={{position: 'relative', backgroundColor: '#252627'}}>
                <footer style={{textAlign: 'center', display: 'flex', justifyContent: 'center', backgroundColor: '#252627', paddingBottom: '0', paddingTop: '10px'}}>
                    <div style={{backgroundColor: '#252627'}}>
                        <div style={{textAlign: 'center', color: '#aaaaaa',backgroundColor: '#252627', fontFamily: 'Roboto'}}>
                            <p> &copy; Made with love by Gabby Chan</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;