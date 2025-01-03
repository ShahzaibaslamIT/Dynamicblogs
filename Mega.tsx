import React from 'react';
import BlogCard from '../components/BlogCard';


export default function Mega(){
    const posts=[
        {
            id:'1',
            title:' Intro to Data Science',
            description:"Explore the fundamentals of data science and dive into the field to become a Data Scientist ",

            date:"2024-12-29",
            imageUrl:"../images/Title4.jpg"
        },
        {
            id:'2',
            title:'Top 10 Python Libraries for Machine Learning',
            description:"Python has become the go-to programming language for machine learning, thanks to its simplicity and an extensive collection of libraries. These libraries provide pre-built functions and tools that make developing machine learning models efficient and effective.",

            date:"2024-12-29",
            imageUrl:"../images/Title2.webp"
        },
        {
            id:'3',
            title:'The Future of Web Development with AI Integration',
            description:"The field of web development is undergoing a paradigm shift with the integration of Artificial Intelligence (AI). From creating smarter user interfaces to automating backend processes, AI is revolutionizing how websites are built and function.",

            date:"2024-12-29",
            imageUrl:"../images/Title8.jpg"
        },
        {
            id:'4',
            title:'How to Build Your First Machine Learning Model in Python',
            description:"Machine learning is no longer confined to experts. With Python's versatile libraries and intuitive syntax, anyone can create their first machine learning model. This post will guide you step-by-step to build a basic model using Python.",

            date:"2024-12-29",
            imageUrl:"../images/Title5.jpg"
        },
        {
            id:'5',
            title:'The Role of AI in Modern Web Development',
            description:"Artificial Intelligence (AI) is not just a buzzword in technology—it's becoming a core component of modern web development. AI is transforming websites into smarter, more interactive platforms by introducing advanced capabilities like personalization, automation, and enhanced user experiences.",

            date:"2024-12-29",
            imageUrl:"../images/Title6.jpg"
        },
        {
            id:'6',
            title:"Exploring Neural Networks: A Beginner's Perspective",
            description:"Neural networks are at the heart of modern AI advancements, mimicking how the human brain processes information. While the concept might seem complex, understanding its basics is simpler than you think. This blog post breaks it down for beginners.",

            date:"2024-12-29",
            imageUrl:"../images/Title7.jpg"
        },

       
        






    ];
    return(
        <div className="my-8">
            <h1 className="text-3xl font-bold text-center my-8 text-slate-600 animate-color-change ">Exploring the world of AI and Data science</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post,index)=>(
                    <div className="fade-in" key={post.id}>
                        <div className="blog-card">
                            <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

