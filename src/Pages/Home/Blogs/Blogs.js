import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center'>This is blogs section</h2>
            <h2 className='text-danger'> Question1: Difference between javascript and nodejs?</h2>
            <p className='text-primary'>{`Javascrypt is a scripting language which is light weight and object oriented. It builds dynamics webpages which is interactive. 
            The code can be run on browser only. Whereas node.js provides a running environment for JS outside the browser. It can be used for both front and back end  
            but generally used for server side whereas JS is used for client side. Node.js can run on on mac os, linux etc`}</p>
            <br />
            <h2 className='text-danger'>Question 2: Differences between sql and nosql databases.?</h2>
            <p className='text-primary'> {`SQL databases are scalable vertically, whereas NoSQL databases are scalable horizontally. SQL database consist of table whereas nosql databases can be documents, graph
            or multiple table with differentn attributes. That is why SQL databases are rigid and nosql databases are very flexible. SQL servers can be oracle, MySQL and NoSql servers can be MongoDB, CouchDb etc. `}</p>
            <br />
            <h2 className='text-danger'>Question 3: What is the purpose of jwt and how does it work?</h2>
            <p className='text-primary'> {`JWT is json web token and it is used for securely transferring data from client side to server so that unauthorized people cannot get acceess. Server issues a token when
            a user logs in and the token goes from server to client side and it is stored in the memory/cookie/local storage. Server verifies the token and gives access otherwise
            shows Error 401(unauthorized access) and Error 403(Forbidden access)`}</p >
        </div >
    );
};

export default Blogs;