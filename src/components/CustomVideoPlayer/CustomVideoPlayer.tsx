import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import styles from './style.module.css';

interface ICustomVideoPlayerProps {
    source: any;
}

const CustomVideoPlayer: FC<ICustomVideoPlayerProps> = ({ source }) => {
    return (
        <div className={styles.playerWrapper}>
            <ReactPlayer
                className={styles.reactPlayer}
                url={source}
                width='100%'
                height='100%'
                playing loop
            />
        </div>);
}

export default CustomVideoPlayer;