import axios from "axios"
import type { User, CreateUserRequest } from "../models/user"

const api = axios.create({
  baseURL: "/api",
})

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/users")
  return response.data
}

export const createUser = async (user: CreateUserRequest) => {
  const response = await api.post("/users", user)
  return response.data
}