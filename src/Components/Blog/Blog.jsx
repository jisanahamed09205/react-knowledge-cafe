import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddBookmark,handleSpentReadTime}) => {
    // console.log(blog);
    const {id,title, cover_img,author,author_img,posted_date,reading_time,hashtag} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8 rounded-md' src={cover_img} alt={`Cover Picture of the title ${title} `} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className=' text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <div className='flex'>
                        <span>{reading_time} min read</span>
                        <button onClick={() => handleAddBookmark(blog)} className='ml-2 text-2xl'><FaBookmark/></button>
                    </div>
                </div>
            </div>
            <h2 className=' text-4xl'>{title}</h2>
            <p><span><a href="">{hashtag}</a></span></p>
            {/* if mine hashtag on the object */}
            {/* {
                hashtag.map((hash,idx) => <span key={idx}><a href="">{hash}</a> </span>)
            } */}
            <button onClick={() => handleSpentReadTime(id,reading_time)}
            className=' text-blue-600 font-bold underline'
            >Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleSpentReadTime: PropTypes.func.isRequired
}

export default Blog;