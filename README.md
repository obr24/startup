# RecipeBook

[My Notes](notes.md)

This web application gives a place where users can share recipes. Users also have the ability to like different recipes. Users can create an account to submit different recipes with a title and a URL to the recipe. An inspiration page is also included where users can view quotes from famous people.

> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch - A clear elevator pitch is included that explains the purpose of this web-app
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references. - An image was included that shows the basic design of the project.

### Elevator pitch

Are you getting bored of the same old recipes? Want to impress someone with your cooking skills, but don't know what to make? Enter RecipeBook, where you can view recipes shared by other cooks and bakers like yourself. Not sure if you will like a recipe? To get an idea of how good a recipe is you can see the number of likes other users have given other recipes in a list of all the recipes that have been submitted.

### Design

Here is the design of the frontend and the pages of the website.

![Design image](frontend-mockup.svg)

Here is a basic flowchart for the backend like system.

![Backend image](backend-mockup.svg)

### Key features

- User creation and login
- Submit recipe with title and URL
- View list of submitted recipes and number of likes
- Like other's submitted recipes
- Inspiration page with quote of the day

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Use HTML to structure the pages of the application. There will be four HTML pages: one for login, one for new recipes, one for viewing recipes, and one for the quote of the day.
- **CSS** - Styling that is functional and nice looking. Should add to the usability of the app on all screensizes.
- **Javascript/React** - Allows for login, recipe submission, viewing recipes.
- **Service** - Backend service will include endpoints for login, submision of recipes, retrieving recipes and retrieving quote of the day. Will make request to a quotes API for quote of the day.
- **DB/Login** - Stores user information; recipe title, url and submitter. Liking or submitting a recipe requires authentication.
- **WebSocket** - Likes of recipes are updated in real-time on the view recipes page.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://recipe-book.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I added 4 HTML pages: Login, Submit Recipe, View Recipe, Inspiration
- [x] **Proper HTML element usage** - I used all of the required HTML tags in the required way.
- [x] **Links** - I added a menu on the top of each page that allows the user to navigate between pages.
- [x] **Text** - I added the necessary text to give context for each area.
- [x] **3rd party API placeholder** - In the quote of the day page I added a sample quote as a placeholder for the information the quotes external API will return.
- [x] **Images** - I added an image on the quote of the day page to add cooking inspiration.
- [x] **Login placeholder** - I added a login page. I also created a username placeholder on each page to welcome the user.
- [x] **DB data placeholder** - I created a view recipes page with a few placeholders for the information the database will hold.
- [x] **WebSocket placeholder** - On the view recipes page the number of likes is a placeholder for the likes that will be updated in real-time with websockets.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I added styling for the header, footer and main body content.
- [x] **Navigation elements** - Added links between all pages.
- [x] **Responsive to window resizing** - Updated each page to work on screens of all sizes. The view recipes page responds by wrapping items around.
- [x] **Application elements** - All elements are updated to be readable.
- [x] **Application text content** - Used the same fonts across the board with appropriate padding and margins.
- [x] **Application images** - Replaced other image with quote svg and put it in a wrapper to pad it.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - Now bundled with vite.
- [x] **Components** - Now pages are componetized.
- [x] **Router** - Router added for web app components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - Everything is mocked out. User info and recipes are stored in localstorage.
- [x] **Hooks** - Used useState, useEffect and useContext to make everything have the same state across pages. useState was used to create the UserContext and store email address. useEffect was used to update the rendering of the recipes when there is any change. useContext was used to store the authentication state and recipes across multiple pages.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
