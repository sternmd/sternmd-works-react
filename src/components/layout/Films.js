import React from 'react';
import { Container, Columns, Column } from 'bloomer';

class Films extends React.Component {
    constructor(props) {
    super(props);
    this.films = [
      {
        title: 'Big Lebowski',
        id: 'tt0118715'
      },
      {
        title: 'Taxi Driver',
        id: 'tt0075314'
      },
      {
        title: 'My Neighbor Totoro',
        id: 'tt0096283'
      },
      {
        title: 'City of God',
        id: 'tt0317248'
      },
      {
        title: 'The Last Waltz',
        id: 'tt0077838'
      },
      {
        title: 'Dazed and Confused',
        id: 'tt0106677'
      },
      {
        title: 'Blue Velvet',
        id: 'tt0090756'
      },
      {
        title: 'Life Aquatic',
        id: 'tt0362270'
      },
      {
        title: 'Motorcycle Diaries',
        id: 'tt0318462'
      },
      {
        title: 'Paris, Texas',
        id: 'tt0087884'
      },
      {
        title: 'Apocalypse Now',
        id: 'tt0078788'
      },
      {
        title: 'Slacker',
        id: 'tt0102943'
      },
      {
        title: 'Waking Life',
        id: 'tt0243017'
      },
      {
        title: 'Sans Soleil',
        id: 'tt0084628'
      },
      {
        title: 'Koyaanisqatsi',
        id: 'tt0085809'
      },
      {
        title: 'Easy Rider',
        id: 'tt0064276'
      },
      {
        title: 'Lost in Translation',
        id: 'tt0335266'
      },
      {
        title: 'Y Tu Mama Tambien',
        id: 'tt0245574'
      },
      {
        title: 'Y Tu Mama Tambien',
        id: 'tt1474276'
      },
      {
        title: 'Fargo',
        id: 'tt0116282'
      }
    ];

    this.state = {
      imageUrls: []
    }
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
     const api_key = process.env.REACT_APP_OMDB_API_KEY;

     return (
       <div>
       <Container>
         <br/>
         <b>Favorite Films</b>
         <Columns>
          <Column isPaddingless="true">
            {this.films.map(url => (
              <img className="film" key={url.id} src={`https://img.omdbapi.com/?i=${url.id}&h=400&apikey=${api_key}`} alt="" />
            ))}
           </Column>
         </Columns>
       </Container>
       </div>
     )
   }
}

export default Films;
