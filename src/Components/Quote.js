import '../App.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Quote = ({ quote, author }) => {
  return (
    <div className="quote-container">
      <h2 className="quote"><span>“ </span>{quote || <Skeleton />}<span> ”</span></h2>
      <h3 className="author">- {author || <Skeleton />}</h3>
    </div>
  )
}

export default Quote
