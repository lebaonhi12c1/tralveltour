import React from 'react';
import DefaultLayout from './../../layout/DefaultLayout';
import { blogs } from '@/fakedata';
import Image from 'next/image';

function BlogDetails({blog}) {
    return (
        <div className='center-element'>
            <div className="bg-white">
                <div className="root-container">
                    <div className='flex flex-col gap-[40px] py-[60px]'>
                        <h1 className='text-[24px] lg:text-[40px]  text-secondary font-bold '>
                            {blog.title}
                        </h1>
                       <div className='h-[280px] lg:h-[440px] relative'> <Image src={blog.image} alt={blog.title} title={blog.title} loading='eager' className=' object-cover ' fill={true} /></div>
                        <p className="">
                            {blog.description}
                        </p>

                        <div dangerouslySetInnerHTML={{__html: blog.content}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
BlogDetails.getLayout = DefaultLayout
// export const getStaticPaths = async()=>{
   
//     const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/blog/publish`)
//     const blogs = await res.json()
//     const paths = blogs.map(item=>({params: {id: item._id}}))
//     return {
//         paths,
//         fallback: false,
//     }
// }
export const getServerSideProps = async ({params})=>{
    
    const res =  await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/blog/${params.id}`)
    const blog = await res.json()
    return {
        props:{
            blog,
        }
    }
}
export default BlogDetails;