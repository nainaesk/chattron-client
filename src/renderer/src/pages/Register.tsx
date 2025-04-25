import { register } from '@renderer/services/auth.service'
import { Form, redirect, useActionData } from 'react-router-dom'

export const Register = () => {
  const actionData = useActionData() // Access data returned by the action

  return (
    <div className="flex items-center justify-center h-screen bg-bg text-text">
      <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
        <h1 className="text-center text-4xl font-bold mb-6">Register</h1>
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

          {/* Confirm Password Input */}
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Error Message */}
          {actionData?.error && <p className="text-red-500 text-sm">{actionData.error}</p>}

          {/* Submit Button */}
          <button type="submit" className="w-full btn">
            Register
          </button>
        </Form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-text-secondary">
            Already have an account?{' '}
            <a href="/login" className="text-accent underline hover:opacity-80 transition">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
export async function RegisterAction({ request }: { request: Request }) {
  const formData = await request.formData()
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  // Validate passwords match
  if (password !== confirmPassword) {
    return { error: 'Passwords do not match.' }
  }

  try {
    // Call the register service
    const response = await register({ email, password })

    // Save token and user data to localStorage
    localStorage.setItem('token', response.token)
    localStorage.setItem('authUser', JSON.stringify(response.user))
    localStorage.setItem('expiration', response.expiration)

    // Redirect to the chat page
    return redirect('/')
  } catch (err: unknown) {
    // Handle errors (e.g., email already exists)
    throw Error(err + ' Unknown error occured')
  }
}
