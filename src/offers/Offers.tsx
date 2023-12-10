import { DownloadMobile } from "./download-mobile/DownloadMobile";
import { LeadingProviders } from "./leading-providers/LeadingProviders";
import './Offers.css'


export function Offers() {
    return (
        <>
        <div className="offers-block">
            <LeadingProviders />
            <DownloadMobile />
        </div>
        </>
    )
}