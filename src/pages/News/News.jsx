import { Link } from "react-router-dom";


const News = ({ aNews }) => {
    // console.log(aNews);
    const {_id, author, title, thumbnail_url, image_url, details } = aNews
    return (
        <div className="mb-5">
            <div className="card  bg-base-100 shadow-xl">
                <div className="flex  gap-x-3 bg-gray-200 rounded">
                    <img className="rounded-3xl w-10 mt-2 h-10" src={author.img} alt="Shoes" />
                    <div className=" p-2 w-96">
                        <h2 className="text-sm">{author.name}</h2>
                        <p className="text-sm">{author.published_date}</p>
                    </div>

                </div>
                <div className="px-10 py-5">
                    <h2 className="card-title">{
                        title
                    }</h2>
                </div>
                <figure><img src={image_url}alt="Shoes" /></figure>
                <div className="card-body">
                   <h2>
                   {
                        details.length> 200 ? <p>{details.slice(0,400)}<Link to={`/news/${_id}`} className="text-blue-400">Read More..</Link></p> : <p>{details}</p>
                     
                    }
                   </h2>
                </div>
            </div>
        </div>
    );
};

export default News;