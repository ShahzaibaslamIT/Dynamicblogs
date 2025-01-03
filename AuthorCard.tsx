import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-black lg-rounded-lg p-6 mt-12">
        <div className="flex items-center animation-fadein">


    <img className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
    src="../images/myimage.jpeg"
    alt="Author Image" 
    />

    <div>
        <h3 className="text-xl font-bold text-white">Shahzaib Aslam</h3>
        <p className="text-slate-500">
            {""}
            Data Scientist|AI Beginner|Financial Analyst{""}
        </p>
    </div>

        </div>
    
     <p className="mt-[8px] leading-relaxed text-white">
        Shahzaib Aslam is a Financial Analyst with a professional degree in Accounting and Finance from IBA Karachi. Shahzaib's growng interest in learning machine learning algorithms and building AI based models have encourage him to dive deep in the world of AI.
     </p>

     <div className="mt-4 flex space-x-3">
        <a 
        href="a"
        className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-red-700 transition duration-300">
            Twitter
        </a>

        <a 
        href="a"
        className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-red-700 transition duration-300">
            Linkedin
        </a>

        <a 
        href="a"
        className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-red-700 transition duration-300">
            Github
        </a>

     </div>
    </div>
  );
}