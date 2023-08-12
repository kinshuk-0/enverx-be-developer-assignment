# Blog App ~ Assignment For Backend Developer Role



 ## Project Setup Instructions
 **Prerequisites**

- Node.js and npm: Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from nodejs.org.

- MySQL Database: You'll need a MySQL database to store blog posts. Install MySQL and set up a database with appropriate credentials.

**Installation**
- Clone the Repository: Start by cloning the GitHub repository:
```
git clone https://github.com/kinshuk-0/enverx-be-developer-assignment.git
cd enverx-be-developer-assignment
```
- Checkout the development branch:
```
git checkout development
```
- Install Dependencies: Install the project's dependencies using npm:
```
npm install
```

- Database Configuration: Open the src/config/db.ts file and update the db object with your MySQL database configuration (user, password, database).

**Database Initialization**
- Create Database: Start by creating a new database to store your blog posts. You can use a MySQL client or a tool like MySQL Workbench to execute the following SQL query:
```
CREATE DATABASE your_database;
```

- Create Database Table: You need to create a database table to store blog posts:
```
CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  category VARCHAR(255)
);
```

**Starting the Server**

- Start the Server: To start the Express server, run the following command from the project directory:
```
npm start
```
- Server Running: The server will start on port 8082 by default.




## **Node APIs** (Blog App)

### Get all Blog Posts
```
const API_PATH   : '/posts'
const API_METHOD : 'GET'

export type request = {
  category ?: string
}

export type response = [
  {
    id          : number,
    title       : string,
    content     : string,
    createdDate : string,
    category    : string
  }
]
```

### Get Blog Posts by ID
```
const API_PATH   : '/posts/:id'
const API_METHOD : 'GET'

export type request = {}

export type response = [
  {
    id          : number,
    title       : string,
    content     : string,
    createdDate : string,
    category    : string
  }
]
```

### Create new Blog Posts
```
const API_PATH   : '/posts'
const API_METHOD : 'POST'

export type request = {
  title     : string,
  content   : string,
  category  : string
}

export type response = {
  id: number
}
```

### Update Blog Posts by ID
```
const API_PATH   : '/posts/:id'
const API_METHOD : 'PUT'

export type request = {
  title     : string,
  content   : string,
  category  : string
}

export type response = {}
```

### Delete Blog Posts by ID
```
const API_PATH   : '/posts/:id'
const API_METHOD : 'DELETE'

export type request = {}

export type response = {}
```
***