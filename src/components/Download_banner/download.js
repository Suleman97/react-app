import React from "react";
import "./download.css";
import 'bootstrap/dist/css/bootstrap.css';

class DownloadBanner extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container mt-4">
                    
                        <center>
                            <h2 className="mt-5"><i>Are you ready to start? Download now for free</i></h2>
                            FUSCE DAPIBUS,TELLUS TELLTA FUSCE<br/>
                            <button className="btn btn-danger" type="submit">Download Here</button>
                        </center>
                    
                </div>
            </React.Fragment>

        );
    }
}

export default DownloadBanner;