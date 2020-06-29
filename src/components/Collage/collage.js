import React from "react";
import './collage.css';

import work1 from './imgs/work1.jpg';
// import work2 from './imgs/work2.gif';
// import work3 from './imgs/work3.gif';
import work4 from './imgs/work4.gif';
import work5 from './imgs/work5.gif';
// import work6 from './imgs/work6.gif';
// import work7 from './imgs/work7.gif';
import work8 from './imgs/work8.gif';

class WorkCollage extends React.Component{
    constructor(props){
        super(props)

            this.state = {
                img:"",
            imgKey:{
                "work11":work1,
                // "work12":work2,
                // "work13":work3,
                "work14":work4,
                "work15":work5,
                // "work16":work6,
                // "work17":work7,
                "work18":work8,
            }

            }
        
    }
    componentDidMount(){
        this.setState({
            img:this.props.img
        })
    }


    render(){
        return(
            <React.Fragment>
                <div className="container">
                <div className="container float-left col-md-3 nopadding imgs">
                <img src={this.state.imgKey[this.state.img]} className="size rounded"></img>
                </div>
                </div>
            </React.Fragment>

        );
        }
}

export default WorkCollage;