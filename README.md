# Quark

![homepage](https://github.com/yccgabby/quark/blob/master/screenshots/Screen%20Shot%202020-05-22%20at%203.24.18%20AM.png)
<h3>A passion of mine is ethical, sustainable fashion through the art of thrifting.</h3> 

It helps me find vintage treasures, encourages spending less money on second-hand clothes, and helps the planet! 

However, the market lacks **an efficient thrifting platform** for mainstream visibility. The time-consuming process of searching through hundreds of clothes poses as a barrier to thrifting. Therefore, this is a solution to marry the humble beauty of thrift clothes and the power of technology. 

Meet **Quark**, a personalized thrifting platform aimed to bring together online consumers with physical thrifting stores!

* Armed with a Convolutional Neural Network and intelligent classification technology, this application allows thrift stores to simply upload pictures of their products in seconds, leaving the program to handle labelling and marketing. 
* At the same time, Quark users are met with the thousands of small online stores and physical in-person stores offering a variety of products, which are all filtered through the user's interests and previous purchasing habits. 

*Note: This project currently only serves as a clothing classification and color generator platform. More features to come!*

## Built with: 

* [React](https://reactjs.org/)
* [Tensorflow](https://www.tensorflow.org/)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [Bootstrap](https://getbootstrap.com/)
* [SQLAlchemy](https://www.sqlalchemy.org/)

In other words, it's a full-stack application designed in responsive (mobile-friendly) practices and lightweight server processing

![mobile](https://github.com/yccgabby/quark/blob/master/screenshots/mobile.png)

## Getting started 

To get a local copy up and running, follow these simple steps!

### Prerequisites

* [python3.6+](https://www.python.org/downloads/)
* [pip](https://pip.pypa.io/en/stable/installing/) 
* [npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repo
```
git clone https://github.com/yccgabby/quark.git
```
2. install all necessary packages 
```
pip install -r requirements.txt
cd frontend
npm install
```
3. run the backend (make sure you're in root project directory)
```
flask run
```
4. run the frontend
```
cd frontend
npm start
```

## Usage 

* Upload a picture of a piece of clothing to the *upload* tab of the app, and the program will 
  * try to classify the type of clothing it is based on a pre-trained Tensorflow CNN
  * generate a five-color palette that complements the article of clothing
 
![upload](https://github.com/yccgabby/quark/blob/master/screenshots/Screen%20Shot%202020-05-22%20at%203.27.31%20AM.png)
![upload2](https://github.com/yccgabby/quark/blob/master/screenshots/Screen%20Shot%202020-05-22%20at%203.27.58%20AM.png)

## Contact 

Gabby Chan - a current systems design engineering student at the University of Waterloo

Feel free to email me at g44chan @ uwaterloo dot ca 

Project link: http://github.com/yccgabby/quark.git
