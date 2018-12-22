import React from 'react';
import axios from 'axios';
// import { Container, Columns, Column } from 'bloomer';

class Books extends React.Component {
    // books = [];
    constructor(props) {
    super(props);
    this.books = [
      {
        title: 'Mans Search for Meaning',
        isbn: '9780807014295'
      },
      {
        title: 'Inivisible Man',
        isbn: '9780679732761'
      },
      {
        title: 'Electric Koolaid Acid Test',
        isbn: '031242759X'
      },
      {
        title: 'Black Hole',
        isbn: '0375714723'
      },
      {
        title: 'Ghost World',
        isbn: '1560974273'
      },
      {
        title: 'Zen Mind',
        isbn: '9781590308493'
      },
      {
        title: 'Box Office Poison',
        isbn: '9781891830198'
      },
      {
        title: 'Turtle Island',
        isbn: '9780811205467'
      },
      {
        title: 'No Exit',
        isbn: '0679725164'
      },
      // {
      //   title: 'Blue Highways',
      //   isbn: '0449211096'
      // },
      {
        title: 'The Stranger',
        isbn: '9780679720201'
      },
      {
        title: 'White Noise',
        isbn: '9780143129554'
      },
      {
        title: 'The Dharma Albums',
        isbn: '0140042520'
      },
      {
        title: 'Steppenwolf',
        isbn: '0312278675'
      },
      {
        title: 'Of Mice and Men',
        isbn: '0140177396'
      },
      {
        title: 'A Confederacy of Dunces',
        isbn: '9780802130204'
      }
    ];

    this.state = {
      imageUrls: []
    }
  }

  //

  componentDidMount() {
    axios.all(this.books.map(u => axios.get(`https://www.googleapis.com/books/v1/volumes?key=AIzaSyD5MPxz-v9bQ4s7cLw9B1d6BtCgabbG5XE&q=isbn:${u.isbn}`)))
      .then(axios.spread((...data) => {
        console.log('data: ', data);
        console.log('state: ', this.state);
        const imageUrls = this.storeBookImages(data);
        this.setState({ imageUrls: imageUrls });
      }))
      .catch((error) => {
         console.log(error);
      });
  }

  storeBookImages(data) {
    // process image url in each response and return it
    let imageUrls = data.map(u => u.data.items[0].volumeInfo.imageLinks.thumbnail);
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
     // const { imageUrls } = this.state;

     return (
       <div>

       </div>
     )
   }
}

export default Books;
