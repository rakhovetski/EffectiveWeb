import './OfferDescription.css'

export function OfferDescription(props: {title:string}) {
    return (
        <span className="offer-description">
             {props.title}
        </span>
    )
}