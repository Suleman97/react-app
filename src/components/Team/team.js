import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import "./team.css";

import ceo from "./imgs/CEO.gif";
import cof from "./imgs/COF.gif";
import ui from "./imgs/ui.gif";
import scientist from "./imgs/scientist.gif";


class TeamCard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            designation: "",
            name : "",
            description : "",
            img: "",
            imgKey:{
                "CEO" : ceo,
                "COF" : cof,
                "UI" : ui,
                "Scientist" : scientist,
            }
        }
    }

    componentDidMount(){
        this.setState({
            designation:this.props.designation,
            name:this.props.name,
            description:this.props.description,
            img:this.props.img

        })
        fetch('https://randomuser.me/api/')
            .then(res =>res.json())
            .then(result=>{
                console.log(result)
                // let img = result.results[0].picture["large"]
                // this.setState({
                //     img
                // })
                let mail = result.results[0].email
                this.setState({
                    mail
                })
            })
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="card float-left col-md-3 mt-3">
                        <img src={this.state.imgKey[this.state.img]} className="rounded"></img>
                        <div className="card-body">
                            <h4 className="card-title clr mt-3"><i>{this.state.name} </i></h4>
                            <p className="mt-1 red">{this.state.designation}</p>
                            <p className="card-text clr mt-3">{this.state.mail} <br/>
                            <i className="fa fa-facebook-official pad" aria-hidden="true"></i>
                            <i className="fa fa-twitter-square pad" aria-hidden="true"></i>
                            <i className="fa fa-linkedin-square pad" aria-hidden="true"></i></p>
                            {/* <p className="card-text clr mt-3">{this.state.description}</p> */}
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default TeamCard;