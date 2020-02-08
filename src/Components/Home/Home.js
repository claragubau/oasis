import React, { Component } from 'react'
import * as Sphere from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.min.css"
import './Home.css'
import hab from "../../images/HABADA.jpg"
import Menu from '../Menu/Menu'
import logo from '../../images/logo.png'



export default class SphereComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {width:window.innerWidth};
        
        this.divStyle = {
          width: '100vw',
          height: '100vh',
          top: '5vh'
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
            time_anim: 250,
            navbar: null,
            pano_data: {
                full_width: 4000,
                full_height: 2000,
                cropped_width: 3000,
                cropped_height: 1500,
                cropped_x: 500,
                cropped_y: 250
            },
            default_fov: 75,
            default_long: -Math.PI/4,
            longitude_range: [-3*Math.PI/4+0.25, 3*Math.PI/4-0.25],
            latitude_range: [-Math.PI/3, Math.PI/3],
            markers: [
                {
                    id: 'cajas',
                    polygon_px: [
                        [1000, 485], [980, 500],[980, 550],
                        [1215, 560], [1215, 525],
                        [1150,515],[1120,520],[1120, 490]
                      ],
                    svgStyle: {
                        fill: 'rgba(255, 246, 223, 0.5)',
                        stroke: 'rgba(255, 246, 223, 0.8)',
                        strokeWidth: '1px',
                        opacity:'0.1'
                    },
                    tooltip: {
                        content: 'Cajas',
                        color: 'black',
                        backgroundColor: '#c83945'
                    },
                    content: 
                        '<h1>CAJAS</h1><p>Éstas figuran la acción del abandono que lleva a cabo la protagonista cuando monta el mercadillo de antigüedades en el jardín. Llenas de objetos que pertenecen a la casa, las cajas están presentes en distintas escenas; simbolizando la presión que sufre Ada para aceptar la realidad y pasar página. <br/><br/>En el cortometraje encontraremos las cajas en el comedor, la habitación de Ada y el mercadillo.<br/><br/></p>'
                },
                {
                    id: 'poster',
                    polygon_px: [
                        [255, 290],[260, 680], [480, 710], [480, 620], [520, 635], [510, 480] 
                      ],
                    svgStyle: {
                        fill: 'rgba(255, 246, 223, 0.5)',
                        stroke: 'rgba(255, 246, 223, 0.8)',
                        strokeWidth: '1px',
                        opacity:'0.1'
                    },
                    tooltip: {
                        content: 'Póster',
                    },
                    content: 
                        '<h1>PÓSTER</h1><p>Ada va coleccionando los números de las revistas <i>OASIS</i> y con ellas los fragmentos de póster que llegan con cada entrega. Así compone el gran póster de <i>OASIS</i> con el mensaje: <i>“Completa tu OASIS”</i>. Éste representa el trayecto que hace la protagonista durante la colección esperando que le aporte un estado de felicidad para reemplazar su vacío inconsciente. Una vez completado, apreciará que este universo la está alejando de la realidad. <br/><br/> En el cortometraje encontraremos el póster en la habitación.<br/><br/></p>'
                },     
                {
                    id: 'posits',
                    polygon_px: [
                        [650, 505],[655, 800], [780, 800], [775, 505] 
                      ],
                    svgStyle: {
                        fill: 'rgba(255, 246, 223, 0.5)',
                        stroke: 'rgba(255, 246, 223, 0.8)',
                        strokeWidth: '1px',
                        opacity:'0.1'
                    },
                    tooltip: {
                        content: 'Pósits',
                    },
                    content: 
                        '<h1>PÓSITS</h1><p>Las advertencias de Bea siguen presentes en el subconsciente de Ada aunque ella no las vea. Estos mensajes originados en antiguas discusiones de madre e hija son visibles para la espectadora pero no para Ada. Al menos hasta que se da cuenta de la realidad que ha evitado durante mucho tiempo. <br/><br/>En el cortometraje encontraremos los pósits en la cocina, el comedor, la habitación de Ada, el jardín y el pasillo.<br/><br/></p>'
                },          
                {
                    id: 'lampara',
                    circle: 35,
                    x: 540,
                    y: 800,
                    tooltip: 'Lámpara de plasma',
                    svgStyle: {
                        fill: 'rgba(255, 246, 223, 0.5)',
                        stroke: 'rgba(255, 246, 223, 0.8)',
                        strokeWidth: '1px',
                        opacity: '0.1'
                    },
                    content: 
                    '<h1>LÁMPARA DE PLASMA</h1><p>Acorde con la estética y el color de <i>OASIS LA REVISTA</i>, éste objeto representa el falso oasis de Ada pareciéndose a la forma de un planeta. La esfera simboliza el universo que engloba las revistas, los pósters, las pastillas, la chaqueta… Es decir, la zona de confort donde vive atrapada la protagonista. <br/><br/>En el cortometraje encontraremos la lampara de plasma en el escritorio de la habitación de Ada y posteriormente en el mercadillo.<br/><br/></p>'
                }, 
                {
                    id: 'revista',
                    polygon_px: [
                        [1910, 960],[1900, 1060], [2000, 1085], [2015, 980] 
                      ],
                    svgStyle: {
                        fill: 'rgba(255, 246, 223, 0.5)',
                        stroke: 'rgba(255, 246, 223, 0.8)',
                        strokeWidth: '1px',
                        opacity:'0.1'
                    },
                    tooltip: {
                        content: 'Revistas',
                    },
                    content: 
                        '<h1>REVISTAS</h1><p>El elemento principal de la historia es el conjunto de revistas <i>OASIS</i>. El medio que atrapa a Ada dentro de este universo ficticio y que provoca el enfrentamiento entre ella y su madre. Estos números semanales mantienen a Ada dormida y lejos de la realidad.<br/><br/>En el cortometraje encontraremos las revistas repetidamente en la cocina, el porche y la habitación de Ada.<br/><br/></p>'
                }
            ]
        })
    }

    render() {
        let isMobile = window.innerWidth < 1000;
        if(isMobile){
            return(
                <div>
                    <div >
                        <div className="mobileending">
                            <img src={logo} alt="loading..." className="mobilelogo"/>
                            <p>EL CONTENIDO DE ESTA PÁGINA WEB ES EXCLUSIVO PARA ORDENADOR</p>
                        </div>
                        <fieldset style={{zIndex:2}}/>
                        <div style={this.divStyle} ref={this.sphereDiv} id="viewer">
                            <div ref={node => this.subDiv = node} style={this.divStyle}/>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            console.log('sphere')
            return (
            <div>
                <div className="ending">
                    <img src={logo} alt="loading..."/>
                    <p>Encuentra los 5 elementos escondidos</p>
                </div>
                <Menu/>
                <fieldset style={{zIndex:2}}/>
                <div style={this.divStyle} ref={this.sphereDiv} id="viewer">
                    <div ref={node => this.subDiv = node} style={this.divStyle}/>
                </div>
            </div>
            )
        }
    }
}
