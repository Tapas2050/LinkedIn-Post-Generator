import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostForm from './components/PostForm/PostForm';
import ResultCard from './components/ResultCard/ResultCard';
import About from './components/AboutPage/About';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  const [generatedPost, setGeneratedPost] = useState('');

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <div className="container">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/home"
                element={
                  <>
                    <PostForm onPostGenerated={setGeneratedPost} />
                    {generatedPost && <ResultCard generatedPost={generatedPost} />}
                  </>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
