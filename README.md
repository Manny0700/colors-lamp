# COLORS Web Application

## Overview

The **COLORS Web Application** is a full-stack web project developed for **COP4331 – Processes for Object-Oriented Software Development** at the University of Central Florida.

This application allows users to:

- Log in
- Search for saved colors
- Add new colors
- Persist color data using backend API endpoints

The project demonstrates structured frontend development integrated with backend API services using a clean and organized repository architecture.

---

## Project Purpose

This project was designed to demonstrate:

- Structured full-stack development
- REST-style API endpoint integration
- Client-server communication using Fetch (AJAX)
- DOM manipulation and dynamic rendering
- Backend logic using PHP
- Organized repository structure
- Meaningful commit history reflecting development stages
- Proper use of Git and GitHub for version control

The application separates frontend presentation logic from backend processing logic using an `/api` directory.

---

## Technologies Used

### Frontend
- **HTML5** – Application structure
- **CSS3** – Layout and styling
- **JavaScript (ES6)** – Client-side logic and API communication

### Backend
- **PHP** – Server-side API logic
- **MySQL** – Data persistence (via LAMP stack)

### Development Tools
- **Git** – Version control
- **GitHub** – Repository hosting
- **LAMP Stack (Linux, Apache, MySQL, PHP)** – Deployment environment

---

## Project Structure


colors-lamp/
│
├── api/
│   ├── Login.php
│   ├── SearchColors.php
│   └── AddColor.php
│
├── public/
│   ├── index.html
│   ├── color.html
│   └── js/
│       └── code.js
│
├── README.md
└── LICENSE


---

## Directory Description

### `/api`
Contains backend PHP endpoints responsible for processing requests:

- **Login.php** – Authenticates user credentials  
- **SearchColors.php** – Retrieves matching colors from the database  
- **AddColor.php** – Inserts new colors into the database  

### `/public`
Contains all frontend-facing files:

- **index.html** – Login page  
- **color.html** – Color management interface  
- **js/code.js** – JavaScript logic for API communication and DOM updates  

---

## Features

- User authentication
- Color search functionality
- Add new colors to database
- Dynamic UI updates using Fetch API
- Organized and scalable file structure
- Clear separation between frontend and backend logic

---

## API Endpoints

The frontend communicates with the backend using JSON via HTTP POST requests:

- `/api/Login.php`
- `/api/SearchColors.php`
- `/api/AddColor.php`

All requests are sent using:

- `Content-Type: application/json`
- JSON-formatted request bodies
- JSON responses

---

## Running the Application

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/Manny0700/colors-lamp.git
   ```

2. Place the project inside your LAMP server directory (e.g., `/var/www/html/`).

3. Ensure Apache and MySQL are running.

4. Navigate to:
   ```
   http://localhost/colors-lamp/public/index.html
   ```

---

## Version Control Practices

This repository reflects logical development stages, including:

- Initial frontend structure  
- Backend API setup  
- Feature implementation  
- Final cleanup and documentation  

Each commit message clearly describes what was changed.

---

## AI Usage Disclosure

Artificial Intelligence tools were used as a supplemental aid during the development of this project. AI assistance was utilized for:

- Documentation refinement  
- Code structure suggestions  
- Debugging guidance  
- Improving organization and readability  

All implementation decisions, backend integration, testing, and final validation were completed by the author. AI tools were used strictly as a productivity and learning aid in accordance with course policies.

---

## License

This project is licensed under the MIT License.  
See the `LICENSE` file for details.

---

## Author

Emmanuel Santiago
University of Central Florida  
COP4331 – Processes for Object-Oriented Software Development

