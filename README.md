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

Frontend  [AI usage 80%]
React (Vite + TypeScript)

Backend  [AI usage 10%]
ASP.NET Core Web API (.NET 8)

Database  
SQLite using Entity Framework Core


# Overview 

React (Port 5173)
      |
      | HTTP /api/*
      |
Vite Proxy
      |
      v
.NET API (Port 7018)
      |
      v
SQLite (data/app.db)


# How to run the application

Running the Frontend

Navigate to the frontend folder:

cd user-directory-ui

Install dependencies:

npm install

Run the development server:

npm run dev

Open:

http://localhost:5173


# Project Structure

Frontend

user-directory-ui/
	src/
		api/
		models/
		pages/
		components/
		layout/

Backend

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
