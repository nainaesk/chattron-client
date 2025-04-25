export interface UserState {
  id: string
  email: string
  firstName: string
  lastName: string
}
export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  user: {
    id: string
    name: string
    email: string
  }
  expiration: string
}
