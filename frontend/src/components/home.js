import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <header>
                <div style={headerStyle} id="home">
                    <h1>Quark</h1>
                    <h2>Let us find your perfect style</h2>
                </div>
            </header>
        )
    }
}

const headerStyle = {
    color: '#ff734f',
    textAlign: 'center',
    padding: '40px',
};

export default Home;