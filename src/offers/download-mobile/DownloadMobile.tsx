import { WhiteButton } from '../../services/learn-more/WhiteButton';
import { OfferDescription } from '../offers-description/OfferDescription';
import { OfferLine } from '../offers-line/OfferLine';
import { OfferTitle } from '../offers-title/OfferTitle';
import './DownloadMobile.css'

export function DownloadMobile() {
    return (
        <div className="download-providers">
          <div className="download-providers-block">
        
            <div className="download-providers-block-text">
              <OfferTitle title='Download our mobile apps'/>
              <OfferLine />
              <OfferDescription title="Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely"/>
              <br/>
              <WhiteButton title="Download ⇩" />
            </div>
            <img
              className="download-providers-image"
              src="/images/leading-providers.svg"
              alt="Leading Providers Illustration"
            />
          
          </div>
        </div>
      );
}