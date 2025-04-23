export const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-bg text-text">
      <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
        <h1 className="text-center text-4xl font-bold mb-6 ">Register</h1>
        <form className="space-y-6">
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2 border border-border rounded-lg bg-bg text-text focus:outline-none focus:ring-1 focus:ring-accent-alt transition"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full btn">
            Register
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-text-secondary">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  )
}
