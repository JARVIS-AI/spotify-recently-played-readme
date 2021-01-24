/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { RecentlyPlayedResponse } from '../models/RecentlyPlayedResponse';
import AntStyles from '../styles/antd';
import SvgStyles from '../styles/svg';
import TrackList from './TrackList/TrackList';

interface SvgWidgetProps {
    /**
     * Width in pixels.
     */
    width: number;
    /**
     * Height in pixels.
     */
    height: number;
    /**
     * Recently played response from Spotify API.
     */
    recentlyPlayedResponse: RecentlyPlayedResponse;
    /**
     * Username.
     */
    username: string;
}

/**
 * The main SVG widget.
 */
export default function SvgWidget(props: SvgWidgetProps): JSX.Element {
    const playHistoryList = props.recentlyPlayedResponse.items;
    const { width, height, username } = props;

    return (
        <>
            <style jsx global>
                {AntStyles}
            </style>
            <style jsx global>
                {SvgStyles}
            </style>
            <g>
                <rect
                    data-testid="card-bg"
                    x="0"
                    y="0"
                    rx="10"
                    height="100%"
                    stroke="#212121"
                    width="100%"
                    fill="#212121"
                    strokeOpacity="1"
                />
                <foreignObject x="0" y="0" width={width} height={height}>
                    <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: 'white' }}>
                        <TrackList playHistoryList={playHistoryList} username={username} />
                    </div>
                </foreignObject>
            </g>
        </>
    );
}
