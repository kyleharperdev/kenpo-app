import { useState } from "react"
import Logo from "../components/Logo"


export default function EntryForm() {

  const [isSignup, setSignup] = useState(true)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [agreed, setAgreed] = useState(false)

  function handleSubmit() {
    console.log(username, password)
  }

  return (
    <div className="bg-page min-h-screen flex items-center justify-center p-4">
      <Logo className="absolute top-6 left-6" />
      <div className="bg-bg p-8 rounded-2xl w-full max-w-md border border-border">
        <h1 className="text-text text-2xl font-semibold mb-2">Create an account</h1>
        <p className="text-text-muted text-sm mb-6">
          Already have an account? <span className="text-accent cursor-pointer">Log in</span>
        </p>
        <div className="flex flex-col gap-3">
            <input type="text"
            placeholder="Username:"
            value={username}
            className="bg-surface text-text placeholder-text-muted rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-accent "
            onChange={(e) => {
              setUsername(e.target.value )
            }} />
            <input type="password"
            placeholder="Password:"
            value={password}
            className="bg-surface text-text placeholder-text-muted rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-accent "
            onChange={(e) => {
              setPassword(e.target.value )
            }} />
            <label className="flex items-center gap-2 text-text-muted text-sm mt-1">
              <input
              type="checkbox"
              checked={agreed}
              className="accent-accent cursor-pointer"
              onChange={(e) => setAgreed(e.target.checked)} />
              I agree to the terms and conditions
            </label>
      
            <button
            className="bg-accent hover:bg-accent-hover text-white font-medium rounded-lg py-3 mt-2 transition-colors cursor-pointer"
            onClick={handleSubmit}>
              Create Account</button>
        </div>
      </div>
    </div>
  )
}