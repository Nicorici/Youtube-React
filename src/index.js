import React from "react";
import { render } from "react-dom";
import { Header } from './header';
import { Container } from './container';

async function readJ(src) {
    const response = await fetch(src);
    const result = await response.json();
    return result;
}

const Loading = () => {
    console.log("loading");
    return (<p>Loading...</p>)
}

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("construcot");
        this.onClickVideo = this.onClickVideo.bind(this);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        console.log("mounting");
        readJ("/Video/GetVideos").then(videos => this.setState({
            isLoading: false,
            videos,

        }));

    }

    onClickVideo(videoId) {
        this.setState({ selectedVideoId: videoId });
    }

    render() {
        const { isLoading, videos, selectedVideoId } = this.state;
        if (isLoading) {
            return <Loading />;
        }
        if (!videos || videos.length === 0) {
            return <div>No videos available</div>; 
        }

        const selectedVideo = selectedVideoId ? videos.find(v => v.id === selectedVideoId) : videos[0];
        console.log("render");
        return <>
            <Header />
            <Container videos={videos} onClickVideo={this.onClickVideo} selectedVideo={selectedVideo} />
        </>;
    }
}

render(
    <App />,
    document.getElementById('root')
);