import './ServiceTitle.css'

export function TitleServices(props: {title: string}) {
    return (
        <div className='service-title-block'>
            <h1 className='service-title'>
                {props.title}
            </h1>
            <hr className='service-line'/>
        </div>
    )
}