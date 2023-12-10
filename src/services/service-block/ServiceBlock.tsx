import './ServiceBlock.css'

export function ServiceBlock(props: { image: string; header: string; text: string}) {
    return (
        <div className='service-block'>
            <div className='service-inner-block'>
                <img className='service-block-img' src={props.image} alt='Service Block Image'/>
                <h2 className='service-block-title'>
                    {props.header}
                </h2>
                <span className='service-block-text'>
                    {props.text}
                </span>
            </div>
        </div>
    )
}