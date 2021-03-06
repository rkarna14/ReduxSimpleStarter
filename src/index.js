import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';


const API_KEY = 'AIzaSyDzFRoGX-MO6TZjGeGJqAL5CQVNeZ_VRGc';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        YTSearch({key: API_KEY, term:'ram sailee'}, (videos)=> {
            this.setState({ 
                videos, 
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));