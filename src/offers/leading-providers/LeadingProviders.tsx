import { WhiteButton } from '../../services/learn-more/WhiteButton';
import { OfferDescription } from '../offers-description/OfferDescription';
import { OfferLine } from '../offers-line/OfferLine';
import { OfferTitle } from '../offers-title/OfferTitle';
import './LeadingProviders.css'

export function LeadingProviders() {
    return (
        <div className="leading-providers">
          <div className="leading-providers-block">
          <img
              className="leading-providers-image"
              src="/images/leading-providers.svg"
              alt="Leading Providers Illustration"
            />
            <div className="leading-providers-block-text">
              <OfferTitle title="Leading healthcare providers"/>
              <OfferLine />
              <OfferDescription  title='We provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver'/>
              <br/>
              <WhiteButton title="Learn more"/>
            </div>
          
          </div>
        </div>
      );
}