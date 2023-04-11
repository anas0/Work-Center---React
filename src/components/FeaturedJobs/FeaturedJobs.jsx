import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);

    useEffect( ()=>{
        fetch('featured-jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data));
    }, []);

    return (
        <div>
            <div className="text-center mt-16">
                <h3 className='text-4xl font-bold'>Featured Jobs</h3>
                <p className='my-10 text-gray-500 text-sm mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 my-16 gap-3'>
                {
                    featuredJobs.map(featuredJob => <FeaturedJob
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                    ></FeaturedJob>)
                }       
            </div>

        </div>
    );
};

export default FeaturedJobs;