import { login } from '@renderer/services/auth.service'
import { Form, redirect, useActionData } from 'react-router-dom'

export const Login = () => {
  const actionData = useActionData() // Access data returned by the action

  return (
    <div className="flex items-center justify-center h-screen bg-bg text-text">
      <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          {/* <img src={logo} alt="Logo" className="h-16 w-auto" /> */}
        </div>

        {/* Title */}
        <h1 className="text-center text-4xl font-bold mb-6">Login</h1>

        {/* Form */}
        <Form method="post" className="space-y-6">
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {actionData?.error && <p className="text-red-500 text-sm">{actionData.error}</p>}

          {/* Submit Button */}
          <button type="submit" className="btn w-full">
            Login
          </button>
        </Form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-text-secondary">
            Don&apos;t have an account?{' '}
            <a href="/register" className="text-accent underline hover:opacity-80 transition">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export async function LoginAction({ request }: { request: Request }) {
  const formData = await request.formData()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    // Call the login service
    const response = await login({ email, password })

    // Save token and user data to localStorage
    localStorage.setItem('token', response.token)
    localStorage.setItem('authUser', JSON.stringify(response.user))
    localStorage.setItem('expiration', response.expiration)

    // Redirect to the chat page
    return redirect('/')
  } catch (err: unknown) {
    console.error(err)

    // Return error message to the login page
    if (err instanceof Error && 'response' in err) {
      const axiosError = err as { response?: { data?: { message?: string } } }
      if (axiosError.response?.data?.message) {
        return { error: axiosError.response.data.message }
      }
    }
    return { error: 'Login failed. Please try again.' }
  }
}
