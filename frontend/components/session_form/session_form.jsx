import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "", zip_code:"", first_name: "", last_name: "", img_url: "http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_300/v1484946992/batch_photos/placeholder-user.png" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return (
				<span className="login-change">
					Don't have an account yet?
					<Link to="/signup">Sign Up</Link>
				</span>);
		} else {
			return (

				<span className="login-change">
				Already have an account?
				<Link to="/login">Log In</Link>
			</span>);
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`} class="errors">
						{error}
					</li>
				))}
			</ul>
		);
	}

	demoLogin(e){
		e.preventDefault();
		this.props.router.push("/login");
		const demo = {username: "Bruce Lee", password: "123456"};
		this.setState(demo);
		this.props.login({user: demo});
	}

	render() {
    const title = this.props.formType ==="login" ? "Log In" : "Sign Up";

    let SignUpFullName = "";
		let ZipCode = "";

    if(this.props.formType ==="signup"){
      SignUpFullName = (
				<div>
	        <input type="text"
	        value={this.state.first_name}
	        onChange={this.update("first_name")}
	        className="login-input"
	        placeholder="First Name"/>

	        <br/>
	        <input type="text"
	        value={this.state.last_name}
	        onChange={this.update("last_name")}
	        className="login-input"
	        placeholder="Last Name"/>

	      	<br/>
	      </div>
	    );
		ZipCode = (
			<div id="zip">
				<input type="text"
				value={this.state.zip_code}
				onChange={this.update("zip_code")}
				className="login-input"
				placeholder="Zip Code"/>
				<br/>
			</div>
		);
	}



		return (
			<div className="login-form-container">
				<form className="login-form-box">

					<h1> {title} </h1>
					{this.renderErrors()}
					<div className="login-form">
					       {SignUpFullName}

							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input"
                placeholder="Username"/>

						<br/>

							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input"
                placeholder="Password"/>

						<br/>

  					{ZipCode}
					</div>

						<span className="login-buttons">
						<button className="login-button" onClick={this.handleSubmit}>Lets Go!</button>
						<button onClick={this.demoLogin}>Demo Login</button>
						</span>

						{this.navLink()}
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
