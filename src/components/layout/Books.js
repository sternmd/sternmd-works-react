import React from 'react';
import axios from 'axios';
import { Container, Columns, Column } from 'bloomer';

class Books extends React.Component {
    constructor(props) {
    super(props);
    this.books = [
      {
        title: 'Mans Search for Meaning',
        isbn: '9780807014295'
      },
      {
        title: 'Invisible Man',
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
        isbn: '9780224060882'
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
      {
        title: 'Blue Highways',
        isbn: '9780316218542'
      },
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
        isbn: '9780140186420'
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
    let self = this;
    const api_key = process.env.REACT_APP_BOOKS_API_KEY;

    axios.all(this.books.map(u => axios.get(`https://www.googleapis.com/books/v1/volumes?key=${api_key}&q=isbn:${u.isbn}`)))
      .then(axios.spread((...data) => {
        const imageUrls = this.storeBookImages(data);
        self.setState({ imageUrls: imageUrls });
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
     const { imageUrls } = this.state;

     return (
       <div>
       <Container>
         <br/>
         <b>Favorite Novels</b>
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

export default Books;
