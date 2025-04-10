import { Link } from "react-router";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-100 bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
        
            <p className="text-lg mt-5 text-gray-600 ">
                It seems that you've encountered a broken link or a page that no longer exists.
            </p>
            <Link to='/collection'>
          <button className="cursor-pointer mt-5 px-6 py-2 bg-black text-white text-sm sm:text-base rounded-full hover:bg-gray-800 transition">
            Go back to Home
          </button>
        </Link>
        </div>
    );
};
