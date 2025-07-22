# AI Resume Analyzer (Resumind)

Smart feedback for your dream job! 🚀

## Overview

AI Resume Analyzer (Resumind) is a modern web app that lets you upload your resume, receive instant AI-powered feedback, and track your job application progress. Get actionable tips, ATS (Applicant Tracking System) scores, and suggestions to improve your chances of landing your dream job.

## Features

- 📄 **Upload Resume**: Upload your PDF resume and get instant analysis.
- 🤖 **AI Feedback**: Receive detailed feedback on tone, style, content, structure, and skills.
- 🏆 **ATS Score**: See how your resume performs in automated tracking systems.
- 📊 **Track Submissions**: Review all your uploaded resumes and feedback in one place.
- 🔗 **LinkedIn Connections**: Find relevant LinkedIn connections for your target job/company.
- 🔒 **Authentication**: Secure login/logout to protect your data.
- 🧹 **Data Wipe**: Option to wipe all your uploaded data.
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js v20+
- npm v9+
- (Optional) Docker

### Local Development

1. **Clone the repo:**
   ```bash
   git clone <your-repo-url>
   cd ai-resume-analyzer
   ```
2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
3. **Start the dev server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Docker

1. **Build the Docker image:**
   ```bash
   docker build -t ai-resume-analyzer .
   ```
2. **Run the container:**
   ```bash
   docker run -p 5173:5173 ai-resume-analyzer
   ```

## Usage

- **Upload Resume:** Click "Upload Resume" on the homepage, fill in job details, and upload your PDF.
- **Get Feedback:** Wait for the AI to analyze your resume and display feedback, ATS score, and suggestions.
- **Review Submissions:** All your resumes and feedback are saved for future review.
- **LinkedIn Connections:** On the feedback page, use the "Connect" button to find relevant LinkedIn contacts.
- **Wipe Data:** Go to `/wipe` to delete all your uploaded data.

## Project Structure

- `app/` - Main frontend and route components
- `constants/` - Sample data and instructions
- `public/` - Static assets (images, icons)
- `types/` - TypeScript types
- `Dockerfile` - Docker build instructions

## Tech Stack

- React 19 + TypeScript
- React Router 7
- Tailwind CSS
- Zustand (state management)
- Vite (build tool)
- PDF.js (PDF parsing)
- Custom AI/ATS feedback logic

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'feat: add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

MIT

---

*Made with ❤️ for job seekers everywhere!* 
