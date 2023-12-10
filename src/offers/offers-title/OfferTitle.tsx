import './OfferTitle.css'

export function OfferTitle(props: {title: string}) {
    return (
        <h1 className="offer-title">
            {props.title}
        </h1>
    )
}