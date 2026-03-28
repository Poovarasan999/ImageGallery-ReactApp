import React from "react";
import ImageCard from "./ImageCard";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";
import img18 from "../assets/18.jpg";
import img19 from "../assets/19.jpg";
import img20 from "../assets/20.jpg";
import img21 from "../assets/21.jpg";
import img22 from "../assets/22.jpg";
import img23 from "../assets/23.jpg";
import img24 from "../assets/24.jpg";

const SAMPLE_IMAGES = [
  { id: 1, title: "Julie's Rabbit Ears", image: img1 },
  { id: 2, title: "The Innocent Look", image: img2 },
  { id: 3, title: "Big Eyed Buggy", image: img3 },
  { id: 4, title: "The Saint Doggo", image: img4 },
  { id: 5, title: "Sunshine Snoot", image: img5 },
  { id: 6, title: "Couch Potato Champion", image: img6 },
  { id: 7, title: "Park Sprint Mode", image: img7 },
  { id: 8, title: "Treat Radar Activated", image: img8 },
  { id: 9, title: "Naptime Professional", image: img9 },
  { id: 10, title: "Good Boy Energy", image: img10 },
  { id: 11, title: "Wiggle Tail Express", image: img11 },
  { id: 12, title: "Puddle Jumper", image: img12 },
  { id: 13, title: "Morning Stretch", image: img13 },
  { id: 14, title: "Window Watcher", image: img14 },
  { id: 15, title: "Sock Thief Suspect", image: img15 },
  { id: 16, title: "Belly Rub Please", image: img16 },
  { id: 17, title: "Zoomies Candidate", image: img17 },
  { id: 18, title: "Rainy Day Mood", image: img18 },
  { id: 19, title: "Snack Negotiator", image: img19 },
  { id: 20, title: "Blanket Burrito", image: img20 },
  { id: 21, title: "Doorbell Expert", image: img21 },
  { id: 22, title: "Forever Home Face", image: img22 },
  { id: 23, title: "Head Tilt Champion", image: img23 },
  { id: 24, title: "Ball Is Life", image: img24 },
];

function Gallery() {
  return (
    <div className="gallery">
      {SAMPLE_IMAGES.map((item) => (
        <ImageCard
          key={item.id}
          title={item.title}
          imageUrl={item.image}
        />
      ))}
    </div>
  );
}

export default Gallery;
