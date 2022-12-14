import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        email: '',
        password: '',
      },
    };
  }
  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  handleInput = ({ target }) => {
    let { name, value } = target;
    let error = { ...this.state.error };

    switch (name) {
      case 'email':
        error.email = this.validateEmail(value) ? '' : 'Email is not valid';
        break;
      case 'password':
        error.password = value.length < 6 ? 'Password is invalid' : '';
        break;

      default:
        break;
    }

    this.setState({ error, [name]: value });
  };

  render() {
    let { email, password } = this.state.error;
    return (
      <div className="w-full max-w-xs mx-auto">
        <label className="text-2xl font bold text-center mb-12">
          User log in
        </label>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="email"
              onChange={this.handleInput}
              value={this.state.email}
              id={email && 'error email'}
              name="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id={password && 'error password'}
              type="password"
              placeholder="******************"
              value={this.state.password}
              onChange={this.handleInput}
              name="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;