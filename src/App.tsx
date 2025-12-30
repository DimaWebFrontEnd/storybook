import { useState, useEffect } from 'react'
import { Input } from './components/Input/Input'
import { Sidebar } from './components/SidebarMenu/Sidebar';
import ToastItem from './components/Toast/ToastItem';

import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTitle, setIsTitle] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toastType = inputValue.length > 0 ? "success" : "failed"

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <main className="app-main">
      {/* Input */}
      <form action="" onSubmit={(e) => e.preventDefault}>
        <Input
          type="password"
          placeholder="Enter password"
          clearable={false}
          value={inputValue}
          onChange={setInputValue}
        />
      </form>
      {/* Login Button */}
      <button onClick={() => { setIsVisible(true); setIsTitle(true); setIsTitle(inputValue ? true : false) }} style={{
        display: "flex", alignItems: "center", justifyContent: "center", outline: "none", border: "none", marginTop: 16, width: 280, backgroundColor: "#F0F8FF", padding: "10px 0", fontSize: 16, borderRadius: 4,
      }}>Login</button>
      {/* Toast Notification */}
      {isVisible && <ToastItem type={toastType} setIsVisible={setIsVisible} />}
      {/* Sidebar */}
      <div>
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      {/* Title Section */}
      <div className="title-section" style={{ opacity: isTitle ? 1 : 0 }}>
        <h1>Welcome to the App</h1>
        <p>Click the button to open the sidebar.</p>
      </div>
    </main>
  )
}

export default App
