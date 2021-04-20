import React, { useEffect, useState } from 'react';
import SiteItem from './SiteItem';
import './Dashboard.scss';

export default function Dashboard() {
    const [items, setItems] = useState([]);
    const update = () => {
        chrome.storage.local.get(['sites'], (result) => {
            if (!result || !result.sites) return;
            const newSites = result.sites.sort((a, b) => a.duration - b.duration).reverse();
            setItems(() => newSites);
        });
    };

    useEffect(() => {
        update();
        chrome.storage.onChanged.addListener(update);
        return () => {
            chrome.storage.onChanged.removeListener(update);
        };
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
