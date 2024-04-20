import image from '../assets/images.png'
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-1 py-1" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px",width:"335px"}}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,95):"No description available for this news read more to get the full news"}.</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    
  )
}

export default NewsItem