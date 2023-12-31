# fullstack-task-vidyalai

##  Task Description:
You are tasked to develop a web application that allows users to upload a PDF file and extract certain pages from the PDF to create a new PDF. The user should be able to select which pages they want to include in the new PDF.

##  Frontend (Any React framework):
Implement a simple form to upload a PDF file. The form should include validation to ensure that only PDF files are uploaded.
Once the file is uploaded, display a visual representation of all pages in the PDF.
Allow users to select which pages they want to extract from the original PDF. This can be achieved through checkboxes or a similar UI element associated with each page.
Include a button or functionality to create the new PDF based on the selected pages. Once completed, offer a download link to the user for the newly created PDF.
All pages should be responsive and should work from mobile devices.


##  Backend (Any Node.js framework):
Create a REST API to handle the upload of the PDF file and store it on the server.
Create a REST API to retrieve the stored PDF file for display.
Implement a REST API to extract the selected pages from the original PDF and create a new PDF. You can use any PDF library to achieve this in the Node.js framework you use.
Ensure all APIs work correctly and handle potential errors.


##  Bonus:
Add frontend and backend tests.
Add a live hosted version of the app
Implement user authentication so that each user can have their own set of PDF files.
Allow the user to rearrange the order of selected pages in the new PDF.


##  Submission:
Submit your work by filling this form with a link to your repository.
Add clear instructions on how to run your code in the README
Add screenshots of various states of your app


##  Evaluation:
Correctness: Does the application work as expected?
Code Quality: Is the code well-organized, commented, and easy to understand?
User Experience: Is the application easy to use and intuitive?
Error Handling: How does the application handle potential errors?
Documentation: Is the code and the setup process well-documented?









# PDF Extractor

Developed a web application that allows users to upload a PDF file and extract certain pages from the PDF to create a new PDF.


## Tech Stack

**Client:** React, Material UI

**Server:** Node, Express , MongoDB


## Features

- Users can Upload & save their pdf files
- Firebase Authentication
- Users can extract pages they need  and download the new pdf file


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### Client side env

`VITE_BACKEND_URL`

`VITE_FIREBASE_API_KEY`

#### Server side env

`MONGODB_URI`

`JWT_KEY`

`PORT`

## Run Locally

Clone the project

```bash
  https://github.com/Mo-him/fullstack-task-vidyalai
```

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
Go to the server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index
```



