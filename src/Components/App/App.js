import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      searchResults:[{name:'name1', artist:'artist1',album:'album',id:'id1'},
      {name:'name2',artist:'artist2',album:'album2',id:'id2'},{name:'name3',artist:'artist3',album:'album3',id:'id3'}],
      playlistName : 'My PlayList',
      playlistTracks:[{name:'PlayListName1', artist:'PlayListArtist1',album:'PlayListAlbum1',id:'id4'},
      {name:'PlayListName2', artist:'PlayListArtist2',album:'PlayListAlbum2',id:'id5'},
      {name:'PlayListName3', artist:'PlayListArtist3',album:'PlayListAlbum3',id:'id6'}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack=>savedTrack.id===track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks:tracks});
  }
  
  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks= tracks.filter( currentTrack=> currentTrack.id !== track.id);
    this.setState({playlistTracks:tracks});
  }

  render(){
  return(
    <div>
       <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/> 
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults}
                       onAdd = {this.addTrack}/> 
        <Playlist playListName= {this.setState.playlistName}
                  playlistTracks= {this.state.playlistTracks}
                  onRemove = {this.removeTrack}/> 
        </div>
      </div>
   </div>
  )
  }
}


export default App;
