import * as React from 'react';
import _ from 'lodash';
import { Site } from '../types';
import './SiteItem.scss';

type SiteItemProps = {
    site: Site;
};

const SiteItem: React.FC<SiteItemProps> = ({ site }: SiteItemProps) => {
    const { domain, duration } = site;
    const pad = (input: number) => input.toString().padStart(2, '0');
    const time = React.useCallback(() => {
        const hours: number = Math.floor(duration / 60 / 60);
        const minutes: number = Math.floor(duration / 60) - hours * 60;
        const seconds: number = duration % 60;
        return `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
    }, [duration]);

    return (
        <div className="siteitem">
            <div className="siteitem__name">{domain}</div>
            <div className="siteitem__time">{time()}</div>
        </div>
    );
};

export default React.memo(SiteItem, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});
