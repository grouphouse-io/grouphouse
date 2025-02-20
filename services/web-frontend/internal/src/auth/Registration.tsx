import React from 'react';


export class Registration extends React.Component {
  render() {
    return (
        <div id="registration-form-outer-container">
            <div className="form-inner-container">
            <img src="/images/logos/user_icon.png" alt="Login Icon" id="login-icon-view"/>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
            </div>
        </div>
    );
  }
}