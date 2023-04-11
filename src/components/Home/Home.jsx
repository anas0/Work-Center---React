import React from 'react';
import DreamJob from '../DreamJob/DreamJob';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobCategorys from '../JobCategorys/JobCategorys';

const Home = () => {
    return (
        <div className='mx-20 md:mx-40'>
            <DreamJob></DreamJob>
            <JobCategorys></JobCategorys>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;