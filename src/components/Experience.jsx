import React, { useRef } from "react";

export default function Experience() {
  const experienceRef = useRef(null);

  return (
    <section className="section-experience" id="experience" ref={experienceRef}>
      <h1>
        My <span className="half-text">Experience</span>
      </h1>

      <div className="experience-cards-container">

        {/* Tripfactory Internship (Current) */}
        <div className="experience-card">
          <h3>SDE Intern (Backend) — Tripfactory.com</h3>
          <p className="experience-subtitle">
            Noida &nbsp;|&nbsp; January 2025 – Present
          </p>

          <ul>
            <li>
              Debugging and analyzing the existing backend codebase for the 
              <strong> Hotel Modality</strong> to understand business logic and system workflows.
            </li>

            <li>
              Working with a legacy backend built using <strong>Java Servlets</strong>,
              gaining hands-on exposure to servlet-based architecture,
              request–response lifecycle, and controller–service design patterns.
            </li>

            <li>
              Identifying issues in existing APIs, tracing logs, and fixing minor bugs
              to improve stability and maintainability of production services.
            </li>
          </ul>
        </div>

        {/* ZOHO Internship */}
        <div className="experience-card">
          <h3>Project Trainee Intern — ZOHO Corporation</h3>
          <p className="experience-subtitle">
            Nagpur, India &nbsp;|&nbsp; July 2025 – Dec 2025
          </p>

          <ul>
            <li>
              Conducted a <strong>comparative analysis of current and upcoming DC-SCM
              (Data Center Secure Control Module) specifications</strong>, researching
              architectural changes and their impact on system-level control logic.
            </li>

            <li>
              Researched <strong>hardware architecture and control flow</strong> to
              understand how evolving specifications influence system design and
              reliability in data center environments.
            </li>

            <li>
              Leveraged <strong>simulation tools</strong> to model and validate system
              behaviors based on technical specifications, focusing on
              <strong> power sequencing</strong> and the <strong>hardware–software interface</strong>.
            </li>

            <li>
              Authored <strong>technical documentation and summaries</strong> explaining
              simulation results, architectural insights, and system-level behavior.
            </li>
          </ul>

          <a
            href="https://drive.google.com/file/d/189svAZP5BWOX34TFb-CJGswMnM0AgiY5/view?usp=sharing"
            className="experience-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Internship Certificate
          </a>
        </div>

      </div>
    </section>
  );
}