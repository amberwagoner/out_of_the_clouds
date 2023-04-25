# out of the clouds

## Holberton Tulsa's Hacksprint Project for Cohort 19
- Team Name: Project 333
- Team Members: Kat Keas, Amber Wagoner, Allie Tatum

## Project Scope

### Idea
*out of the clouds* is a phrase decorder game where the user solves an encrypted message, which causes one of the clouds in the sky to disappear. All the phrases are positive messages, which will help the user achieve a deeper sense of calm after playing the game.

### Languages and Tools
- JavaScript
- HTML
- CSS
- Google Drive

### Purpose of our MVP
- The purpose of our minimal viable project (MVP) is to help people who are feeling overwhelmed and need to get their head out of the clouds and find a sense of calm in the present moment.
- *out of the clouds* is meant to be a quick-use game so that users can relax faster.
- Users are greeted by a sky background with three clouds. They are given an encyrpted message to solve; we chose to use a [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

### Inspiration
- We wanted to address anxiety or stress that users are having at the moment by providing a simple game that could uplift the user's mood and distract them by having them solve an encrypted message.
- This idea was inspired by our experience at Holberton. In one word... stressful! We've all atruggled in some way with managing our stress while going through this program. The most important tool we have to calm ourselves down is to take quick breaks, and often. We thought it would be great to have a quick-use game where once the user decodes the encrypted positive message, a cloud disappears from the sky to reveal a brighter day.
- We started with three being our encryption key because Julius Caesar was said to use this number for encrypting his personal messages. We decided to keep with the three theme: we have three clouds in the sky, and all our phrases are three words long.
- 333 is an angel number: it encourages one to set plans into action and let personal strength be the guide. It reminds us to trust ourselves and put thought into our choices. We felt like this tied well into the purpose of our MVP, hence the Team Name Project 333.

### Design and Development Process
- We met up both virtually and in person. A brainstorming session took place that allowed us to get on the same page in terms of design and function, as well as create a game plan for implementing the project.
- We collaborated via Google Drive, as well as through Slack Huddles.

## Steps to Complete our MVP

1. Set up our HTML file
    1. Start by creating an HTML file that will contain our game
    2. Inside the `body` tag, add a `div` element to hold your game content
    3. Create an input field for the user to input their guess and a button for them to submit their guess
2. Set up our CSS file
    1. Create a CSS file that will style our HTML
    2. Set the background of our game to a sky with clouds
    3. Style our input field and button to match the theme of our game
3. Define our phrase and encryption algorithm
    1. Define the phrase we want the user to guess
    2. Encryption method: Caesar cipher
4. Write the JavaScript code
    1. Create a function that will encrypt our phrase using the algorithm we defined
    2. Write a function that will compare the user’s guess with the encrypted phrase and give feedback on whether they were correct or not
    3. Create a function that will update the game content to reflect the user’s progress
    4. Add an event listener to the submit button that will call the function to check the user’s guess when they click it
5. Add animation *if we have time*
    1. Write a function that will animate the clouds disappearing as the user solves the phrase
    2. Call the function when the user guesses a correct letter in the phrase
6. Test our game
    1. Test to make sure it works as expected
    2. Try different phrases (and encryption algorithms if we have time) to make sure the game is flexible

### Challenges
- Getting our encoded phrase to appear when we load `index.html` has been our biggest challenge.
- We need a functional web server.
- We learned the importance of having a "Day Zero" to brainstorm and plan.