import React from 'react'

const Blogs = () => {

    const blogs = [
        {
            id: 1,
            heading: "Blog 1 heading",
            subheading: "subheading of blog 1",
            content: "content of Blog 1",
        },
        {
            id: 2,
            heading: "Blog 2 heading",
            subheading: "subheading of blog 2",
            content: "content of Blog 2",
        },
        {
            id: 3,
            heading: "Blog 3 heading",
            subheading: "subheading of blog 3",
            content: "content of Blog 3",
        },
    ]
  return (
    <div className='flex justify-start  items-center'>
        <div className=' my-3 w-full'>
            {blogs.map((blog) => (
                <div className='bg-white m-3 p-3' key={blog.id}>
                    <h1 className='text-3xl'>{blog.heading}</h1>
                    <h2 className='text-xl'>{blog.subheading}</h2>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blogs