import { WhiteButton } from "../services/learn-more/WhiteButton";
import { TitleServices } from "../services/service-title/ServiceTitle";
import { LatestArticleBlock } from "./latest-article-block/LatestArticleBlock";
import './LatestArticle.css'


export function LatestArticle() {
    return (
        <>
        <TitleServices title="Check out our latest article" />
        <div className="latest-article">
            <LatestArticleBlock image="/images/latest-article/ukol.png"
                                title="Disease detection, check 
                                 up in the laboratory"
                                descr="In this case, the role of the health laboratory is very important to do
                                  a disease detection..."/>
            <LatestArticleBlock image="/images/latest-article/doctor.png"
                                title="Herbal medicines that are 
                                safe for consumption"
                                descr="Herbal medicine is very widely used at this time because of its very good for your health..."/>
            <LatestArticleBlock image="/images/latest-article/skin.png" 
                                title="Natural care for healthy 
                                facial skin"
                                descr="A healthy lifestyle should start from now and also for your skin health.
                                There are some..."/>
        </div>
        <div className="latest-article-button">
            <WhiteButton title="View all"/>
        </div>
        </>
    )
}