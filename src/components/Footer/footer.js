import React from "react";
import "./footer.css";
import 'bootstrap/dist/css/bootstrap.css';

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="footer div6">
                    <div className="container mt-5">
                        <div className="row">
                            <div class="col-md-4 mt-3">
                                <center><h3 className="white-color">LOCATION</h3>
        	                        <p className="white-color">3481 Melrse Place<br/> Beverly hills, CA90210</p>
                                </center>
                            </div>
                            <div class="col-md-4 mt-3">
                                <center>
                                    <h3 className="white-color">Share With love</h3>
                                    <i className="fa fa-facebook-official fa-2x pad white-color" aria-hidden="true"></i>
                                    <i className="fa fa-twitter-square fa-2x pad white-color" aria-hidden="true"></i>
                                    <i className="fa fa-linkedin-square fa-2x pad white-color" aria-hidden="true"></i>
                                </center>
                            </div>
                            <div class="col-md-4 mt-3">
    	                        <center><h3 className="white-color">ABOUT ACTIVEBOX</h3>
                                    <p className="white-color">Your privacy is very important to us. <br/> We designed our 
                                    Data Policy to make important</p>
                                </center>
                            </div>
                        </div>
	                </div>
                    <div class="container-fluid div7">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mt-3">
                                    <center>
                                        <p className="white-color">Copy right @ 2015 Activebox.
                                        All right reserved Made with love Kamal Cheneman</p>
                                    </center>
                                </div> 
                            </div>
                        </div>
                    </div>
                
                 </div>
            </React.Fragment>
        );
    }
}

export default Footer;