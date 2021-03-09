import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class banner extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="container col-md-12 max-margin">
                    <center>
                        <h1 className="head1 ban"><b>Your Favorite One Page<br/>Multi Perpose Tamplate</b></h1>
                        <p className="head1 ban">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <button type="button" className="btn btn-danger">Find Out More</button>
                    </center>
                </div>
            </React.Fragment>
            
        );
    }
}

export default banner;