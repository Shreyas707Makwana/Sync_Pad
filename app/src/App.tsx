import { useState } from "react";

// components
import Editor from "./components/editor";
import Navbar from "./components/navbar";

const App = () => {
  const [user, setUser] = useState<string>("");
  const [formData, setFormData] = useState<string>("");

  if (user === "") {
    return (
      <div className="fixed w-full flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100 top-0 left-0">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-96 border border-blue-100">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full mr-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                </svg>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Sync Pad
              </h1>
            </div>
            <p className="text-gray-600 text-lg">Real-time Collaborative Editor</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setUser(`${formData}-${Math.round(Math.random() * 1000)}`);
            }}
            className="flex flex-col gap-y-4"
          >
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                Enter your name:
              </label>
              <input
                type="text"
                placeholder="Your display name"
                className="w-full border-2 border-blue-200 focus:border-blue-500 p-3 rounded-xl outline-none transition-colors duration-200 bg-blue-50 focus:bg-white"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
                required
              />
            </div>
            <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
              💡 Enter your name to start collaborating with others in real-time!
            </p>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white p-3 px-8 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Join Room 🚀
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  ✨ Collaborative Document
                </h1>
                <p className="text-blue-100">
                  Welcome <span className="font-semibold text-white">{user}</span>! Start typing to collaborate in real-time.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Live</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <Editor username={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
