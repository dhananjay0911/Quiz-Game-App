Quiz Game - React & Node.js

📌 Project Overview

This is a Quiz Game application built with React.js for the frontend and Node.js + Express.js for the backend. It allows users to take quizzes, view their results, and improve their knowledge interactively.

📁 Project Structure

quiz-game/
│── backend/                  # Node.js + Express.js backend
│   ├── server.js             # Main Express server file
│   ├── routes/
│   │   ├── quizRoutes.js     # API route for fetching quiz questions
│   ├── data/
│   │   ├── questions.json    # Static quiz questions
│── frontend/                 # React.js frontend
│   ├── public/
│   │   ├── index.html        # Root HTML file
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.js       # Start screen
│   │   │   ├── Quiz.js       # Quiz page
│   │   │   ├── Result.js     # Result page
│   │   ├── App.js            # Main component
│   │   ├── index.js          # React entry point
│── package.json              # Dependencies
│── vercel.json               # Vercel deployment config (if needed)

🛠️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/YOUR_GITHUB_USERNAME/Quiz-Game-App.git
cd Quiz-Game-App

2️⃣ Backend Setup

cd backend
npm install
node server.js  # Start the backend server

3️⃣ Frontend Setup

cd ../frontend
npm install
npm start  # Start React frontend

Your application will run at: http://localhost:3000

🚀 Deployment to Vercel

📌 Deploy Only Frontend on Vercel

Push your project to GitHub

Go to Vercel Dashboard → New Project

Import your repository

Set the Root Directory to frontend/

Use the following settings:

Build Command: npm run build

Output Directory: build

Click Deploy 🚀

📌 Deploy Backend to Vercel (Optional)

If deploying the backend to Vercel, add this file inside backend/:

📂 backend/vercel.json

{
  "version": 2,
  "builds": [
    { "src": "server.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/server.js" }
  ]
}

🔥 Git Commands to Push Code

1️⃣ Initialize & Connect to GitHub

git init
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/Quiz-Game-App.git

2️⃣ Add & Commit Files

git add .
git commit -m "Initial commit"

3️⃣ Push to GitHub

git branch -M main
git push -u origin main

📌 Features

✅ User-friendly interface
✅ Interactive quiz experience
✅ Results calculation
✅ Responsive design
✅ Easy deployment

💡 Technologies Used

Frontend: React.js, React Router, Bootstrap

Backend: Node.js, Express.js

Deployment: Vercel, GitHub

🤝 Contributing

Feel free to fork this repository, make updates, and create a pull request. Suggestions & contributions are welcome!


🚀 Happy Coding!

