export interface User {
  id: number
  name: string
  age: number
  city: string
  state: string
  pinCode: string
}

export interface CreateUserRequest {
  name: string
  age: number
  city: string
  state: string
  pinCode: string
}