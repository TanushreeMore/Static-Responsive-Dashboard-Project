import React from 'react'
import './MainContainer.css'
import Banner from '../img/cover.jpg'
import CardMain from './CardMain'
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'
import card4 from '../img/card4.jpg'
import card5 from '../img/card5.jpg'
import card6 from '../img/card6.jpg'
import card7 from '../img/card7.jpg'
import card8 from '../img/card8.jpg'
import card9 from '../img/card9.jpg'
import MainRightTop from './MainRightTop'
import MainRightBottom from './MainRightBottom'


function MainContainer() {
const Card = {card1, card2, card3, card4, card5, card6, card7, card8, card9};

  return (
    <div className='mainContainer'>
        <div className="left">
            <div 
                className="banner"
                style={{ 
                    background: `url(${Banner})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="textContainer">
                    <h1>Visual Vision</h1>
                    <h2>Buy Art from 2,51,000 Artists</h2>
                    <p>Selling original art, paints & custom framing.</p>
                    <div className="bid">
                        <a href="#" className="button1">
                            Buy Now
                        </a>
                        <p>Ending In <span>2d:15h:20m</span></p>
                    </div>
                </div>
            </div>

            <div className="cards">
                <div className="filters">
                    <div className="popular">
                        <h2>Feed</h2>
                        <a href="#" className="button2">
                            Popular
                        </a>
                    </div>
                    <div className="filter_buttons">
                        <a href="#" className="button1">All</a>
                        <a href="#" className="button2">Illustration</a>
                        <a href="#" className="button2">Art</a>
                        <a href="#" className="button2">Games</a>
                    </div>
                </div>

                <main>
                    <CardMain imgSrc={card1} title={"Iron Man"} hearts={"65"} />
                    <CardMain imgSrc={card2} title={"Avengers: Endgame"} hearts={"40"} />
                    <CardMain imgSrc={card3} title={"The Fault in Our Stars"} hearts={"88"} />
                    <CardMain imgSrc={card4} title={"Incredibles 2"} hearts={"98"} />
                    <CardMain imgSrc={card5} title={"Naruto"} hearts={"205"} />
                    <CardMain imgSrc={card6} title={"Naruto: Shippuden"} hearts={"308"} />
                    <CardMain imgSrc={card7} title={"The Wolverine"} hearts={"26"} />
                    <CardMain imgSrc={card8} title={"Eragon"} hearts={"488"} />
                    <CardMain imgSrc={card9} title={"Early Bird"} hearts={"1853"} />
                </main>
            </div>
        </div>

        <div className="right">
                <MainRightTop/>
                <MainRightBottom/>
        </div>
    </div>
  )
}

export default MainContainer

// 1:49:18