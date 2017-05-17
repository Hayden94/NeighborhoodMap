# Neighborhood Map Project

![alt front](https://image.ibb.co/g27H35/Mbest.png)

This web app features a map of Miami, FL built with Google Maps API and Yelp Fusion API where users can view Miami's best restaurants. Relevant data can be viewed about each restaurant and the restaurants can be searched by various genres of food.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to get this project up and running, you will need to install three pieces of software.

This sofware needed includes Node.js and two of its packages, Express and Yelp Fusion.

The Node.js installer can be found [here](https://nodejs.org/en/download/)

Refer below to see how to install the required Node.js packages

## Install

First, download my project by cloning the git repository or by clicking 'clone or download' at the top of this page and the clicking 'Download ZIP'

![alt download](https://image.ibb.co/e3P8Ak/downloadz.png)

Second, the package installs require your operating system's native terminal to be running.

**On windows**

![alt windows](https://image.ibb.co/kRi1Vk/Wcmd.png)

Search for 'cmd' by taping on the windows icon on your taskbar and run Command Prompt

**On Mac**

![alt mac](http://blog.teamtreehouse.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-25-at-12.57.00-PM.png)

Open your applications folder, search for 'terminal' and run the application.

**On Linux**

![alt linux](http://techjobsacademy.com/images/Terminal_icon.png)

Depending on which distrobution of Linux you are running, the terminal can typically be found in the application directory named 'terminal'. Double click the application to run it.

Once the terminal is running change your directory to the neighbood map project like so:

```
cd /c/users/your/path/directory
```

### Express

To install Express run these commands:

Initialize the Node.js package manager.
```
npm init
```
Installs the Express pacakage
```
npm install express --save
```

### Yelp Fusion

To install Yelp Fusion clone or download the ZIP from:
```
https://github.com/Yelp/yelp-fusion.git
```

CD into the directory
```
cd yelp-fusion/fusion/node
```

Install the depenences:
```
npm install
```

## Deployment

In order to deploy, CD into the neighborhood map project and run the command:
```
node app.js
```

The app will now be running and can be viewed at:
```
http://localhost:8080/
```

## Built With

* [Node.js](https://nodejs.org/en/)
* [JavaScript](https://www.javascript.com/)
* [Google Maps API](https://developers.google.com/maps/)
* [Yelp Fusion API](https://www.yelp.com/developers)

## Authors

* **Hayden Oster** - *Initial work* - [Hayden](https://github.com/Hayden94)
