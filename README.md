# 🔗 URL Shortly Web App

## 📌 Overview

This project is a simple **URL shortening web application** inspired by the Shortly design.
It allows users to input a long URL, generate a shortened version using an API, and copy the result بسهولة.


## 🚀 Features

* Shorten any valid URL
* Display shortened links instantly
* Copy shortened links to clipboard
* Error handling for empty input
* Clean and responsive UI


## 🛠️ Technologies Used

* **HTML** – Structure of the page
* **CSS** – Styling and layout
* **JavaScript** – Functionality and API handling


## ⚙️ How It Works

1. User enters a URL in the input field
2. When the **"Shorten It!"** button is clicked:

   * JavaScript validates the input
   * Sends a request to the API
3. The API returns a shortened link
4. The result is displayed below the input
5. User can click **Copy** to copy the link


## 🧠 My Approach

* I started by creating a simple HTML structure for the input and result section
* Then styled it using CSS to match the design
* Implemented JavaScript to:

  * Handle user input
  * Call the API using `fetch()`
  * Dynamically display results
* Added a copy-to-clipboard feature using `navigator.clipboard`
* Included basic error handling for better user experience



## 📱 Responsiveness

The layout adjusts for smaller screens using CSS media queries:

* Input and button stack vertically on mobile
* Link cards adjust to column layout


## ⚠️ Challenges

* Handling API errors properly
* Updating UI dynamically without reloading
* Managing multiple shortened links



## 📂 Project Structure

/project-folder
index.html
style.css
script.js


## ✅ Future Improvements

* Add loading spinner while fetching API
* Store links using localStorage
* Add delete/remove link feature
* Improve UI animations


## 🙌 Conclusion

This project demonstrates how to:

* Work with APIs in JavaScript
* Manipulate the DOM dynamically
* Build a clean and interactive UI


## 📎 Author name
Francisca Odoemelam 

