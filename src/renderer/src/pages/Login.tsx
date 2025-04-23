export const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-bg text-text">
      <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
        <h1 className="text-center text-4xl font-bold mb-6">Login</h1>
        <form className="space-y-6">
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn w-full">
            Login
          </button>
        </form>

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
