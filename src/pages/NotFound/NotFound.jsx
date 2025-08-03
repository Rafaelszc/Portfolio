import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className=" h-screen ml-40 flex flex-col justify-center text-2xl text-white ">
      <span>Error 404 page not found :(((</span>
        
      <span>
        Return to <Link to="/" className="text-purple-500"> Home </Link>
      </span>
    </div>  
  );
}