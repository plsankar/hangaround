import React from 'react';
import './SiteItem.scss';

export default function SiteItem({ site }) {
    const { domain, duration } = site;
    const time = () => {
        const hours = Math.floor(duration / 60 / 60)
            .toString()
            .padStart(2, '0');
        const minutes = (Math.floor(duration / 60) - hours * 60).toString().padStart(2, '0');
        const seconds = (duration % 60).toString().padStart(2, '0');
        return `${hours}h ${minutes}m ${seconds}s`;
    };
    return (
        <div className="siteitem">
            <div className="siteitem__name">{domain}</div>
            <div className="siteitem__time">{time()}</div>
        </div>
    );
}
