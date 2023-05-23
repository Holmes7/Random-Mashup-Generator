# Random Mashup Generator

This app automates the mundane task of finding random set of problems with desired difficulty level which aren't yet solved by a particular group of users.

![Image](/images/generator.png)

Check it out [here](https://randommashupgenerator.netlify.app/)
 
[Codeforces Blog](https://codeforces.com/blog/entry/92696)

## Technologies

* TypeScript
* ReactJS
* Bulma CSS
* Vite, as an alternative to Create React App

## Where can I use this app

* If you want to host a coding contest in your university etc. you can use this app to get a set of random problems with the difficulty of your choice which no user has solved. You just need the codeforces usernames of all the participants.

* If you and your friends who want to practice by giving contests together. (This was my motivation to create the app)

* If you just want to practice some random problems that you haven't solved before. (Also helpful if you have multiple accounts lol. One of my friends uses it this way)

## Features

Other than the main problem that it solves, I have also implemented some side features.

* This app stores the usernames and problem ratings that you add as an input to the local storage of you browser so that the next time you visit you don't have to work as hard to add all of them back.

* The generated problem code is a clickable button which will copy the problem code to your clipboard.

* Some of the older problems of codeforces aren't that nice. Many don't even have an editorial. So I have also implemented an option to only find problems created after a certain time.

## Story

In my third year I joined a group to practice competitive programming. There, we used to compete in virtual contests. Before the contest, the admin manually searched for problems from Codeforces. This task took a lot of time, as he had to be sure that none of us had previously solved them. This process offended me and successively inspired me to solve this problem. I created a web app using React and TypeScript to automate the task.

## Bug / Feature Request
If you find a bug or have a feature request kindly open an issue [here](https://github.com/Holmes7/Random-Mashup-Generator/issues/new). Please be as elaborate as possible as that will help me a lot in finding the solution.

**If you liked my project, make me happy by giving it a star.**
