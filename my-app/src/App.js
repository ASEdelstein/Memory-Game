import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Image from "./components/image";
import Img from "./components/img.json"

import Blue from "./images/Blue-Door.jpg"
import Budapest from "./images/Budapest-Door.jpg"
import Chinese from "./images/Chinese-Door.jpg"
import Green from "./images/Green-Door.jpg"
import India from "./images/India-Door.jpg"
import Irish from "./images/Irish-Door.jpg"
import Italian from "./images/Italian-Door.jpg"
import Light from "./images/Light-Door.jpg"
import Shire from "./images/Shire-Door.jpg"
import Tree from "./images/Tree-Door.jpg"
import Venetian from "./images/Venetian-Door.jpg"
import Viking from "./images/Viking-Door.jpg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click on a door to begin'
  };

  // Create an array that shuffles the options at random.
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }
  // Select image and begin score count
  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }
// img selection storage
  imgSwitch = (name) => {
    switch (name) {
      case "Blue-Door":
        return `${Blue}`
      case "Budapest-Door":
        return `${Budapest}`
      case "Chinese-Door":
        return `${Chinese}`
      case "Green-Door":
        return `${Green}`
      case "India-Door":
        return `${India}`
      case "Irish-Door":
        return `${Irish}`
      case "Italian-Door":
        return `${Italian}`
      case "Light-Door":
        return `${Light}`
      case "Shire-Door":
        return `${Shire}`
      case "Tree-Door":
        return `${Tree}`
      case "Venetian-Door":
        return `${Venetian}`
      case "Viking-Door":
        return `${Viking}`
      default:
        return `${Viking}`
    }
  }
  // shuffled area appear on main area of page and gameplay beginss
  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;