# NovaBank - A Fullstack Cloud-Based Digital Bank

## Project Overview 📄
NovaBank is a digital "Neobank" built with the MERN stack (MongoDB, Express, React, Node.js), Docker containers, and AWS services (EC2, S3, CloudFront).  
It simulates real banking operations such as **deposits**, **withdrawals**, and **internal transfers** between users, using a secure **JWT-based authentication** system.

This project showcases modern fullstack development skills, cloud infrastructure deployment, and secure web application practices.

---

## Technologies Used 🚀

- **Frontend**: React, Vite, Axios, TailwindCSS (optional)
- **Backend**: Node.js, Express, MongoDB, JWT, Bcrypt
- **Database**: MongoDB Atlas (M0 Free Cluster)
- **Containerization**: Docker, Docker Compose
- **Infrastructure**: AWS EC2 (backend), AWS S3 + CloudFront (frontend)

---

## Features ✨

- User Registration and Login
- Password Recovery (Forgot Password)
- Secure JWT Authentication
- User Dashboard:
  - View current balance
  - View transaction history
  - Deposit funds
  - Withdraw funds
  - Transfer funds to other users
- Transaction history with detailed records
- Profile image upload (optional via AWS S3)
- Email notifications for transactions (optional via AWS SES)
- Admin Panel (optional):
  - View users, balances, and transactions
- Fully containerized backend with Docker and Docker Compose
- Cloud Deployment with AWS EC2, S3, and CloudFront

---

## Project Structure 🏗️


---

## Deployment Architecture 🛠️

```plaintext
Client (Browser) → CloudFront → S3 (Static Frontend Hosting)
                         ↓
              React App (Frontend)
                         ↓
                 Axios HTTP Requests
                         ↓
             Express API (Backend on EC2 Docker)
                         ↓
                  MongoDB Database (Atlas or EC2)

How to Run Locally ⚙️
    1. Clone the repository
        git clone https://github.com/DiegoRiveraTM/NovaBank
    2. Backend setup:
        cd backend
        npm install 
        npm run dev
    3. Frontend setup
        cd frontend
        npm install
        npm run dev
    4. Docker Local Setup (Optional)
        docker-compose up --build

Enjoy!

From: DiegoR🚀