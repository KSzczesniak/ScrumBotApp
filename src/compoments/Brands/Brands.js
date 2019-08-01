import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

const brandNamesToIconsDict = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram
};

const Brands = ({ brandNames }) => {
    const brands = brandNames.map((brand, index) => {
        return (
            <a key={index}
                href={`http://${brand}.com`}
                className="mx-4 mt-3 mb-1">
                <FontAwesomeIcon icon={brandNamesToIconsDict[brand]} />
            </a>
        )
    });
    return (
        <div className="d-flex justify-content-center">
            {brands}
        </div>
    )
}



export default Brands
