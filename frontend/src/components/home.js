import React from 'react';
import Typical from 'react-typical';
import bggif from './images/bg.gif';

class Home extends React.Component {
    render() {
        return (
                <div style={{position: 'relative', outline: '0px', overflow: 'hidden'}}>
                    <img src={bggif} alt="" style={{minWidth: '100%', minHeight: '90vh', class: 'center', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}/>
                    <h1 style={headerStyle}>personalized <a href='https://www.thegoodtrade.com/features/thrift-shopping-tips' style={{color:'#aaaaaa'}} target="_blank" rel="noopener noreferrer">thrifting</a> experience</h1>
                    <h2 style={headerStyle.smallerStyle}>
                        <Typical steps={[
                            'custom recommendations',
                            1000,
                            'unique, vintage finds',
                            1000,
                            'sustainable fashion',
                            1000,
                            'let us find your style'
                        ]}
                        wrapper='i'
                        />
                    </h2>
                </div>
        )
    }
}

// const rectHeader = {
//     position: 'absolute',
//     top: '28%',
//     left: '12%',
//     height: '19vmin 20vmax',
//     width: '76vw',
//     backgroundColor: '#252627'
// }

const headerStyle = {
    position: 'absolute',
    top: '37%',
    left: '12%',
    color: '#0b4f6c',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '9vh',
    paddingLeft: '9%',
    paddingRight: '18%',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    smallerStyle: {
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        color: '#e0503f',
        textAlign: 'center',
        width: '80%',
        paddingBottom: '9%',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
        fontSize: '4vh'
    }
};

export default Home;