import React from 'react';

export default function SiteItem({ site }) {
    const { domain, duration } = site;
    return (
        <div className="siteitem">
            <div className="siteitem__name">{domain}</div>
            <div className="siteitem__time">{new Date(duration * 1000).toISOString().substr(11, 8)}</div>
        </div>
    );
}
