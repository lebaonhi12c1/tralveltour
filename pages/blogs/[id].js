import React from 'react';
import DefaultLayout from './../../layout/DefaultLayout';
import { blogs } from '@/fakedata';

function BlogDetails({blog}) {
    return (
        <div className='center-element'>
            <div className="bg-white">
                <div className="root-container">
                    <div className='flex flex-col gap-[40px] py-[60px]'>
                        <h1 className='text-[24px] text-secondary font-bold lg:text-[60px]'>
                            {blog.title}
                        </h1>
                        <img src={blog.image} alt={blog.title} title={blog.title} loading='eager' className='h-[280px] lg:h-[440px] object-cover ' />
                        <p className="">
                            {blog.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
BlogDetails.getLayout = DefaultLayout
export const getStaticPaths = async()=>{
    const paths = blogs.map(item=>{
        return {
            params: {
                id: item._id
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async ({params})=>{
    const blog = blogs.filter(item=>item._id===params.id)[0]
    return {
        props:{
            blog,
        }
    }
}
export default BlogDetails;