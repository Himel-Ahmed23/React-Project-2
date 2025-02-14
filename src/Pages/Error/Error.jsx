import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mt-5'>
            <h1 className='text-danger'>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/SignIn'>SignIn</Link>
            <Link to='/signUp'>SignUp</Link>
        </div>
    );
};

export default Error;