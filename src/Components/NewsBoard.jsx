import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard=({category})=>{
    const[article,setArticle]=useState([]);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=c796809895aa4c2a90c7965bacdd8f37`
        fetch(url).then((response)=>response.json()).then((data)=>setArticle(data.articles)).catch((error) => console.error('Error:', error));
    },[category])

    return(
        <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {article.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
        </div>
        
    )
}
export default NewsBoard;