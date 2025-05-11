import React from 'react';
import Card from '../Layout/Card';
import './ResultCard.css';

const ResultCard = ({ generatedPost }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPost);
  };

  return (
    <Card className="result-card">
      <h2 className="result-title">Generated Post:</h2>
      <div className="post-content">
        <p>{generatedPost}</p>
      </div>
      <button 
        onClick={copyToClipboard}
        className="copy-btn"
      >
        Copy to Clipboard
      </button>
    </Card>
  );
};

export default ResultCard;