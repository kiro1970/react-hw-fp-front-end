import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Member extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        member_id: 0,
        email:'',
        first_name: '',
        last_name: '',
        member_since: new Date(),
        classes_taken: 0,
        current_rank: '',
        next_rank: '',
        classes_til_rank_up: '' 
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    componentDidMount() {
        this.getmember();
   }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    });
      }
    

    async getmember(){
        const user = JSON.parse(window.sessionStorage.getItem("user"));
        const apiUrl = 'http://localhost:8080/api/members/' + user.member_id;
        let data = await fetch(apiUrl)
            .then((response) => response.json());
        this.setState({
            member_id: data.member_id,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            member_since: data.member_since,
            classes_taken: data.classes_taken,
            current_rank: data.current_rank,
            next_rank: data.next_rank,
            classes_til_rank_up: data.classes_til_rank_up
            }
    );
    }

    async handleSubmit(event){
        const apiUrl = 'http://localhost:8080/api/members/update/1';
        let data = await fetch(apiUrl, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        });

    }


    render() {
        let member_id = this.state.member_id;
        return (
            <div>
            { member_id == 0 ?
                <h1>Log in to view your profile</h1>
                :
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="member_id" className="form-label">Member ID</label>
                        <input type="text" className="form-control" name="member_id" readOnly value={this.state.member_id} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" name="email"  value={this.state.email} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="first_name" className="form-label">First Name</label>
                        <input type="text" className="form-control" name="first_name"  value={this.state.first_name} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="last_name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="last_name"  value={this.state.last_name} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="member_since" className="form-label">Member Since</label>
                        <input type="text" className="form-control" name="member_since" readOnly value={this.state.member_since} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="classes_taken" className="form-label">Classes Taken</label>
                        <input type="text" className="form-control" name="classes_taken" readOnly value={this.state.classes_taken} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="current_rank" className="form-label">Current Rank</label>
                        <input type="text" className="form-control" name="current_rank" readOnly value={this.state.current_rank} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="next_rank" className="form-label">Next Rank</label>
                        <input type="text" className="form-control" name="next_rank" readOnly value={this.state.next_rank} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="classes_til_rank_up" className="form-label">Classes until next rank</label>
                        <input type="text" className="form-control" name="classes_til_rank_up" readOnly value={this.state.classes_til_rank_up} onChange={this.handleInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            }
            </div>
            );
            
    }
};

export default Member;