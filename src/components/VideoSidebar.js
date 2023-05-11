import './VideoSidebar.css'
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message'
import  FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import  FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';


export default function VideoSideBar({ messages, shares, likes }) {
  const [liked, setLiked] = useState(false)


  return (
    <div className='videoSidebar'>
        <div className='videoSidebar__button'>
        {liked ? (
           <FavoriteIcon fontSize='large' onClick={(e) => setLiked(false)} /> 
        ) : (
          <FavoriteBorderIcon 
            fontSize='large' 
            onClick={(e) => setLiked(true)} 
          />
        )}          
           <p>{likes ? `${likes + 1}` : `${likes}`}</p>
        </div>
        <div className='videoSidebar__button'>
           <MessageIcon fontSize='large' />
           <p>{messages}</p>
        </div>
        <div className='videoSidebar__button'>
            <ShareIcon fontSize="large" />
            <p>{shares}</p>
        </div>
    </div>
  )
}

