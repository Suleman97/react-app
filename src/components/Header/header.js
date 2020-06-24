import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img from './imgs/logo.png'
import './header.css'
// import src from '*.bmp';
// style={backgroundImage: "url("+ background + ")"};

class header extends React.Component {
    render(){
        return (
                <div className="container-fluid back-img ">
                    <div className="container div1">
                    <nav className="navbar navbar-expand-sm  navbar-dark">
                    <span className="navbar-brand col-md-3"><img src={img}></img></span>
                        <ul className="navbar-nav col-md-5">
                            <li className="nav-item"><span class="nav-link active">Home</span></li>
                            <li className="nav-item"><span class="nav-link">About Us</span></li>
                            <li className="nav-item"><span class="nav-link">Contact Us</span></li>
                            <li className="nav-item"><span class="nav-link">Blog</span></li>
                        </ul>
                        <form className="form-inline col-md-4" action="/action_page.php">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                        </nav>
                        
                    </div>
                    <div className="container div1 max-margin">
                    
                    <center><h1 className="head1"><b>Your Favorite One Page<br/>Multi Perpose Tamplate</b></h1>
                    <p className="head1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button type="button" className="btn btn-danger">Find Out More</button></center>
                        

                    </div>
                </div>
            
        );
    }
}

export default header;