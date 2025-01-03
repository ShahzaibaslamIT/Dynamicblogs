import React from "react";

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-50'>
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-800 ease-in-out transform hover:translate-y-[-5px] hover:text-red-600 text-black">Shahzaib Aslam: Tech revolution is the next big thing that would change the global dynamics completely!</h2>
        <p className="text-center m-4 mt-4 text-sm text-slate sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">Empowering You with Knowledge in Finance, AI, Machine Learning, and Data Science.Welcome to a space where education meets innovation! Through my blogs, I’m dedicated to simplifying the complexities of finance, AI, machine learning, and data science. My mission is to empower enthusiasts and professionals alike with actionable knowledge and practical skills.</p>

        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-black animate-color-change">Explore My Blog Categories</h1>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100 ml-[250px]">
          {
            [
              "Technology",
              "Finance",
              "Data Sciences",
              "Artificial Intelligence",
              "Machine Learning"
            ].map((category, index) => (
              <div key={index} className="relative froup p-6 bg-black rounded-lg shadow-lg hover:bg-sky-300 hover:bg-white hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center text-neutral-600">
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
              </div>



            ))
          }
        </div>

        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
        What My Blogs Offer?

Simplified Concepts:

Breaking down advanced topics like neural networks and data analytics into easy-to-understand lessons.
Explaining financial strategies and AI-driven solutions in plain language.
<br></br><br></br>
Hands-On Learning:

Step-by-step tutorials for building machine learning models using Python.
Practical projects to apply data science techniques in real-world scenarios.
<br></br><br></br>
Industry-Relevant Insights:

Insights into how AI and machine learning are transforming industries, especially finance.
Latest trends, tools, and technologies to stay ahead in the digital age.
<br></br><br></br>
Resourceful Guidance:

Recommendations on the best tools, libraries, and frameworks for your learning journey.
Tips and tricks for improving coding efficiency and analytical skills.
<br></br><br></br>

Why Learn From Me?
I believe education should be accessible, engaging, and impactful. My blogs are crafted to inspire and equip you with the skills needed to excel in these dynamic fields. Whether you’re a beginner or looking to refine your expertise, there’s something here for everyone.
<br></br><br></br>
Start Your Learning Journey Today!
Dive into my blogs and discover a wealth of knowledge waiting for you. Together, let’s unlock the potential of data and innovation!






        </p>
       

      </section>

    </div>
  );
}