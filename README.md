# Real-Time User Log-In Feedback

### Made with AngularJS and angular-seed — the seed for AngularJS apps

This project:
- View 1: Assigns your name to a special code (based on your favorite number) and updates the Firebase with inforation
- View 2: In real-time, checks your log-in input and tells you if your name, special code, or both is off going into log-in

If both the name and secret code match, the view will say: "Your login is valid"
If the name matches a name in the database, but secret code does not match, the view will say: "Your secret code is invalid"
If the secret code matches a secret code in the database, but name does not match, the view will say: "Your name is not found"
If neither the secret code and name match, the view will say: "Your login is invalid"


## Getting Started

To get you started you can simply clone the Real-Time User Log-In repository and run: "npm install" in terminal

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

