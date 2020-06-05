import React from 'react';
import bgupload from './images/uploadbg.gif'
import {Row, Container, Col} from 'react-bootstrap'
import axios from 'axios'
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class Upload extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          buttonShow: false,
          files: [],
          fileExists: false,
          article: null,
          colors: []
        };
      }

    handleInit() {
        console.log("FilePond instance has initialised", this.pond);
      }

    getArticle = article => {
        axios.get('http://localhost:5000/api/article')
        .then(response => {
            this.setState({
                article: response.data,
            })
        })
    }

    getColors = colors => {
        axios.get('http://localhost:5000/api/colors')
        .then(response => {
            console.log(response.data)
            let get_response = JSON.stringify(response.data)
            console.log(get_response)
            let colors_array = get_response.split(" ")
            colors_array[0] = colors_array[0].substring(1)
            colors_array.pop()
            console.log(colors_array)
            this.setState({
                colors: colors_array
            })
        })
    }

    chainedFunc() {
        this.getArticle();
        this.getColors();
    }

    render() {
        return (
            <div style={{position: 'relative'}}>
                <header> 
                    <div style={{position: 'relative', outline: '0px', overflow: 'hidden'}}>
                        <img src={bgupload} alt="" style={{ minHeight: '80vh', minWidth: '100%', class: 'center', marginLeft: 'auto', marginRight: 'auto', display: 'block', overflowX: 'hidden'}}/>
                        <h5 style={headerStyle}>while we work on the social media platform for <a href="/#/upload" style={{color: '#0b4f6c'}}>Quark</a>, </h5>
                        <h1 style={headerStyle2}>we'd love for you to try our algorithm!</h1>
                    </div>
                </header>
                <div>
                    <Container style={container}>
                        <Row>
                            <Col sm={6}>
                                <div style={summary}>
                                    <p>take a picture of a piece of clothing and our program will try to determine what it is 
                                        based on our neural network! it'll also generate a color palette that we think you'll love 
                                        based on the piece of clothing
                                    </p>
                                    <br></br>
                                    <div>
                                        <FilePond
                                            ref={ref => (this.pond = ref)}
                                            files={this.state.files}
                                            allowMultiple={false}
                                            //maxFiles={3}
                                            server="http://localhost:5000/api/upload"
                                            oninit={() => this.handleInit()}
                                            onupdatefiles={fileItems => {
                                                // Set currently active file objects to this.state
                                                this.setState({
                                                    files: fileItems.map(fileItem => fileItem.file)
                                                });
                                            }}
                                            onprocessfile={file => {
                                                this.setState({
                                                    buttonShow: true
                                                })
                                            }}
                                            onremovefile={file => {
                                                this.setState({
                                                    files: null,
                                                    buttonShow: false,
                                                    article: null
                                                })
                                            }}
                                            />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                {this.state.buttonShow && <div style={{margin: 60}}>
                                    <button type="button" className="btn btn-secondary btn-lg btn-block" style={{color: '#ahf3rk'}} onClick={() =>
                                    this.chainedFunc()}>Show Results!</button>
                                </div>}
                                {this.state.article && <div style={summary}>
                                    <p>the program thinks it is a {this.state.article}!</p>
                                    <br></br>
                                    <p>it also recommends these colors for you!</p>
                                    <div style={{marginTop: '20px', position: 'relative', textAlign: 'center', backgroundColor: this.state.colors[0], width: '100%', height: '50px'}}/>
                                    <div style={{position: 'relative', textAlign: 'center', backgroundColor: this.state.colors[1], width: '100%', height: '50px'}}/>
                                    <div style={{position: 'relative', textAlign: 'center', backgroundColor: this.state.colors[2], width: '100%', height: '50px'}}/>
                                    <div style={{position: 'relative', textAlign: 'center', backgroundColor: this.state.colors[3], width: '100%', height: '50px'}}/>
                                    <div style={{position: 'relative', textAlign: 'center', backgroundColor: this.state.colors[4], width: '100%', height: '50px'}}/>
                                </div>}
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
        )
    }
}

const container = {
    backgroundColor: '#252627',
    width: '100%',
    maxWidth: 'unset', 
    height: '100%', 
}

const summary = {
    fontSize: '3vh',
    fontFamily: 'Raleway',
    textAlign: 'center',
    margin: 60,
    position: 'relative',
    color: '#f6f7e8'

}

const headerStyle = {
    position: 'absolute', 
    top: '20%',
    left: '6%',
    width: '90%',
    fontFamily: 'roboto',
    color: '#f6f7e8',
    textAlign: 'center',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    outline: '10px',
    padding: '20px',
    fontSize: '200%'
};

const headerStyle2 = {
    position: 'absolute', 
    top: '45%',
    left: '10%',
    width: '80%',
    fontFamily: 'roboto',
    color: '#e0503f',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    textAlign: 'center',
    paddingBottom: '50px',
    fontSize: '400%'
}

export default Upload;