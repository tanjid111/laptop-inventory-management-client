import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className='px-4 mx-auto text-center w-100'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                    <h1 className='my-5'>
                        Oops! The page you're looking for isn't here.
                    </h1>
                    <h4> You might have the wrong address, or the page may have moved.  </h4>
                    <Link to='/'>
                        <button className='w-100 py-2 px-3  mt-3 btn btn-primary'>
                            Back to homepage
                        </button>
                    </Link>
                </div>
                <div>
                    <div className='w-100'>
                        <img
                            src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound
