import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IResume - the Resume Analyzer" },
    { name: "description", content: "Analyze your resume with AI-powered insights." },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Get instant feedback on your resume with AI-powered insights.</h2>
      </div>
    </section>

    {resumes.length > 0 && (
      <section className="resume-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </section>
    )}
   
  </main>;
}
