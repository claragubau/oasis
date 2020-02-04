// import React, { Component } from 'react'
// import './Home.css'
// import Menu from '../Menu/Menu'
// import { render } from 'react-dom'

// class Home extends Component {
//     viewer = new PhotoSphereViewer({
//         container: 'viewer',
//         panorama: '../../images/tresdpic'
//     })
//         // <div id="viewer"></div>

//         // <script>
//         // var viewer = new PhotoSphereViewer({
//         //     container: 'viewer',
//         //     panorama: 'path/to/panorama.jpg'
//         // });
//         // </script>
//     render(){
//         return (

//         <div>
//             <div className="viewer">

//             </div>
//             <div className="homerect" style={{ position: "absolute", zIndex: -2 }}>
//                 <h1>HOME</h1>
//             </div>
//         </div>
//         )
//     }
// }

// export default Home;
import React, { Component } from 'react'
import * as Sphere from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.min.css"
import hab from "../../images/HABADA.jpg"


export default class SphereComponent extends Component {
    constructor(props) {
        super(props)
        this.divStyle = {
          width: '100%',
          height: '625px'
        };
        this.sphereDiv = element => {
            this.photoSphereViewer = element;
        };
        this.sphereDiv.appendChild = (elem) => {
            this.subDiv.appendChild(elem)
        }
    }

    componentDidMount() {
        const PVS = Sphere({
            parent: this,
            container: this.sphereDiv,
            panorama: hab,
            navbar: [
                'autorotate',
                'zoom',
                'fullscreen'
            ],
            pano_data: {
                full_width: 4000,
                full_height: 2000,
                cropped_width: 3000,
                cropped_height: 1500,
                cropped_x: 500,
                cropped_y: 250
            }
        })
    }

    render() {
        return (
        <div>
        <div style={this.divStyle} ref={this.sphereDiv} id="viewer"><div ref={node => this.subDiv = node} style={this.divStyle}></div></div>
        <div style={{zIndex: 25}}>HOOOOOOOOME</div>
        </div>
        )
    }
}