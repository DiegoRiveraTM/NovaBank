# NovaBank - A Fullstack Cloud-Based Digital Bank

## Project Overview 📄
NovaBank is a digital "Neobank" built with the MERN stack (MongoDB, Express, React, Node.js), Docker containers, and AWS services (EC2, S3, CloudFront).  
It simulates real banking operations such as **withdrawals** and **internal transfers** between users, using a secure **JWT-based authentication** system.

This project showcases modern fullstack development skills, cloud infrastructure deployment, and secure web application practices.

---

## 🚀 Technologies Used

- **Frontend:** Next.js (App Router), React, Tailwind CSS, Shadcn UI
- **Backend:** Node.js, Express, TypeScript, MongoDB (Mongoose)
- **Authentication:** JSON Web Tokens (JWT)
- **Database:** MongoDB Atlas
- **AWS:**
  - **EC2:** Backend hosted on an EC2 instance
  - **S3:** Frontend deployed as a static site on S3
  - **SES:** Email service for password recovery and notifications

---

## ✨ Features

- User Registration and Login
- Password Recovery (Forgot Password)
- Secure JWT Authentication
- User Dashboard:
  - View current balance
  - View transaction history
  - Deposit funds
  - Withdraw funds (coming soon)
  - Transfer funds to other users
- Transaction history with detailed records
- Email notifications for transactions (via AWS SES)
- Fully containerized backend with Docker and Docker Compose
- Cloud Deployment with AWS EC2, S3, and CloudFront

---

## 🛠️ Deployment Architecture

```plaintext
Client (Browser)
      ↓
CloudFront CDN
      ↓
S3 Bucket (Static Frontend Hosting - Next.js App)
      ↓
Axios HTTP Requests
      ↓
Express API (Backend running on EC2 - Dockerized)
      ↓
MongoDB Atlas (Database)
      ↓
AWS SES (Email Service for Password Recovery)

---

How to Run Locally ⚙️
    1. Clone the repository
        git clone https://github.com/DiegoRiveraTM/NovaBank
    2. Backend setup:
        cd novabank
        cd src (for the backend )
        npm install 
        npx ts-node-dev src/index.ts
    3. Frontend setup
        cd src/app
        npm install
        npm run dev
    4. Docker Local Setup (Optional)
        docker-compose up --build

Enjoy!


From: DiegoR🚀