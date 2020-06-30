import React from "react";
import pic from "./imgs/img.gif";
import 'bootstrap/dist/css/bootstrap.css';

import "./slider.css";

class CustomSlider extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={pic} className="rounded size float-left" />
                        </div>
                        <div className="col-md-6 rounded float-right div5 ban">
                            <center><i><p className="mt-5 mt-5">"Integer posuere erat a ante<br/> venenatic dapibus posuerre velit<br/> aliquet donee sed odio dui"</p>
                                <p className="mt-3">SUSAN SIMS, iNTRACTION DESIGNNER</p></i>
                            </center>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CustomSlider;