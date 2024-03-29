import React, { FC, memo, useCallback } from 'react';
import _ from 'lodash';
import { Site } from '../types';
import './SiteItem.scss';

type SiteItemProps = {
    site: Site;
};

const SiteItem: FC<SiteItemProps> = ({ site }: SiteItemProps) => {
    const { domain, duration } = site;
    const pad = (input: number) => input.toString().padStart(2, '0');
    const time = useCallback(() => {
        const hours: number = Math.floor(duration / 60 / 60);
        const minutes: number = Math.floor(duration / 60) - hours * 60;
        const seconds: number = duration % 60;
        return `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
    }, [duration]);

    return (
        <div className="siteitem">
            <div className="siteitem__name" title={domain}>
                {domain}
            </div>
            <div className="siteitem__time">{time()}</div>
        </div>
    );
};

export default memo(SiteItem, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});
