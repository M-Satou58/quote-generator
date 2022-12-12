import { FacebookShareButton, TwitterShareButton, InstapaperShareButton} from 'react-share'
import '../App.css'
const Buttons = ({ shareUrl, title, updateQuote }) => {
  return (
    <div className="btn-container">
      <div className="social-media-buttons-container">
        <div className="social-button rounded">
          <FacebookShareButton
            url={shareUrl} quote={title}>
              <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/facebook-f.png" alt="facebook"/>
          </FacebookShareButton>
        </div>
        
        <div className="social-button rounded">
          <TwitterShareButton url={shareUrl} quote="title">
             <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/twitter--v1.png" alt="twitter"/>
          </TwitterShareButton>
        </div>
        <div className="social-button rounded">
          <InstapaperShareButton url={shareUrl} quote="title">
            <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/instagram-new.png" alt="instagram"/>
          </InstapaperShareButton>
        </div>
      </div>

        <button 
          onClick={updateQuote}
          className="new-quote">New Quote</button>

    </div>
  )
}

export default Buttons
