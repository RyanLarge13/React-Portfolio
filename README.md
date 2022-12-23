# React Portfolio
**This is a React project built with Framer Motion
as an animation library and logic which request data from
the web applications personal API via axios.**

## Overview 
This is my Portfolio website created for employers to view
important skills and traits revolving around my coding knowledge.
The application is a true **SPA**. Using React hooks *useState* and *useEffect* this Single Page Application
is meant to be simple accessibile, and informational.

## Backend
1. Axios 
   - For dynamic data and purposes involving skill development, displaying
backend knowledge, state management & React, axios fetches my ***projects*** and ***blog*** data
from a [Node.js/Express server](https://github.com/RyanLarge13/React-Portfolio-Server) created specifically for this application.
click the link to view the code.

## Frontend
1. Framer Motion
   - Using inline props components and elements are
animated with Framer Motion. The styling and animations are
light & simple.

2. useState & useEffect
   - useState is implemented for each and every view in this project
there is only one page.
      - Cons
         - When viewing blogs a user might be tempted to use the back space
and exit the application
      - Pros
         - Extremely fast website rendering
   - useEffect is used lightly. Only to first fetch data when the
state of the application has changed

## Installation & Execution
***This application was not created for the purpose of sharing code
and pull requests.***

3. Form Validation
   - Basic form validation is implimented on the client 
via my own logic system. Additional server side validation techniques
are taken for furthur security. 

## My Portfolio
In this portfolio, two major values of state for viewing
different sections are held, Enterprise and Developer. 
   - Enterprise
      * This sections holds some basic paragraphs exploring & explaining
my skills in Web Development and about myself. 

   - Developer
      - Projects
         * This section envelopes 4 nested state values via useState and useEffect. 
The use effect calls on and queries my projects from the server and MongoDB and displays each one
in the browser as a card with a short description, a title that links the project to its Webpage if
one exsists, and a link at the bottom to view each individual src code. 
         * A tag icon toggles the state for viewing a sperate card modal popup with a list of each technologies used
in the application
      - Blogs
         * This section consists of a paginated list 
of blogs I created that are a form a more in depth resume section 
containing more detailed information about my skill sets. 
         * A view button allows a user to blow up the blog article 
to full size via the useState hook and allow a user to easily read. 

## Conclusion
If there are any questions or to visit the site, please visit this site @ www.ryanlarge.dev and send an email.
