import React from 'react'
import loginImg from '../../images/logo.jpeg'

export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='base-container' ref={this.props.containerRef}>
              <div className='header'>Login</div>
              <div className='content'>
                <div className='image'>
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' placeholder='Type your email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name='password' placeholder='Type your password' />
                    </div>
                </div>
              </div>
        
                <div className="footer">
                    <button type='button' className="btn">Login</button>
                </div>
        
            </div>
        )
    }
}

