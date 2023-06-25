# RPSLS

This site is to host a game called Rock Paper Scissors Lizard Spock. This game was made popular by the TV show 'Big Bang theory'.

I built it to demonstrate the abilities i have learned so far, and for course evaluation.

This is a multi page site with links to each page. It contains a Home, Game, and a How to Play page.

The site is responsive across different screen sizes.

https://seanorourke7.github.io/RPSLS/

![screenshot across differant device sizes](assets/images/readme/screenshotRPSLS.png)

---

## CONTENTS

- [User Experience](#user-experience-ux)

  - [User Stories](#user-stories)

- [Design](#design)

  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Wireframes](#wireframes)

- [Features](#features)

  - [General Features on Each Page](#general-features-on-each-page)
  - [Future Implementations](#future-implementations)
  - [Accessibility](#accessibility)

- [Technologies Used](#technologies-used)

  - [Languages Used](#languages-used)

  - [Deployment](#deployment)
    - [How to Fork](#how-to-fork)
    - [How to Clone](#how-to-clone)

- [Testing](#testing)

- [Credits](#credits)
  - [Code Used](#code-used)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### User Stories

First time visitors will be greeted by a clean homepage with clear information.

The header has the name of the game and in the centre are two buttons. 'How to Play' and 'Play Game'.

Both buttons react on hover to invite ineraction.

The 'How to Play' page has a video embedded that explains the rules of the game. Underneath the video is a link "back to the game" which redirects the user to the game. The header links back to the homepage.

The Game page is laid out in an intuitive way with five buttons representing the users choice and animated text inviting the user to 'Choose a Weapon'.

Once the user interacts with the game and 'Chooses a Weapon' the cpu will automatically generate a counter weapon. Both weapons are displayed side by side above the buttons. An alert will let the user know if they have won, lost or drawn. This alert also explains the reason ie:"Rock crushes Scissors".

A score display will increment scores for the player and the CPU. This is located above the display area for the user and cpu choices.

The logo at the top of the page will react on hover and bring the user to the home page.

## Design

### Colour Scheme

The colour scheme is based on the background image of the orion nebula in keeping with the link to Spock/Star Trek.

It works well in this case as its dark colour allows for simple and easy to read font colors and helps the buttons to stand out with bright yellow colours.

### Typography

I've used Righteous font as it is easy to read while also retaining a sci-fi look.

This means I can use it across the site and keep the flow of the site intact.

![font type](/assets/images/readme/fontRPSLS.png)

### Imagery

Images used are a selection of hand poses to symbolise rock paper and scissors and cartoon images of a lizard and spock. I chose the images of the hands due to their strong graphic appearance and bright yellow background and then edited the lizard and spock images to have the same yellow colour to make them appear more as a set.

### Wireframes

I drew out a very simple wireframes with mockflow.
The structure changed as I went through the process of developing the game as I had originally intended on having only 1 page. It became quickly apparant that this wouldn't work stylistically so i spread it out to 3 pages. the core concept remained the same although I changed the layout of the buttons from the top to the bottom as it looked better on testing to have the display above the users input rahter than below.

![homepage wireframe](/assets/images/readme/wireframeRPSLS.png)

## Features

This site contains a home page with 2 buttons directing the user to the game or to instructions.

![Homepage destop](/assets/images/readme/desktopHome.png)

![Homepage mobile](/assets/images/readme/mobileHome.png)

A game page that hosts the game.

![Game destop](/assets/images/readme/desktopGame.png)

![Game mobile](/assets/images/readme/mobileGame.png)

A How to Play page with a video embedded that explains the rules.

![HowToPlay destop](/assets/images/readme/desktopHowtoplay.png)

![HowToPlay mobile](/assets/images/readme/mobileHowtoplay.png)

### General features on each page

There is a header that is consitant across the site and in the 'Game' and 'How to Play' pages it contains a link back to the home page.

![Header](/assets/images/readme/header.png)
![Header](/assets/images/readme/headerOnhover.png)

### Future Implementations

I would like to add some sounds that interact with the user to later versions.

### Accessibility

All images have aria labels with descriptive text.
The font and colour scheme work well and accessability on lighthouse is 100%.
![Lighthouse](/assets/images/readme/lighthouse.png)

## Technologies Used

Github - To save and store the files for the website.
Codeanywhere - to write the code.
Google Fonts - To import the fonts used on the website.
SweetAlerts2 - for the alert boxes. 
Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.
Tiny PNG To compress images.
Am I Responsive? To show the website image on a range of devices.

### Languages Used

HTML & CSS & JS.

### Deployment

Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

Log in (or sign up) to Github.
Find the repository for this project, RPSLS.
Click on the Settings link.
Click on the Pages link in the left hand side navigation bar.
In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
Click Save. Your live Github Pages site is now deployed at the URL shown.

#### How to Fork

How to Fork
To fork the RPSLS repository:

Log in (or sign up) to Github.
Go to the repository for this project, seanorourke7/RPSLS.
Click the Fork button in the top right corner.

#### How to Clone

How to Clone
To clone the RPSLS repository:

Log in (or sign up) to GitHub.
Go to the repository for this project, seanorourke7/RPSLS.
Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Testing was ongoing throughout the entire build. I utilised Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along.

The following feedback was raised during my mid project meeting with my mentor:

Bugs

When sizing down to mobile the 3 columns in the gallery were too small to see so I changed the media queries to 2 columns below 750px.
Initally the contact form was 10% from the left and this caused an issue with the flow of the page when viewed on mobile so i changed it to 1%.
The images initially would display fine on the live site but not in the working environment of codeanywhere. I had to change the address to all images so they would display on both.

When i first ran throught the W3C validator it found that I had one div that didn't have a closing tag. This was easily rectified.

No bugs were identified in HTML or CSS validators.

![Jigsaw](assets/images/readme/jigsaw-validator.png)

![W3C](assets/images/readme/w3c-validator.png)

![PageSpeed](assets/images/readme/pagespeed.png)

## Credits

Most of what I learned for this project came from the love-running project from code institute.
I have recieved help and feedback particularly around the thank you page from Graeme Taylor my mentor.

### Code Used

I re-used code from the love running project for the gallery styling.
#pictures {
clear: both;
line-height: 0;
column-count: 3;
column-gap: 0px;
}

### Content

The site was written by me and is entirely fictional.

###  Media

All images used are copyright free from www.pexels.com.

###  Acknowledgments

Graeme Taylor my mentor helped me a lot with this project and I got some feedback from Alan B. the cohort facilitator with code institute around the wording used in the header. Originaly it was "ABOUT" but I later changed it to "HOME".
The readme template was used from code insitute.
And the Slack community for this project is a great help for community discorse and feedback.

https://seanorourke7.github.io/rjphotography/

---
