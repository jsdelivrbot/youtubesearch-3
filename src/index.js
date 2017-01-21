// get react from the installed modules
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// local imports provide path reference
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

// YouTube API key
const API_KEY = "AIzaSyDHkXxd7g_KnC5C3m6rRkUtJ1mNzaFVZcM";

// Create new component that produces som html
// Functional Component, is a bit limited
// const App = () => {
// 	return (
//     <div>
//       <MenuBar />
//       <SearchBar />
//     </div>
//   );
// }
//

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo : null
     };
     this.videoSearch('Laurierboom');
  }

videoSearch(term){
  YTSearch({ key: API_KEY, term: term}, (videos) => {
    this.setState( {
        videos: videos,
        selectedVideo: videos[0]
      }
     );
  });

}

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take the  compntents generated HTML an put in the DOM (the page)
ReactDOM.render(<App />, document.querySelector('.container'));


