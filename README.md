# 🌿 Green Club Recruitment Form

A modern and responsive recruitment form for Green Club, designed to collect applications from eco-conscious individuals who want to join various sustainability initiatives.
The form supports dark mode, real-time validation, and backend integration for email submissions.

## ✨ Features

1) Modern UI with light/dark theme toggle

2) Responsive design for all screen sizes

3) Collects detailed applicant information:

4) Personal info (Name, Email, Phone, Institution)

5) Preferences (Team, Experience, Availability)

6) Motivation with minimum character validation

7) Instant success/error feedback messages

8) Integrated with backend API for email submissions (/send-email)

## 🚀 Getting Started

### Prerequisites

1) A running backend server with an endpoint at http://localhost:3000/send-email to handle form submissions
2) Modern browser (Chrome, Firefox, Edge, Safari)

### Setup

1) Clone this repository or download the files.

2) Open index.html in your browser.

3) Fill the form and submit.Ensure your backend email API is running for successful submission.

## 📂 Project Structure

├── index.html  &nbsp;&nbsp;&nbsp;&nbsp;   (# Main recruitment form (frontend))

├── server.js   &nbsp;&nbsp;&nbsp;&nbsp;   (# Express.js backend for handling submissions)

├── package.json    &nbsp;&nbsp;&nbsp;&nbsp;  (# Project metadata & dependencies)

├── package-lock.json   &nbsp;&nbsp;&nbsp;&nbsp;  (# Locked dependency versions)

├── README.md   &nbsp;&nbsp;&nbsp;&nbsp;    (# Documentation)

├── LICENSE.txt   &nbsp;&nbsp;&nbsp;&nbsp;    (# License)

## ⚡ API Endpoint (Backend Integration)

### The form sends a POST request to:

http://localhost:3000/send-email

#### Locally hosted.

### with JSON payload:

{

  "fullName": "John Doe",
  
  "email": "john@example.com",
  
  "phone": "1234567890",
  
  "institution": "ABC University",
  
  "team": "Sustainability Initiatives",
  
  "experience": "Intermediate",
  
  "motivation": "I want to contribute to climate action...",
  
  "availability": "4-6",
  
  "linkedin": "https://linkedin.com/in/johndoe"
  
}

## 🌗 Theme Toggle

Default: Light mode

Toggle button switches between Dark 🌙 and Light ☀️ mode

Choice is saved in browser localStorage

## 🤝 Contributing

Contributions are welcome!

Improve the UI

Add new fields

Enhance validation logic

Integrate with real-world backend/email service

