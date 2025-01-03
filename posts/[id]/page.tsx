'use client';
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";

const posts=[
  {
    id:"1",
    title: 'Intro to Data Science',
    image:'../images/Title4.jpg',
    description:"Explore the fundamentals of data science and dive into the field to become a Data Scientist "
  },
  {
    id:'2',
    title:'Top 10 Python Libraries for Machine Learning',
    description:"Python has become the go-to programming language for machine learning, thanks to its simplicity and an extensive collection of libraries. These libraries provide pre-built functions and tools that make developing machine learning models efficient and effective.",

   
    image:"../images/Title2.webp"
},
{
    id:'3',
    title:'The Future of Web Development with AI Integration',
    description:"The field of web development is undergoing a paradigm shift with the integration of Artificial Intelligence (AI). From creating smarter user interfaces to automating backend processes, AI is revolutionizing how websites are built and function.",

   
    image:"../images/Title8.jpg"
},
{
    id:'4',
    title:'How to Build Your First Machine Learning Model in Python',
    description:"Machine learning is no longer confined to experts. With Python's versatile libraries and intuitive syntax, anyone can create their first machine learning model. This post will guide you step-by-step to build a basic model using Python.",

    
    image:"../images/Title5.jpg"
},
{
    id:'5',
    title:'The Role of AI in Modern Web Development',
    description:"Artificial Intelligence (AI) is not just a buzzword in technology—it's becoming a core component of modern web development. AI is transforming websites into smarter, more interactive platforms by introducing advanced capabilities like personalization, automation, and enhanced user experiences.",
    image:"../images/Title6.jpg"
},
{
    id:'6',
    title:"Exploring Neural Networks: A Beginner's Perspective",
    description:"Neural networks are at the heart of modern AI advancements, mimicking how the human brain processes information. While the concept might seem complex, understanding its basics is simpler than you think. This blog post breaks it down for beginners.",
    image:"../images/Title7.jpg"
},

];

export default function Post ({params}:{params:{id:string}}){
  const  { id }= params;
  const post=posts.find((p)=>p.id===id);

  if(!post){
    return(
      <h2 className="text-2xl-font-bold text-center mt-10">Post Not Found</h2>
    );
  }

 const renderParagraph = (description:string)=>{
  return description.split("/n").map((para,index)=>(
    <p key={index} className="mt-4 text-justify">
      {para.trim()}
    </p>
  ));
 };

 return(
  <div className="max-w-3xl mx-auto p-5">
    <h1 className="md:text-4xl text-3xl font-bold text-slate-500 text-center">
      {" "}
      {post.title}
      </h1>
{post.image && (
  <img
  src={post.image}
  alt={post.title}
  className="w-full h-auto rounded-md mt-4"/>
)}
<div className="mt-6 text-lg text-slate-700">
  {renderParagraph(post.description)}
</div>
    <CommentSection postId={post.id}/>
    <AuthorCard/>
    <Footer/>
  </div>
 )

} 
 