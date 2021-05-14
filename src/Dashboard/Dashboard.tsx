import * as React from 'react';
import SiteItem from './SiteItem';
import './Dashboard.scss';
import { Site } from '../types';

export default function Dashboard() {
    const [items, setItems] = React.useState<Array<Site>>([]);
    const update = () => {
        chrome.storage.local.get(['sites'], (result) => {
            if (!result || !result.sites) return;
            const sites: Array<Site> = result.sites;
            const newSites: Array<Site> = sites.sort((a, b) => a.duration - b.duration).reverse();
            setItems(() => newSites);
        });
    };

    React.useEffect(() => {
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
