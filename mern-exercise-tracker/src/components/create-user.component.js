import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this); //Need to do binding so that "this" refers to the actual object
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault(); //prevents the default HTML submit action to occur; instead, use the action that we specify

        const user = {
            username: this.state.username,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user) //Send a HTTP POST request to endpoint, along with new user JSON data
            .then(res => console.log(res.data));

        this.setState({  //after you input a new user, make the default user text back to empty so that you can enter a new user 
            username: ''

        })
    }

    render() {
        return (
          <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
      }
    }