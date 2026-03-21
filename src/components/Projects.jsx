import React from "react";
import { SiFlask, SiGoogle, SiJsonwebtokens } from "react-icons/si";
// Icons
import { FaReact, FaNodeJs, FaCloud } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiOpenai,
  SiExpress,
  SiSocketdotio,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiPrisma
} from "react-icons/si";

export default function Projects() {
  return (
    <section className="section-projects" id="projects">
      <h1>My <span className="half-text">Projects</span></h1>

      <div className="projects-box">
        {/* 1. Video Conferencing App */}
        <div className="project-card-1 project-card">
          <div className="project-details">
            <h2 className="project-title">Video Conferencing App</h2>

            <p className="project-description">
              A feature-rich video conferencing platform built with <strong>WebRTC, WebSockets,
              Clerk Auth, Prisma ORM</strong>, and a responsive Next.js frontend. Includes
              meeting rooms, screen sharing, chat, and role-based auth.
            </p>

            <div className="tech-icons">
              <SiNextdotjs title="Next.js" />
              <SiTypescript title="TypeScript" />
              <SiTailwindcss title="Tailwind CSS" />
              <SiPostgresql title="PostgreSQL" />
            </div>
          </div>

          <div className="project-links">
            <a
              href="https://video-conferencing-application-henna.vercel.app/"
              className="live-demo-link"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/mridul-iiitn/Video_conferencing_application"
              className="repo-link"
            >
              Repository
            </a>
          </div>
        </div>


        {/* 2. Career Guidance Chatbot */}
        <div className="project-card-2 project-card">
          <div className="project-details">
            <h2 className="project-title">Career Guidance Chatbot</h2>

            <p className="project-description">
              An AI-powered career counseling system using <strong>LLMs + RAG</strong> to generate
              personalized career guidance with contextual memory, structured responses,
              and document-based knowledge (PDFs/CSVs).
            </p>

            <div className="tech-icons">
              <SiNextdotjs title="Next.js" />
              <SiTypescript title="TypeScript" />
              <SiExpress title="Express.js" />
              <SiPostgresql title="PostgreSQL" />
              <SiPrisma title="Prisma ORM" />
            </div>
          </div>

          <div className="project-links" style={{ display: "flex", justifyContent: "flex-start", gap: "400px" }}>
            <a href="https://ai-career-guidance-chatbot.vercel.app/" className="live-demo-link">Live Demo</a>
            <a href="https://github.com/mridul-iiitn/AI-CareerGuidance-Chatbot" className="repo-link">Repository</a>
          </div>
        </div>


        {/* 3. Inventory Management System */}
        <div className="project-card-3 project-card">
          <div className="project-details">
            <h2 className="project-title">Inventory Management System</h2>

            <p className="project-description">
              A complete inventory management platform with <strong>JWT auth, SKU validation,
              paginated APIs</strong>, a responsive React UI, and a Python-Flask backend.
            </p>

            <div className="tech-icons">
              <SiJavascript title="JavaScript" />
              <SiMongodb title="MongoDB" />
              <FaReact title="React" />
              <SiTailwindcss title="Tailwind CSS" />
            </div>
          </div>

          <div className="project-links">
            <a href="https://scintillating-fairy-1ea183.netlify.app" className="live-demo-link">Live Demo</a>
            <a href="https://github.com/ketaniiitn/INVENTRY-MANAGEMENT-SYSTEM" className="repo-link">Repository</a>
          </div>
        </div>


        {/* 4. CourseFlair */}
        <div className="project-card-4 project-card">
          <div className="project-details">
            <h2 className="project-title">CourseFlair</h2>

            <p className="project-description">
              A full-stack course platform with <strong>JWT + Google OAuth authentication,
              REST APIs</strong>, a responsive React UI, and a Flask backend with PostgreSQL.
            </p>

            <div className="tech-icons">
              <FaReact title="React" />
              <SiFlask title="Flask" />
              <SiPostgresql title="PostgreSQL" />
              <SiGoogle title="Google OAuth 2.0" />
            </div>
          </div>

          <div className="project-links" style={{ display: "flex", justifyContent: "flex-start", gap: "400px" }}>
            <a href="https://course-flair.vercel.app/" className="live-demo-link">Live Demo</a>
            <a href="https://github.com/mridul-iiitn/CourseFlair" className="repo-link">Repository</a>
          </div>
        </div>
        
      </div>
    </section>
  );
}