import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import {  useParams } from 'react-router-dom';

const NewsDetails = () => {
    const {id} = useParams()
    // console.log(news);
    return (
        <div>
            <div className="mt-6">
                <Header></Header>
                <Navbar/>
            </div>
            <div className="grid grid-cols-4">
                <div className="grid col-span-3">
                    <h2 className="text-2xl">News Detais{id}</h2>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;