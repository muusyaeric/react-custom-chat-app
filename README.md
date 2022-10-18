# About the Project

![Screenshot](/client/src/image/Chat1.PNG?raw=true)
This project was bootstrapped with [Create React App].\
A  custom room chat application created using React and socket.io\
It does not save any information (Page refresh causes the texts to disappear)

## Installation

1. Clone the repository
2. Change directory to the client folder and Install npm package\
    npm install
3. Run **npm start** to start the development server on port 3000.
4. Change directory to the server folder and Install npm package\
    npm install
5. Run **npm start** to start the express server(the port is specified in the code. This project uses port 3001 as default.).

## Usage

Enter a username and a room number.\
The second/other user(s) should enter the same room number as yours for your to be in the same party.\
Only members on the same party can chat with each other.\
*On page refresh all the texts will disappear.*
