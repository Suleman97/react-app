import React from "react";
import './content.css';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from './imgs/featurelogo2.gif';
import img2 from './imgs/featurelogo3.gif';
import img3 from './imgs/featurelogo4.gif';
import img4 from './imgs/featurelogo5.gif';
import img5 from './imgs/featurelogo6.gif';
import img6 from './imgs/icon.png';

class CustomCard extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name:"",
            description:"",
            img:"",
            imgKey:{
                "img11":img1,
                "img12":img2,
                "img13":img3,
                "img14":img4,
                "img15":img5,
                "img16":img6,
            }
        }

        
    }

    componentDidMount(){
        this.setState({
            name:this.props.name,
            description:this.props.des,
            img:this.props.img
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="container mt-3">
                    <div className="card float-left col-md-4 mt-3" >
                        <div className="card-body">
                            <center>
                                <img src={this.state.imgKey[this.state.img]}></img>
                                <h4 className="card-title mt-3">{this.state.name} </h4>
                                <p className="card-text mt-3">{this.state.description}</p>
                            </center>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CustomCard