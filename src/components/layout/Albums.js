import React from 'react';
import axios from 'axios';
import { Container, Columns, Column } from 'bloomer';

class Albums extends React.Component {
    albums = [];

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
        artist: 'Ween',
        album: 'Quebec'
      },
      {
        artist: 'The Rolling Stones',
        album: 'Exile On Main Street'
      },
      {
        artist: 'Neil Young',
        album: 'Everybody Knows This is Nowhere'
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
        artist: 'Smashing Pumpkins',
        album: 'Siamese Dream'
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
        artist: 'Cream',
        album: 'Disraeli Gears'
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
        artist: 'My Bloody Valentine',
        album: 'Loveless'
      },
      {
        artist: 'Miles Davis',
        album: 'Bitches Brew'
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
      artist: 'Frank Zappa',
      album: 'The Grand Wazoo'
    }
    ];

    this.state = {
      imageUrls: []
    }
  }

  componentDidMount() {
    axios.all(this.albums.map(u => axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=dc82d31afa4988b1d476e4c936f45bdd&artist=${u.artist}&album=${u.album}&format=json`)))
      .then(axios.spread((...data) => {
        // console.log('state: ', this.state);
        const imageUrls = this.storeAlbumImages(data);
        this.setState({ imageUrls: imageUrls });
      }))
      .catch((error) => {
         console.log(error);
      });
  }

  storeAlbumImages(data) {
    // process image url in each response and return it
    let imageUrls = data.map(u => u.data.album.image[1]);
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
     const { imageUrls } = this.state;

     return (
       <div>
        <Container className="paddingTlg">
          <p>More about me:</p>
          <br/>
          <b>Favorite Albums</b>
          <Columns>
          <Column isPaddingless="true">
            {imageUrls.map(url => (
                <img className="album" key={url["#text"]} src={url["#text"]} />
            ))}
            </Column>
          </Columns>
        </Container>
       </div>
     )
   }
 }

export default Albums;
