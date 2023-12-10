import { WhiteButton } from "./learn-more/WhiteButton"
import { ServiceBlock } from "./service-block/ServiceBlock"
import { ServiceDescription } from "./service-description/ServiceDescription"
import { TitleServices } from "./service-title/ServiceTitle"
import './Services.css'


export function Services() {
    return (
        <>
        <TitleServices title="Our services"/>
        <ServiceDescription />
        <div className="service-blocks">
            <ServiceBlock image="/images/icons/search.png" 
                        header="Search doctor"
                        text="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
            <ServiceBlock image="/images/icons/vaccine.png"
                        header="Online pharmacy"
                        text="Buy  your medicines with our mobile application with a simple delivery system"/>
            <ServiceBlock image="/images/icons/advice.png"
                            header="Consultation"
                            text="Free consultation with our trusted doctors and get the best recomendations"/>
            <ServiceBlock image="/images/icons/details.png"
                            header="Details info"
                            text="Free consultation with our trusted doctors and get the best recomendations"/>
            <ServiceBlock image="/images/icons/first-aid-kit.png"
                            header="Emergency care"
                            text="You can get 24/7 urgent care for yourself or your children and your
                            lovely family"/>
            <ServiceBlock image="/images/icons/route.png"
                            header="Tracking"
                            text="Track and save your medical history and health data "/>
        </div>
        <WhiteButton title="Learn more"/>
        </>
    )
}