import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        let data =  window.sessionStorage.getItem("user");
        if( data ){
            data = JSON.parse(data);
            this.state = {
                member_id:data.member_id,
                name:data.first_name,
            }
        }
        else{
            this.state = {
                member_id:null,
                name:null,
            }
        }

        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin = async googleData => {  const res = await fetch("http://localhost:8080/api/members/login", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })  
    const data = await res.json()
    console.log('User: ' + data);
    // store returned user somehow
    window.sessionStorage.setItem("user", JSON.stringify(data));
    window.sessionStorage.setItem("memberId", data.member_id);
    this.setState({member_id:data.member_id, name:data.first_name})
    }

    render() {
        let name = this.state.name;
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-brand btn btn-link text-warning" ><img width={100} src={process.env.PUBLIC_URL +"/riptidecircle.png"} alt="Rip Tide Martial Arts" /></button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link active btn btn-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/classes" className="nav-link active btn btn-link">Classes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ranks" className="nav-link active btn btn-link">Ranks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/members/" className="nav-link active btn btn-link">Members</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            { name ?
                                    <h3 className='text-white'>Let's get training, {name}</h3>
                                    :
                                    <GoogleLogin
                                    clientId={'1061246817484-df9o16t8aoc6j1vdsf8hkt5rbelcdr05.apps.googleusercontent.com'}
                                    buttonText="Log in with Google"
                                    onSuccess={this.handleLogin}
                                    onFailure={this.handleLogin}
                                    cookiePolicy={'single_host_origin'}/>
        
                            }
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;