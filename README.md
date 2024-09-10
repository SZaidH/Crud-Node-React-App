# Jolly Book Club

Jolly Book Club is a full-stack CRUD application that I built to enhance my learning of **Tailwind CSS** and **JWT (JSON Web Tokens)**. This project showcases how to create, read, update, and delete books while incorporating secure user authentication.

![JollyBookClub](https://github.com/user-attachments/assets/504e3793-21fe-4099-9f90-c57016c4c9d8)

## Features

- **User Authentication**: Uses JWT for secure login and authentication.
- **CRUD Operations**: Add, update, view, and delete books in a MongoDB database.
- **Responsive UI**: Designed with Tailwind CSS for a fully responsive and modern interface.
- **RESTful API**: Built with Node.js and Express.js for efficient server-side operations.
- **Frontend**: Built with React (using Vite) for a fast and optimized development experience.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository

2. Install the packages:
   ```bash
   cd /frontend/
   npm install

   cd ../backend/
   npm install

3. Create the .env file in your **backend** folder. You can use the **dummy.env** in the same folder for reference
4. Create a MongoDB database **CrudUsers** which collections **users** and **books**
5. Run both the **frontend** and **backend**
   ```bash
    cd /frontend/
    npm run dev

    cd ../backend/
    npm run dev

6. You should be good to go!
