import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCart/NewsSummaryCart';



const Home = () => {

    const allNews = useLoaderData();

    return (
        <div>
            <h2>This is Home news {allNews.length}</h2>
            {
                allNews.map(news =>
                    <NewsSummaryCard
                        key={news._id}
                        news={news}>

                    </NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;