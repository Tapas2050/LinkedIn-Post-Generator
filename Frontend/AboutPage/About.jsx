import React from 'react';
import Card from '../Layout/Card';
import Navbar from '../Navbar/Navbar';
import './About.css';

const About = () => {
    return (
        <>
            <Navbar />
            <Card className="about-card">
                <h1 className="about-title">About PostGenie</h1>
                <p className="about-description">
                    PostGenie, which is our LinkedIn Post Generator is a Generative AI-powered web application that helps users craft engaging LinkedIn posts in seconds.
                    It uses an advanced language model to produce content tailored to your topic, tone, and preferred language.
                </p>
                <p className="about-description">
                    ✨ Simply enter a topic, choose the desired length, and pick your preferred language – English or Hinglish. Click "Generate Post" and let the AI do the magic.
                </p>
                <p className="about-description">
                    💡 This project integrates a responsive front-end built with React, contextual theming (light/dark), and interactive UI components to provide a seamless experience.
                </p>
                <p className="about-description">
                    🌐 Backend runs on FastAPI with integration to a language model, enabling real-time content generation for professional social sharing.
                </p>
            </Card>
        </>
    );
};

export default About;
