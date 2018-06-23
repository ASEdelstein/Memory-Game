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
    // message: "Click on a door to begin"
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
    console.log(name);
    switch (name) {
      case "Blue":
        return `${Blue}`
      case "Budapest":
        return `${Budapest}`
      case "Chinese":
        return `${Chinese}`
      case "Green":
        return `${Green}`
      case "India":
        return `${India}`
      case "Irish":
        return `${Irish}`
      case "Italian":
        return `${Italian}`
      case "Light":
        return `${Light}`
      case "Shire":
        return `${Shire}`
      case "Tree":
        return `${Tree}`
      case "Venetian":
        return `${Venetian}`
      case "Viking":
        return `${Viking}`
      default:
        return `${Venetian}`
    }
  }
  // shuffled area appear on main area of page and gameplay begins
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