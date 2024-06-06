# HostelGenie ![HostelGenie Logo](https://snipboard.io/hUt8AM.jpg)
[Live Project - Click here](https://hostelgenie.netlify.app/)

Welcome to **HostelGenie**, a comprehensive hostel management application designed to simplify and streamline the management of hostel activities. Whether you're an admin or a student, HostelGenie offers a range of features to make hostel life easier and more organized.

## Features

### Login/Signup
- Secure user authentication for both admins and students.
- **Registration of New Students**: Easily register new students into the system.
- **Marking Attendance**: Track and record student attendance efficiently.
- **Handling Complaints**: Manage and resolve complaints raised by students.
- **Managing Mess**: Oversee mess operations, including meal plans and special requests.
- **Generating Invoices**: Generate and manage invoices for hostel fees and other charges.
- **Handling Suggestions**: Collect and address suggestions from students to improve hostel life.

### Student Panel
- **Viewing Attendance**: Check attendance records to stay updated.
- **Requesting Mess Off**: Request days off from the mess service.
- **Viewing Invoices**: Access and review generated invoices.
- **Making Complaints**: Submit complaints for any issues encountered in the hostel.
- **Making Suggestions**: Provide suggestions to help improve hostel services.

## Screenshots


*Landing Page*
![Admin Panel](https://snipboard.io/wVPLex.jpg)

*Login*
![Admin Panel](https://snipboard.io/hKrYyC.jpg)

*Admin Dashboard*
![Admin Panel](https://snipboard.io/Eln5Xs.jpg)

*Register Student*
![Admin Panel](https://snipboard.io/eq7jBs.jpg)

*Request Access Page*
![Admin Panel](https://snipboard.io/hbpn9f.jpg)

*Contact Us*
![Admin Panel](https://snipboard.io/n0JaTl.jpg)


## Getting Started

Follow these instructions to set up the HostelGenie project on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [React](https://react.dev/)
- [MoongoDb](https://www.mongodb.com/)
- [Express](https://expressjs.com/)

### Installation

**Clone the repository and install the dependencies.**
```sh
cd client
npm i
```
```sh
cd ../server
npm i
```

```sh
cd ../
npm i -g concurrently
```

## Setup DB
- Create a mongodb database named `hostel`
- Create collections and given names like for `hostel.users.json` --> `users` in mongoCollections
- Add data by importing file like `hostel.users.json`

## Usage

```sh
npm run dev
```

## Login Details
- AdminLogin
    - admin@gmail.com
    - Password: 123456789
- Login
    - anand@gmail.com
    - Password: 123456789

## Add .env file in backend folder with following content
```
MONGO_URI=<Your URI>
JWT_SECRET = <Your Key>
```































