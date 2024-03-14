# Reddit Browser

Streamlined Reddit browsing experience for improved efficiency and enjoyment, built with React and Redux.

## Overview

* **Brief Description:** Experience Reddit like never before with this sleek single-page application built using React and Redux. Effortlessly navigate Reddit's homepage, search for your favorite posts and subreddits, delve into lively discussions on subreddit pages, and enjoy seamless viewing of all types of Reddit media – images, videos, and more. 
* **Features:**  The site offers post sorting, searching, and visual customization

## Features

### Sort posts according by "new", "hot" and "top"

This affects the order in whivhc the Reddit API sends the data to the Redux store. 

### Search

From any page, the user can search for post topics and subreddits. In order to do this, there is no need to 

### Customizability

This app offerres two different ways for users to change the appearance of the app:

#### Toggling between light and dark mode

The app begins in light mode, but there is a dark mode available if the user prefers it.

#### Toggling between different colors

THe default accent color of the app is blue, but if a user doesn't like that, they can change it to red, green, yellow, or back to blue if they have come to their senses.

## Technologies Used

* **Frontend:** 
    * HTML and JSX
    * CSS and CSS-IN-JS
    * JavaScript, React, Redux
* **Backend:**
    * Page is deployed with netlify, everything else is on the front end
    * Database is acessed via the Reddit API
* **Other tools/libraries** Git, Github, VSCode

## Project Structure

* The project is built with React, so it is organized into components. The components are separated according to whether they are a container component or a presentation component. The CSS files are centralized in App.css

## Deployment

* **Instructions:** This website can be deployed using netlify's deployment service for React

## Acknowledgments

* This was a keystone project in a programming course I took. It would also not be possible without the reddit API.
