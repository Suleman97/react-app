import React from "react";
import pic from "./imgs/img.gif";

import "./slider.css";

class CustomSlider extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container div5">
                    <div className="card col-md-6 float-left">
                        <img src={pic} className="rounded card-img" />
                    </div>
                    <div className="col-md-6 float-left rounded">
                        <center><i><p className="mt-5">"Integer posuere erat a ante<br/> venenatic dapibus posuerre velit<br/> aliquet donee sed odio dui"</p>
                            <p className="mt-3">SUSAN SIMS, iNTRACTION DESIGNNER</p></i>
                        </center>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CustomSlider;