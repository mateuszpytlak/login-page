import React from 'react';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            case: 'login',
        }
    }

    handleEnter = (event) => {
        event.target.nextSibling.style.display = 'inline-block';
    };

    handleLeave = (event) => {
        event.target.nextSibling.style.display = 'none';
    };


    handleVerify = (event) => {
        event.preventDefault();
        if (this.input.value.indexOf('@') > 0) {
            this.setState({
                case: 'logged',
            });
            console.log('zalogowano')
        } else {
            this.input.style.border = '1px solid #CC0849';
            this.input.style.boxShadow = 'none';
            this.input.previousSibling.style.color = '#CC0849';
            this.input.nextElementSibling.nextElementSibling.style.visibility = 'visible';
        }
    };

    handleForgotten = () => {
        if (this.state.case === 'login') {
            this.setState({
                case: 'forgotten',
            })
        } else if (this.state.case === 'forgotten') {
            this.setState({
                case: 'login',
            })
        } else if (this.state.case === 'logged') {
            this.setState({
                case: 'login',
            })
        }
    };

    render() {

        const view = this.state.case === 'login';

        if (this.state.case === 'login') {
            return (
                <section className="login">
                    <header>
                        <div className="login-logo">
                            <div className="login-logo-container"><img src="../assets/images/twitter_logo_large.jpg"
                                                                       alt="Kinght Rider"/></div>
                        </div>
                    </header>

                    <form className="login-form">
                        <div className="login-form-input-container">
                            <label id="email" htmlFor="email">Email Address</label>
                            <input ref={(input) => this.input = input} onMouseEnter={this.handleEnter}
                                   onMouseLeave={this.handleLeave} id="email" type="email"
                                   placeholder="Enter your email address"/>
                            <span className="login-form-input-container-emailtooltip">required</span>
                            <span className="login-form-input-container-invalidEmail">Invalid email address</span>
                            <label id="password" htmlFor="password">Password</label>
                            <input onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} id="password"
                                   type="password" placeholder="Enter your password"/>
                            <span className="login-form-input-container-passwordtooltip">required</span>

                            <div className="login-form-input-container-checkbox-container">
                                <input className="css-checkbox" id="checkbox" type="checkbox"/>
                                <label className="css-label" htmlFor="checkbox">Remember me</label>
                            </div>
                        </div>
                    </form>

                    <div className="login-submit">
                        <div className="login-submit-link"><span
                            onClick={this.handleForgotten}>Forgotten password?</span></div>
                        <button onClick={this.handleVerify}>Login</button>
                    </div>
                </section>
            )


        } else if (this.state.case === 'forgotten') {
            return (
                <section className="login">
                    <header>
                        <div className="login-logo">
                            <div className="login-logo-container"><img src="../assets/images/twitter_logo_large.jpg" alt=""/></div>
                        </div>
                    </header>
                    <div className="login-forgotten">
                        <div className="login-forgotten-container">
                            <div className="login-forgotten-message">Hey, it happens to everyone. <br/>
                                Just let us know what email address you use to login <br/>
                                any we'll send you an email with instructions.
                            </div>
                            <label htmlFor="email">Email address</label>
                            <input id="email" type="email"/>
                        </div>
                    </div>

                    <div className="login-submit-forgotten">
                        <div className="container">
                            <button onClick={this.handleForgotten} className="login-submit-cancel">Cancel</button>
                            <button className="login-submit-reset">Reset Password</button>
                        </div>
                    </div>
                </section>
            )
        } else if (this.state.case === 'logged') {
            return (
                <section className="login">
                    <header>
                        <div className="login-logo">
                            <div className="login-logo-container"><img src="../assets/images/twitter_logo_large.jpg" alt=""/></div>
                        </div>
                    </header>
                    <div className="logged">
                        <div className="container">
                            Congratulations! You've logged in!
                        </div>
                    </div>
                    <div className="login-submit-forgotten">
                        <button onClick={this.handleForgotten} className="login-submit-cancel">Cancel</button>
                    </div>
                </section>
            )
        }
    }
}