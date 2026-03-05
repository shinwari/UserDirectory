# User Directory Application

A small full-stack application that allows users to view and create user records.

This project utilises:

- React frontend
- .NET 8 Web API backend
- SQLite database
- Client-side and server-side validation

---

# Architecture

The application consists of two main parts:

**Frontend**  [AI usage 80%]

React (Vite + TypeScript)

**Backend**  [AI usage 10%]

ASP.NET Core Web API (.NET 8)

**Database**

SQLite using Entity Framework Core


# How to run the application

**Running the Frontend**

- Navigate to the frontend folder:
```
	cd user-directory-ui
```
- Install dependencies:
```
	npm install
```
- Run the development server:
```
npm run dev
```
- Open:
```
	http://localhost:5173
```

**Running the Backend**
```
cd backend/UserDirectory.Api
dotnet restore
dotnet run
```

# Project Structure

**Frontend**

user-directory-ui/

	src/
	
		api/
		
		models/
		
		pages/
		
		components/
		
		layout/
		

**Backend**

UserDirectory.API/

	Controllers/
	
	Entities/
	
	DbContexts/
	
	Repositories/
	
	Services/
	
	Migrations/
	
	Models/
	
	Profile/
	
	Properties/
	

---

# Assignment Coverage 

- All requested API endpoints (/api/users) are done.
- Bonus features (security, docker and unit test) not done.


# AI Tool Usage

- ChatGPT used for Frontend application development heavily (80%).
- ChatGPT used for review of backend application and design review (10%).