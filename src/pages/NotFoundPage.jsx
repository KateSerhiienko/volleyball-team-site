import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen min-h-600 bg-main-dark text-white">
      <FaExclamationTriangle className=" text-yellow-400 text-6xl mb-4"></FaExclamationTriangle>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link to="/">
        <button className="btn-primary">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
