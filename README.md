build a login form
build a backend with nodejs
auth the user id/ pass combination

1.  init react app
    npm create vite@latest

npx create-react-app my-app

https://vite.dev/guide/

2. cd my-app

3. install axios
   npm install axios

4. redux
   https://react-redux.js.org/introduction/getting-started
   npm install react-redux

5. add a user id / password form
   install tailwind
   https://tailwindcss.com/docs/guides/create-react-app
   npm install -D tailwindcss
   npx tailwindcss init

open index.css and remove all lines

then paste
@tailwind base;
@tailwind components;
@tailwind utilities;

Delete App.css
open App.js and remove the import App.css

remove all html code from App.js except the outermost div
Add "Hello WOrld" to page
check home page hs no css/ fields

install react router dom
npm install react-router-dom
open index.js
import { BrowserRouter } from 'react-router-dom';
add tag aound App
<BrowserRouter>
<App />
</BrowserRouter>

=====================///////////////////
Server
init node js
install express
init typsecript
cors error

===============================================================================
First Api - display all objects.

1. Step 1 - create an axios call get the response from end point
   1.1 use a hook to call endpoint.

2. Create a table to display the structure

[
{
"id": "1",
"name": "Google Pixel 6 Pro",
},
{
"id": "2",
"name": "Google Pixel 6 Pro",
},

]

Jan 23, 2025 3. Create a filter

put the value in state.
useEffect only for the search term.
update sceen using array filter.

add a input text box

Jan 29
https://www.developerway.com/posts/debouncing-in-react

https://www.developerway.com/posts/debouncing-in-react

Feb 20,
DONE
https://www.w3schools.com/react/react_usecontext.aspf43 43. What is context API?
https://www.geeksforgeeks.org/react-interview-questions/

Object constructors in React.

> > > > > > > > > > > > > > > > > > > > > > > > > > > > >

March 4
USe Spinner as HOC
