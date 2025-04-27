
# Sparklehood AI Safety Incident Log API

This project provides a simple REST API to log and manage AI Safety Incidents.  
It is built using Node.js, Express.js, TypeScript, and MongoDB.

---

## Language and Framework Choice

- **Language:** TypeScript
- **Framework:** Node.js with Express.js
- **Database:** MongoDB (using Mongoose)

---

## Project Structure

```
Sparklehood/
├── .env
├── .git/
├── .gitignore
├── dist/
├── node_modules/
├── nodemon.json
├── package-lock.json
├── package.json
├── tsconfig.json
└── src/
    ├── Controllers/
    │   └── IncidentController.ts
    ├── Models/
    │   └── Incident.ts
    ├── Routes/
    │   └── IncidentRoutes.ts
    ├── Server.ts
    ├── TestServer.ts
    └── Utils/
        └── Connection.ts
```

---

## Environment Setup

1. **Install Node.js** 
2. **Install MongoDB** 
---

## Database Configuration

1. Create a `.env` file in the root directory.
2. Add the following environment variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/ai_safety_sparkelhood
```

- `PORT` is the port number where your server will run.
- `MONGO_URI` is the MongoDB connection string pointing to the local database `ai_safety_sparkelhood`.

No manual database schema setup is needed because Mongoose will automatically create the necessary collections.

---

## Installation and Running the Project Locally

1. **Clone the repository:**
   ```
   git clone https://github.com/sumitpatidar9/SPARKLEHOOD.git
   cd Sparklehood
   ```

2. **Install the dependencies:**
   ```
   npm install
   ```

3. **Build the project:**
   ```
   npm run build
   ```

4. **Run the server in development mode:**
   ```
   npm run dev
   ```

5. **Run the server in production mode (after building):**
   ```
   npm start
   ```

---

## Populating the Database with Sample Data

To insert 2–3 sample incidents into the database:

1. Make sure MongoDB is running.
2. Execute the following command:
   ```
   npx ts-node src/TestServer.ts
   ```

This will connect to the MongoDB database and insert sample AI safety incidents.

---

## API Endpoints

All requests and responses are in JSON format.

### 1. Get All Incidents

- **Method:** GET
- **URL:** `/incidents`
- **Description:** Retrieve all AI safety incidents.

**Example using curl:**
```bash
curl -X GET http://localhost:5000/incidents
```

---

### 2. Get a Specific Incident by ID

- **Method:** GET
- **URL:** `/incidents/:id`
- **Description:** Retrieve a specific incident by its MongoDB ID.

**Example using curl:**
```bash
curl -X GET http://localhost:5000/incidents/<incident_id/MongoDbId> 
```

Replace `<incident_id>` with the actual MongoDB ID of the incident.

---

### 3. Create a New Incident

- **Method:** POST
- **URL:** `/incidents`
- **Description:** Log a new AI safety incident.

**Request Body Example:**
```json
{
  "title": "Model output contained harmful bias",
  "description": "An AI model provided a biased recommendation against minority groups.",
  "severity": "High"
}
```

**Example using curl:**
```bash
curl -X POST http://localhost:5000/incidents \
  -H "Content-Type: application/json" \
  -d '{"title": "Model output contained harmful bias", "description": "An AI model provided a biased recommendation against minority groups.", "severity": "High"}'
```

---

### 4. Delete an Incident by ID

- **Method:** DELETE
- **URL:** `/incidents/:id`
- **Description:** Delete an existing incident by its MongoDB ID.

**Example using curl:**
```bash
curl -X DELETE http://localhost:5000/incidents/<incident_id/MongoDbId>
```

Replace `<incident_id>` with the ID of the incident you want to delete.

---

## Validation Rules

- `title` must be a non-empty string.
- `description` must be a non-empty string.
- `severity` must be one of the following:
  - `"Low"`
  - `"Medium"`
  - `"High"`
- `reported_at` is automatically generated when the incident is created.

If validation fails, the server will respond with a `400 Bad Request` error.

---

## Error Handling

- `404 Not Found`: Returned if an incident is not found by ID.
- `400 Bad Request`: Returned for invalid input data or invalid ID formats.


