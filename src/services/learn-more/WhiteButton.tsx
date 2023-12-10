import './WhiteButton.css'

export function WhiteButton(props: {title: string}) {
    return (
        <div className="learn-more-block">
            <button className="learn-more-button">
                {props.title}
            </button>
        </div>
    )
}