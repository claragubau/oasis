import React, { Component } from 'react'
import * as Sphere from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.min.css"
import hab from "../../images/HABADA.jpg"


export default class SphereComponent extends Component {
    constructor(props) {
        super(props)
        this.divStyle = {
          width: '100%',
          height: '625px',
          top: '25px'
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
            },
            time_anim: false,
            default_fov: 75,
            longitude_range: [-3*Math.PI/4+0.25, 3*Math.PI/4-0.25],
            latitude_range: [-Math.PI/3, Math.PI/3],
            markers: [
                {
                    id: 'cajas',
                    circle: 20,
                    x: 1100,
                    y: 525,
                    style: {
                        // backgroundColor: 'rgba(255, 246, 223)',
                        borderColor: 'rgba(255,255,225)'
                    }
                },
                {
                    id: 'cajas2',
                    circle: 15,
                    x: 1100,
                    y: 525,
                    tooltip: 'Cajas',
                    style: {
                        backgroundColor: 'rgba(0, 0, 0)'
                    },
                    content: 'Éstas figuran la acción del abandono que lleva a cabo la protagonista cuando monta el mercadillo de antigüedades en el jardín. Llenas de objetos que pertenecen a la casa, las cajas están presentes en distintas escenas; simbolizando la presión que sufre Ada para aceptar la realidad y pasar página. En el cortometraje encontraremos las cajas en el comedor, la habitación de Ada y el mercadillo.'
                },
                {
                    id: 'poster',
                    circle: 20,
                    x: 425,
                    y: 525,
                    tooltip: 'Póster',
                    style: {
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                    },
                    content:
                        "Ada va coleccionando los números de las revistas OASIS y con ellas los fragmentos de póster que llegan con cada entrega. Así compone el gran póster de OASIS con el mensaje: “Completa tu OASIS”. Éste representa el trayecto que hace la protagonista durante la colección esperando que le aporte un estado de felicidad para reemplazar su vacío inconsciente. Una vez completado, apreciará que este universo la está alejando de la realidad. En el cortometraje encontraremos el póster en la habitación."
                    },               
                {
                    id: 'posits',
                    circle: 20,
                    x: 720,
                    y: 650,
                    tooltip: 'Pósits',
                    style: {
                        backgroundColor: 'rgba(255, 255, 255)',
                    },
                    content: "Las advertencias de Bea siguen presentes en el subconsciente de Ada aunque ella no las vea. Estos mensajes originados en antiguas discusiones de madre e hija son visibles para la espectadora pero no para Ada. Al menos hasta que se da cuenta de la realidad que ha evitado durante mucho tiempo.En el cortometraje encontraremos los pósits en la cocina, el comedor, la habitación de Ada, el jardín y el pasillo."
                },
                {
                    id: 'lampara',
                    circle: 20,
                    x: 550,
                    y: 750,
                    tooltip: 'Lámpara',
                    style: {
                        backgroundColor: 'rgba(255, 255, 255)',
                    },
                    content: "Acorde con la estética y el color de OASIS LA REVISTA, éste objeto representa el falso oasis de Ada pareciéndose a la forma de un planeta. La esfera simboliza el universo que engloba las revistas, los pósters, las pastillas, la chaqueta… Es decir, la zona de confort donde vive atrapada la protagonista. En el cortometraje encontraremos la lampara de plasma en el escritorio de la habitación de Ada y posteriormente en el mercadillo."
                },    
                {
                    id: 'revista',
                    circle: 20,
                    x: 1950,
                    y: 860,
                    tooltip: 'Revista',
                    style: {
                        backgroundColor: 'rgba(255, 255, 255)',
                    },
                    content: "Las advertencias de Bea siguen presentes en el subconsciente de Ada aunque ella no las vea. Estos mensajes originados en antiguas discusiones de madre e hija son visibles para la espectadora pero no para Ada. Al menos hasta que se da cuenta de la realidad que ha evitado durante mucho tiempo.En el cortometraje encontraremos los pósits en la cocina, el comedor, la habitación de Ada, el jardín y el pasillo."
                }
            ]
        })
    }

    render() {
        return (
        <div>
        <div style={this.divStyle} ref={this.sphereDiv} id="viewer"><div ref={node => this.subDiv = node} style={this.divStyle}></div></div>
        </div>
        )
    }
}