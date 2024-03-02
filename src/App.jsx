import React from 'react'
import './index.css'
import film_iconsvg from './images/film_icon.svg'
import intro_bgpng from './images/intro_bg.png'
import film1png from './images/film1.png'
import playsvg from './images/play.svg'
import film2png from './images/film2.png'
import film3png from './images/film3.png'
import film4png from './images/film4.png'
import widowpng from './images/widow.png'
import rectanglepng from './images/rectangle.png'
import collect1png from './images/collect1.png'
import collect2png from './images/collect2.png'
import collect3png from './images/collect3.png'
import series1png from './images/series1.png'
import series2png from './images/series2.png'
import series3png from './images/series3.png'
import series4png from './images/series4.png'
import series5png from './images/series5.png'
import series6png from './images/series6.png'
import videomp4 from './video/video.mp4'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const films = [
  {
    id: 1,
    image: film1png,
    playic: playsvg,
    timee: "2:14:33",
    title: "Black Panther",
    text: "At first glance, you can decide that Wakanda is an ordinary territory of wild Africa, but this is not so. Here, in the bowels of the desert lands, there are hidden deposits of a unique metal capable of absorbing...",
  },
  {
    id: 2,
    image: film2png,
    playic: playsvg,
    timee: "2:32:13",
    title: "The Dark Knight",
    text: "Batman raises stakes in the war on crime. With the help of Lieutenant Jim Gordon and Attorney Harvey Dent, he intends to clear the streets of crime that is poisoning the city. The cooperation is effective, but soon they...",
  },
  {
    id: 3,
    image: film3png,
    playic: playsvg,
    timee: "1:53:45",
    title: "The Gentlemen",
    text: "One cunning American, from his student years, had been selling drugs, and now he came up with a scheme of illegal enrichment using the estates of an impoverished English aristocracy and made a very good fortune on ...",
  },
  {
    id: 4,
    image: film4png,
    playic: playsvg,
    timee: "2:58:20",
    title: "The Lord of the...",
    text: "Tales of Middle-earth is a chronicle of the Great War for the Ring, a war that lasted more than one thousand years. The one who owned the Ring received power over all living creatures, but was obliged to serve evil...",
  },
]

const collection = [
  {
    id: 1,
    image: collect1png,
    imgrectan: rectanglepng,
    imgplay: playsvg,
    title: "All Marvel Films",
  },
  {
    id: 2,
    image: collect2png,
    imgrectan: rectanglepng,
    imgplay: playsvg,
    title: "Fast and the Furious",
  },
  {
    id: 3,
    image: collect3png,
    imgrectan: rectanglepng,
    imgplay: playsvg,
    title: "Star Wars",
  },
]

const series = [
  {
    id:1,
    image: series2png,
    imgplay: playsvg,
    title: "Wanda Vision",
  },
  {
    id:2,
    image: series3png,
    imgplay: playsvg,
    title: "The Flash",
  },
  {
    id:3,
    image: series4png,
    imgplay: playsvg,
    title: "The Great",
  },
  {
    id:4,
    image: series5png,
    imgplay: playsvg,
    title: "GOTHAM",
  },
  {
    id:5,
    image: series6png,
    imgplay: playsvg,
    title: "The witcher",
  },
]


function App() {
  return (
    <div>
      <header class="header">
        <div class="header__top">
          <img src={film_iconsvg} alt="film icon" />
          <p>See no special offer restrictions</p>
        </div>
        <Navbar />
      </header>
      <main>
        <section class="intro">
          <img src={intro_bgpng} alt="intro" class="intro__bg" />
          <div class="intro-content">
            <div class="container">
              <h1 class="intro__title">Kong: Skull Island</h1>
              <p class="intro__text">The film takes the viewer to the 70s of the last century. The protagonist organizes an expedition to the Skull island, always covered in fog, on which King Kong was once caught to find the missing brother and some mysterious substance. During...</p>
              <div class="intro__button">
                <button class="watch__btn">Watch Now</button>
                <button class="intro__load">Download</button>
              </div>
            </div>
          </div>
        </section>
        <section class="films">
          <div class="container">
            <h2 class="section__title">films</h2>
            <div class="films__content">

              {
                films.map((item) => {
                  return <div class="films__box">
                    <img src={item.image} alt="Black Panther" class="films__bg" />
                    <div class="films__info">
                      <img src={item.playic} alt="play" class="films__icon" />
                      <div class="films__time">{item.timee}</div>
                      <p class="films__title">{item.title}</p>
                      <p class="films__text">{item.text}</p>
                    </div>
                  </div>

                })
              }

            </div>
          </div>
        </section>
        <section class="widow">
          <video src={videomp4} class="widow__bg" autoplay muted></video>
          <div class="widow__content">
            <div class="container">
              <img src={widowpng} alt="" class="widow__image" />
              <p class="widow__text">After the events at the Leipzig-Halle airport, Natasha was overtaken by the mistakes of the past. The Red Room again made itself felt - a program to create Widows - professional killers and spies - just like her. Natasha decides once and for all to deal with people whose efforts she herself became a Widow.</p>
              <button class="watch__btn">Watch Now</button>
            </div>
          </div>
        </section>
        <section class="collect">
          <div class="container">
            <h2 class="section__title">Collections</h2>
            <div class="collect__content">
              {
                collection.map((item) => {
             return <div class="collect__box">
                <img src={item.image} alt="collections" class="collect__bg" />
                <div class="collect__info">
                  <img src={item.imgrectan} alt="rectangle" class="collect__rectangle" />
                  <div class="collect__title">
                    <img src={item.imgplay} alt="play" class="collect__play" />
                    <p>{item.title}</p>
                  </div>
                  <img src={item.imgrectan} alt="rectangle" class="collect__rectangle" />
                </div>
              </div>
                })
              }
            </div>
          </div>
        </section>
        <section class="series">
          <div class="container">
            <h2 class="section__title">series</h2>
            <div class="series__content">
              <div class="series__box">
                <img src={series1png} alt="series" class="series__bg" />
                <div class="series__info">
                  <h3 class="series__title">Game of Thrones</h3>
                  <p class="series__text">The time of prosperity is drawing to a close, and the summer, which lasted almost a decade, is dying away. Around the center of power of the Seven Kingdoms, the Iron Throne, a conspiracy is ripening, and during this difficult time, the king decides to seek support from his youth friend Eddard Stark. In a world where everyone - from the king to the mercenary - is eager for power, intrigues and is ready to stick a knife in the back, there is ...</p>
                  <button class="watch__btn">Watch Now</button>
                </div>
              </div>
              {
                series.map((item) =>{
                 return               <div class="series__box">
                <img src={item.image} alt="series" class="series__bg" />
                <div class="series__info">
                  <img src={item.imgplay} alt="play" class="series__play" />
                  <h4 class="series__box-title">{item.title}</h4>
                </div>
              </div>
                })
              }
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App