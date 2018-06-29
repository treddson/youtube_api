import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetails from './components/video_detail';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
const API_KEY = 'AIzaSyAa9_yyLHuL7kXaKhHYKuVwCE7dO1C-p3A';




class App extends Component  {
    constructor(props) {
        super(props);
        
        this.state = { videos: [] };

         YTSearch({key: API_KEY, term: 'sharks' }, (videos) => {
            this.setState({ videos })
        });
    }


    render() {
     return (
      <div>
        <SearchBar />
        <VideoDetails />
        <VideoList videos={this.state.videos} />
        <VideoListItem />
      </div>
    )
 }
}

ReactDOM.render(<App />, document.querySelector('.container'));

