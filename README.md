![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium Lab 

## Learning Goals

In this exercise, the goal is to understand and experiment around JSX - using both class and functional components. 

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

### Introduction
The task is to create a webpage which looks like the image below:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/lab-react-jsx.png)

### Steps to follow:
1. Clone this repository.
2. On your terminal go inside `lab-react-jsx-boilerplate` directory and use the following command:
   `npm install`
   This command install's all the packages to your system that this project is using.
3. Few lines of code is already written for you -- in the following files:
    1. `App.js` : In this file, you need to complete the task by using functional component. 
        In this file, `imageData` is a function which stores the an array of objects -> which contains two fields: id and image.
        **NOTE** note how images are being imported. 
        Your task is to complete the `App function` - and get an output as shown in the above image.
    
    2. `AppClass.js`: Before doing anything --> go to `index.js` file and check which component is being
        rendered. For now, `<App/>` is being rendered, we need to change this to `<AppClass/>`. Import this 
        component and render `AppClass`, so that any changes made in `AppClass` file, are displayed on the web now.
        Similar to 1st case, `imageData` is defined for you, you just need to complete the class component `AppClass` - and get an output as shown in the above image.

4. Once you are able to display the images on the browser, then you can style it in `App.css` file. If you
   observe, in both the files, `App.css` is the only style sheet which is being imported, so any styles added 
   to this file, will be reflected for both the cases.

Happy Coding Kalvium ❤️!
