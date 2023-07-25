import React from 'react'
import loginImg from '../../images/logo.jpeg'
import Axios from 'axios';

export class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    
    render() {      
        return (
            <div className='base-container' ref={this.props.containerRef}>
              <div className='header'>Register</div>
              <div className='content'>
                <div className='image'>
                    <img src={loginImg} />
                </div>
                <div className="form">
                <div className="form-group">
                        <label htmlFor="fName">First Name</label>
                        <input type="text" name='fName' placeholder='Type your first name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lName">Last Name</label>
                        <input type="text" name='lName' placeholder='Type your last name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' placeholder='Type your email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name='phone' placeholder='Type your phone' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name='password' placeholder='Type your password' />
                    </div>
                </div>
              </div>
        
                <div className="footer">
                    <button type='button' className="btn">Register</button>
                </div>
        
            </div>
        )
    }
}
