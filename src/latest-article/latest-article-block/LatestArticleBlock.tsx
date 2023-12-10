import './LatestArticleBlock.css'

export function LatestArticleBlock(props: {image: string; title: string; descr: string}) {
    return (
        <div className="latest-article-block">
            <div className='latest-article-inner-block'>
                <img className="latest-article-img" src={props.image} alt={props.title}/>
                <h2 className='latest-article-title'>{props.title}</h2>
                <p className='latest-article-text'>{props.descr}</p>
                <a className='latest-article-link' href="#">Read more</a>
            </div>
        </div>
    )
}