# 🐶 React Image Gallery App

A responsive **Image Gallery Application** built using **React JS**.
This project showcases **Components, Props, and map() function** with a structured folder setup.

---

## 🚀 Repository Link

🔗 https://github.com/Poovarasan999/ImageGallery-ReactApp

---

## 📸 Features

* 🖼️ Image gallery with local assets
* 🔁 Dynamic rendering using `map()`
* 🧩 Reusable components
* 📂 Well-structured folders
* ⚡ Fast and simple UI

---

## 🛠️ Tech Stack

* React JS
* JavaScript (ES6)
* HTML5
* CSS3

---

## 📂 Project Structure

```id="1t7n6k"
src/
│── assets/
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── ...
│   └── 24.jpg
│
│── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Gallery.js
│   ├── ImageCard.js
│   └── About.js
│
│── App.js
│── index.js
│── style.css
```

---

## 🧠 Concepts Used

### 🔹 Components

Project split into reusable components:

* App → Main container
* Gallery → Displays image list
* ImageCard → Shows individual image
* Navbar & Footer → Layout components
* About → Additional page

---

### 🔹 Props

Props are used to pass image data:

```js id="z2c7yx"
<ImageCard title={item.title} image={item.image} />
```

---

### 🔹 map() Function

Used to render images dynamically:

```js id="x9p3wq"
data.map((item) => (
  <ImageCard key={item.id} {...item} />
))
```

---

## ▶️ How to Run

```bash id="w3r2lp"
git clone https://github.com/Poovarasan999/ImageGallery-ReactApp.git
cd ImageGallery-ReactApp
npm install
npm start
```

👉 Runs at: http://localhost:3000

---

## 🌟 Future Improvements

* 🔍 Search filter
* 🖼️ Image modal popup
* 🌙 Dark mode
* 📱 Fully responsive

---

## 🙌 Author

👤 **Poovarasan**
🚀 Future Full Stack Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
