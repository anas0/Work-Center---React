import React from 'react';
import DreamJob from '../DreamJob/DreamJob';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {
    return (
        <div className='mx-20 md:mx-40'>
            <DreamJob></DreamJob>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;