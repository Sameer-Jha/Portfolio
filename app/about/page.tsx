"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Download, Briefcase, GraduationCap, Award, Star, Mail } from "lucide-react";

export default function About() {
  const experience = [
    {
      role: "SAP ABAP Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      responsibilities: [
        "Developed and maintained custom ABAP applications for enterprise clients",
        "Optimized SAP HANA database performance, reducing query execution time by 40%",
        "Implemented RESTful APIs for SAP integration with external systems",
        "Led a team of 3 developers in modernizing legacy ABAP code"
      ]
    },
    {
      role: "Junior Software Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2021",
      responsibilities: [
        "Built automation scripts using Python for data processing workflows",
        "Developed full-stack web applications using React and Node.js",
        "Collaborated with cross-functional teams on agile projects"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Technical University",
      year: "2020",
      achievements: [
        "First Class Honours",
        "Best Final Year Project Award",
        "Technical Club President"
      ]
    }
  ];

  const certifications = [
    "SAP ABAP Development Associate",
    "SAP HANA 2.0 SPS05 Administration",
    "Python Professional Certification",
    "AWS Cloud Practitioner"
  ];

  const skills = {
    sap: ["ABAP", "SAP HANA", "SAP Fiori", "SAP Gateway", "OData"],
    programming: ["Python", "JavaScript", "TypeScript", "Node.js", "React"],
    databases: ["SAP HANA", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "Jenkins", "Jira"]
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background grid-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header/Introduction */}
          <Card className="p-8 mb-8 border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-grow">
                <h1 className="text-4xl font-bold mb-4 hero-gradient">Sameer Jha</h1>
                <h2 className="text-2xl text-foreground/90 mb-4">SAP ABAP & Full-Stack Developer</h2>
                <p className="text-muted-foreground mb-6">
                  Experienced SAP ABAP developer with a strong foundation in modern web technologies.
                  Passionate about creating efficient, scalable solutions that bridge enterprise systems
                  with contemporary development practices.
                </p>
                <div className="flex w-1/2 md:w-full mx-auto gap-4 mt-4 md:flex-row flex-col">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <Card className="p-4 border-primary/20 bg-card/50">
                  <h3 className="font-semibold mb-2">Contact Information</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>📍 New Delhi, India</p>
                    <p>📧 sameer.jha@example.com</p>
                    <p>🌐 github.com/sameerjha</p>
                    <p>💼 linkedin.com/in/sameerjha</p>
                  </div>
                </Card>
              </div>
            </div>
          </Card>

          {/* Professional Experience */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold hero-gradient">Professional Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <p className="text-primary">{job.company}</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 md:mt-0 w-fit">
                      {job.period}
                    </Badge>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold hero-gradient">Education</h2>
            </div>
            {education.map((edu, index) => (
              <Card key={index} className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary">{edu.institution}</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0 w-fit">
                    {edu.year}
                  </Badge>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </section>

          {/* Skills */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold hero-gradient">Technical Skills</h2>
            </div>
            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold capitalize mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-secondary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Certifications */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold hero-gradient">Certifications</h2>
            </div>
            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Badge className="bg-primary/20 text-primary">{index + 1}</Badge>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
}