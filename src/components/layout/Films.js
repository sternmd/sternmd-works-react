import React from 'react';
import axios from 'axios';
import { Container, Columns, Column } from 'bloomer';

class Films extends React.Component {
    constructor(props) {
    super(props);
    this.films = [
      {
        title: 'Big Lebowski',
        id: '9780807014295'
      },
      {
        title: 'The Warriors',
        id: '9780679732761'
      },
      {
        title: 'Taxi Driver',
        id: '031242759X'
      },
      {
        title: 'My Neighbor Totoro',
        id: '0375714723'
      },
      {
        title: 'City of God',
        id: '9780224060882'
      },
      {
        title: 'The Last Waltz',
        id: '9780224060882'
      },
      {
        title: 'Dazed and Confused',
        id: '9781590308493'
      },
      {
        title: 'Blue Velvet',
        id: '9781891830198'
      },
      {
        title: 'Life Aquatic',
        id: '9780811205467'
      },
      {
        title: 'Motorcycle Diaries',
        id: '0679725164'
      },
      {
        title: 'City of God',
        id: '9780316218542'
      },
      {
        title: 'Paris, Texas',
        id: '0679725164'
      },
      {
        title: 'Apocalypse Now',
        id: '0679725164'
      },
      {
        title: 'Slacker',
        id: '0679725164'
      },
      {
        title: 'Waking Life',
        id: '0679725164'
      },
      {
        title: 'Sans Soleil',
        id: '0679725164'
      },
      {
        title: 'Easy Rider',
        id: '0679725164'
      },
      {
        title: 'Lost in Translation',
        id: '0679725164'
      },
      {
        title: 'Y Tu Mama Tambien',
        id: '0679725164'
      },
    ];

    this.state = {
      imageUrls: []
    }
  }

  componentDidMount() {
    let self = this;
    const api_key = process.env.REACT_APP_OMDB_API_KEY;

    axios.all(this.films.map(u => axios.get(`https://img.omdbapi.com/?i=${u.id}&h=300&apikey=${api_key}`)))
      .then(axios.spread((...data) => {
        const imageUrls = this.storeFilmImages(data);
        self.setState({ imageUrls: imageUrls });
      }))
      .catch((error) => {
         console.log(error);
      });
  }

  storeFilmImages(data) {
    // process image url in each response and return it
    let imageUrls = data.map(u => u);
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
       <Container>
         <br/>
         <b>Favorite Films</b>
         <Columns>
         <Column isPaddingless="true">
           {imageUrls.map(url => (
             <img className="book" key={url} src={url} alt="" />
           ))}
           </Column>
         </Columns>
       </Container>
       </div>
     )
   }
}

export default Films;
