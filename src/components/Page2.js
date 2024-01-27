import React, { useState } from 'react'
import styles from '../styles/Page2.module.css'

const images = [
  { id: 'image1', src: 'https://i.pinimg.com/474x/25/20/a1/2520a1f175ac99087df0addfb82855d2.jpg', alt: 'City 1' },
  { id: 'image2', src: 'https://i.pinimg.com/474x/25/20/a1/2520a1f175ac99087df0addfb82855d2.jpg', alt: 'City 2' },
  { id: 'image3', src: 'https://i.pinimg.com/474x/25/20/a1/2520a1f175ac99087df0addfb82855d2.jpg', alt: 'City 3' },
  { id: 'image4', src: 'https://i.pinimg.com/474x/25/20/a1/2520a1f175ac99087df0addfb82855d2.jpg', alt: 'City 4' },
  { id: 'image5', src: 'https://i.pinimg.com/474x/25/20/a1/2520a1f175ac99087df0addfb82855d2.jpg', alt: 'City 5' },
  { id: 'image6', src: 'https://i.pinimg.com/474x/25/20/a1/2520a1f175ac99087df0addfb82855d2.jpg', alt: 'City 6' },
  { id: 'image7', src: 'https://i.pinimg.com/474x/25/20/a1/2520a1f175ac99087df0addfb82855d2.jpg', alt: 'City 7' },
  { id: 'image8', src: 'https://i.pinimg.com/474x/25/20/a1/2520a1f175ac99087df0addfb82855d2.jpg', alt: 'City 8' },
  { id: 'image9', src: 'https://i.pinimg.com/474x/25/20/a1/2520a1f175ac99087df0addfb82855d2.jpg', alt: 'City 9' },
  { id: 'image10', src: 'https://i.pinimg.com/474x/25/20/a1/2520a1f175ac99087df0addfb82855d2.jpg', alt: 'City 10' },
];

const ImageBox = ({ image }) => {
  return (
    <div className={styles.imageBox}>
      <img id={image.id} src={image.src} alt={image.alt} />
    </div>
  );
}

const Page2 = () => {

  const myStyle = {
    color: 'rgb(0, 0, 0)',
    fontSize: '1.5vw',
    fontWeight: 'lighter',
    marginLeft:'0.5vw',
    marginBottom:'20vw',
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showImages = (startIndex) => {
    setCurrentImageIndex(startIndex);
  }

  const imageElements = images.slice(currentImageIndex, currentImageIndex + 3).map((image) => (
    <ImageBox key={image.id} image={image} />
  ));

  return (
    <div className={styles.container}>
      <h1>Top Cities <br/>
        <span style={myStyle}>Some facts related to top most city here</span>
      </h1>
      <div className={styles.imageContainer}>
        {imageElements}
      </div>
      <div className={styles.buttonContainer}>
        <button id="previous" onClick={() => showImages(currentImageIndex - 3)}> <i class="ri-arrow-left-s-line"></i></button>
        
        <button id="next" onClick={() => showImages(currentImageIndex + 3)}><i class="ri-arrow-right-s-line"></i></button>
      </div>
    </div>
  )
}

export default Page2