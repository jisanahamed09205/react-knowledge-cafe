import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleAddBookmark = (blog) =>{
    // console.log(blog);
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks);
  }

  const handleSpentReadTime = (id,time) =>{
    // console.log('marking as spenting time',time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    // remove the read blog from bookmark
    // console.log('remove bookmark',id);
    const remainingBookmarks = bookmarks.filter(bookmark =>bookmark.id !== id)
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-6xl mx-auto'>
    <Blogs 
    handleAddBookmark={handleAddBookmark} 
    handleSpentReadTime={handleSpentReadTime}
    ></Blogs>
    <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
    </div>

    </>
  )
}

export default App
