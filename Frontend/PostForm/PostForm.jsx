import React, { useState } from 'react';
import axios from 'axios';
import Card from '../Layout/Card';
import Navbar from '../Navbar/Navbar';
import './PostForm.css';

const PostForm = ({ onPostGenerated }) => {
  const [length, setLength] = useState('');
  const [language, setLanguage] = useState('');
  const [topic, setTopic] = useState('');

  const handleGeneratePost = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/generate', {
        length,
        language,
        topic
      });
      onPostGenerated(response.data.post);
    } catch (error) {
      console.error("There was an error generating the post:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Card>
        <h1 className="title">Generate Your Post</h1>

        <div className="form-group">
          <label htmlFor="topic">Topic:</label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter your topic"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="length">Length:</label>
          <select
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="select-field"
          >
            <option value="">Select length</option>
            <option value="Short">Short</option>
            <option value="Medium">Medium</option>
            <option value="Long">Long</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="select-field"
          >
            <option value="">Select language</option>
            <option value="English">English</option>
            <option value="Hinglish">Hinglish</option>
          </select>
        </div>

        <button
          onClick={handleGeneratePost}
          className="generate-btn"
          disabled={!topic || !length || !language}
        >
          Generate Post
        </button>
      </Card>
    </>
  );
};

export default PostForm;