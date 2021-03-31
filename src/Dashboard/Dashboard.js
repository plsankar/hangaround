import React, { useEffect, useState } from 'react';
import SiteItem from './SiteItem';

export default function Dashboard() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        chrome.storage.local.get(['sites'], (result) => {
            setItems(result.sites.sort((a, b) => a.duration - b.duration).reverse());
        });
    }, []);

    return (
        <div className="dashboard__container">
            <h1 className="dashboard__header">hangaround</h1>
            <div className="dashboard__content">
                {items.map((item, i) => (
                    <SiteItem site={item} key={i} />
                ))}
            </div>
        </div>
    );
}
