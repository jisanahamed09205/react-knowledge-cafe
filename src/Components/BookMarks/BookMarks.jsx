import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookmarks,readingTime}) => {
    return (
        <div className=" md:w-1/3 text-center bg-gray-300 rounded ml-4 mt-2 pt-4">
            <div>
                <h3 className='text-4xl'>Spending Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl">BookMarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default BookMarks;