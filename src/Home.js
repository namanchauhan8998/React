import React from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = (props) => {
    //data name is changed as blog
const {data:blogs,isPending,error}=useFetch('  http://localhost:8000/blogs')
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogsasdsadad" />}

        </div>
    );
}

export default Home;
