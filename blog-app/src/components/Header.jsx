import { Link,BrowserRouter,Route } from 'react-router-dom';

function Header(props) {
  return (
    <div className="flex justify-between py-5 px-12 bg-gray-100 items-center border-2 border-gray-600">
      <div>
        <img
          src="https://launchpad.altcampus.school/images/altcampus-logo.svg"
          alt=""
        />
      </div>
      <nav className="flex">
        <Link to="/" exact className="font-bold">
          <p className="text-xl">Home</p>
        </Link>
        <Link to="/signup" className="font-bold">
          <p className="mx-8 text-xl">Signup</p>
        </Link>
        <Link to="login" className="font-bold">
          <p className="text-xl">Login</p>
        </Link>
      </nav>
    </div>
  );
}

export default Header;