import React, { FC } from 'react';
import styles from './style.module.css';

interface ICustomIFramePlayerProps {
    source: string;
}

const CustomIFramePlayer: FC<ICustomIFramePlayerProps> = ({ source }) => {
    return (
        <div>
            <iframe className={styles.iframePlayer} src={source} scrolling="no"></iframe>
        </div>);
}

export default CustomIFramePlayer;