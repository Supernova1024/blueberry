import React, { Component } from "react";


class Login extends Component{



	render(){

		return(
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="inputEmail">Email address</label>
						<input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword">Password</label>
						<input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
				</div>
				<button type="submit" className="btn btn-default">Login</button>
			</form>
			);
	}
}

export default Login;
