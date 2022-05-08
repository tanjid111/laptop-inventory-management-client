import React from 'react';
import {
    MDBFooter,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter className='bg-light text-center text-white mt-auto'>
            <div className='container p-4 pb-0'>
                <section className='mb-4'>
                    <a
                        className='btn btn-primary btn-floating m-1'
                        style={{ backgroundColor: '#3b5998' }}
                        href='https://www.facebook.com'
                        role='button'
                    >
                        <MDBIcon fab icon='facebook-f' />
                    </a>

                    <a
                        className='btn btn-primary btn-floating m-1'
                        style={{ backgroundColor: '#55acee' }}
                        href='https://www.twitter.com'
                        role='button'
                    >
                        <MDBIcon fab icon='twitter' />
                    </a>


                    <a
                        className='btn btn-primary btn-floating m-1'
                        style={{ backgroundColor: '#ac2bac' }}
                        href='https://www.instagram.com'
                        role='button'
                    >
                        <MDBIcon fab icon='instagram' />
                    </a>

                    <a
                        className='btn btn-primary btn-floating m-1'
                        style={{ backgroundColor: '#0082ca' }}
                        href='https://www.linkedin.com'
                        role='button'
                    >
                        <MDBIcon fab icon='linkedin-in' />
                    </a>

                    <a
                        className='btn btn-primary btn-floating m-1'
                        style={{ backgroundColor: '#333333' }}
                        href='https://www.github.com'
                        role='button'
                    >
                        <MDBIcon fab icon='github' />
                    </a>
                </section>
            </div>

            <div className='text-center text-primary fw-bold p-3' style={{ backgroundColor: '#e3f2fd' }}>
                Copyright:©{new Date().getFullYear()}
                <a className='text-primary' href=''>
                    Laptop Warehouse
                </a>
            </div>
        </MDBFooter>
    );
}