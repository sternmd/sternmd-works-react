import React from 'react';
import axios from 'axios';
import { Container, Columns, Column } from 'bloomer';
import Spinner from './Spinner';

class Albums extends React.Component {
    constructor(props) {
    super(props);
    this.albums = [
      {
        artist: 'The Band',
        album: 'Music From Big Pink'
      },
      {
        artist: 'Bibio',
        album: 'Fi'
      },
      {
        artist: 'The Who',
        album: 'Whos Next'
      },
      {
        artist: 'Grateful Dead',
        album: 'Workingmans Dead'
      },
      {
        artist: 'Talking Heads',
        album: 'Fear of Music'
      },
      {
        artist: 'Autechre',
        album: 'Amber'
      },
      {
        artist: 'Sublime',
        album: 'Sublime'
      },
      {
        artist: 'Burial',
        album: 'Untrue'
      },
      {
        artist: 'Four Tet',
        album: 'Pause'
      },
      {
        artist: 'GAS',
        album: 'Pop'
      },
      {
        artist: 'Air',
        album: 'Moon Safari'
      },
      {
        artist: 'Boards of Canada',
        album: 'Music Has the Right to Children'
      },
      {
        artist: 'Bob Dylan',
        album: 'Blood On The Tracks'
      },
      {
        artist: 'Pink Floyd',
        album: 'Meddle'
      },
      {
        artist: 'Easy Star All-Stars',
        album: 'Dubside of the Moon'
      },
      {
        artist: 'The Flaming Lips',
        album: 'Soft Bulletin'
      },
      {
        artist: 'Audion',
        album: 'Suckfish'
      },
      {
        artist: 'The Rolling Stones',
        album: 'Exile On Main Street'
      },
      {
        artist: 'Grateful Dead',
        album: 'In The Dark'
      },
      {
        artist: 'Grateful Dead',
        album: 'Europe 72'
      },
      {
        artist: 'Deepchord',
        album: 'Vantage Isle Sessions'
      },
      {
        artist: 'Ricardo Villalobos',
        album: 'Vasco'
      },
      {
        artist: 'Ricardo Villalobos',
        album: 'Alcachofa'
      },
      {
        artist: 'The Smashing Pumpkins',
        album: 'Gish'
      },
      {
        artist: 'Gorillaz',
        album: 'Gorillaz'
      },
      {
        artist: 'Gorillaz',
        album: 'Laika Come Home'
      },
      {
        artist: 'Jimi Hendrix',
        album: 'Axis Bold As Love'
      },
      {
        artist: 'Derek and the Dominos',
        album: 'Layla And Other Assorted Love Songs'
      },
      {
        artist: 'Thee Oh Sees',
        album: 'Thee Hounds of Foggy Notion'
      },
      {
        artist: 'Massive Attack',
        album: 'Mezzanine'
      },
      {
        artist: 'Portishead',
        album: 'Dummy'
      },
      {
        artist: 'Jefferson Airplane',
        album: 'Surrealistic Pillow'
      },
      {
        artist: 'Brian Eno',
        album: 'Music For Airports'
      },
      {
        artist: 'The Who',
        album: 'Quadrophenia'
      },
      {
        artist: 'Mad Professor and Jah Shaka',
        album: 'New Decade of Dub'
      },
      {
        artist: 'Jan Jelinek',
        album: 'Loop Finding Jazz Records'
      },
      {
        artist: 'The Rolling Stones',
        album: 'Sticky Fingers'
      },
      {
        artist: 'David Bowie',
        album: 'Low'
      },
      {
        artist: 'Bone Thugs-N-Harmony',
        album: 'E. 1999 Eternal'
      },
      {
        artist: 'The Byrds',
        album: 'Notorious Byrd Brothers'
      },
      {
        artist: 'The Upsetters',
        album: 'Super Ape'
      },
      {
        artist: 'Boards of Canada',
        album: 'Geogaddi'
      },
      {
        artist: 'Neil Young',
        album: 'On The Beach'
      },
      {
        artist: 'Metallica',
        album: '...And Justice For All'
      },
      {
        artist: 'The Velvet Underground',
        album: 'The Velvet Underground'
      },
      {
        artist: 'Phish',
        album: 'Billy Breathes'
      },
      {
        artist: 'Ween',
        album: 'White Pepper'
      },
      {
        artist: 'Aphex Twin',
        album: 'Selected Ambient Works'
      },
      {
        artist: 'Frank Zappa',
        album: 'The Grand Wazoo'
      },
      {
        artist: 'Dr. John',
        album: 'Gris-Gris'
      }
    ];

    this.state = {
      imageUrls: [],
      loading: false
    }
  }

  componentDidMount() {
    const api_key = process.env.REACT_APP_LASTFM_API_KEY;
    this.setState({ loading: true });

    axios.all(this.albums.map(u => axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${api_key}&artist=${u.artist}&album=${u.album}&format=json`)))
      .then(axios.spread((...data) => {
        // console.log('state: ', this.state);
        const imageUrls = this.storeAlbumImages(data);
        this.setState({
            imageUrls: imageUrls,
            loading: false
         });
      }))
      .catch((error) => {
         console.log(error);
      });
  }

  storeAlbumImages(data) {
    // process image url in each response and return it
    let imageUrls = data.map(u => u.data.album.image[2]);
    this.shuffleArray(imageUrls);
    return imageUrls;
  }

  shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

  render() {
     const { imageUrls, loading } = this.state;

     return (
       <div>
        <Container>
          <p>More about me:</p>
          <br/>
          <b>Favorite Albums</b>
          <Columns>
          <Column isPaddingless="true">
            {loading ? <Spinner /> : imageUrls.map(url => (
                <img className="album" key={url["#text"]} src={url["#text"]} alt="" />
            ))}
            </Column>
          </Columns>
        </Container>
       </div>
     )
   }
 }

export default Albums;
