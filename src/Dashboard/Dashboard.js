import React, { useEffect, useState } from 'react';
import SiteItem from './SiteItem';
import './Dashboard.scss';

export default function Dashboard() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        chrome.storage.local.get(['sites'], (result) => {
            if (!result || !result.sites) return;
            setItems(result.sites.sort((a, b) => a.duration - b.duration).reverse());
        });
    }, []);

    return (
        <div className="dashboard__container">
            <h1 className="dashboard__header">hangaround1</h1>
            <div className="dashboard__content">
                {items.map((item, i) => (
                    <SiteItem site={item} key={i} />
                ))}
            </div>
        </div>
    );
}
