import React from 'react';

const JobCategory = () => {
    return (
        <div>
            <div className="text-center mt-16">
                <h3 className='text-4xl font-bold'>Job Category List</h3>
                <p className='my-10 text-gray-500 text-sm mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 my-16'>
                <div className='mx-auto lg:mx-0'>
                    <img src="accounts.png" alt="" />
                    <h4 className='text-base font-semibold mt-3'>Account & Finance</h4>
                    <p className='my-10 text-gray-500 text-xs mt-2'>300 Jobs Available</p>
                </div>
                <div className='mx-auto lg:mx-0'>
                    <img src="accounts.png" alt="" />
                    <h4 className='text-base font-semibold mt-3'>Account & Finance</h4>
                    <p className='my-10 text-gray-500 text-xs mt-2'>300 Jobs Available</p>
                </div>
                <div className='mx-auto lg:mx-0'>
                    <img src="accounts.png" alt="" />
                    <h4 className='text-base font-semibold mt-3'>Account & Finance</h4>
                    <p className='my-10 text-gray-500 text-xs mt-2'>300 Jobs Available</p>
                </div>
                <div className='mx-auto lg:mx-0'>
                    <img src="accounts.png" alt="" />
                    <h4 className='text-base font-semibold mt-3'>Account & Finance</h4>
                    <p className='my-10 text-gray-500 text-xs mt-2'>300 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;