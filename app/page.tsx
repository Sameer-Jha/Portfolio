"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Code2, Database, FileCode2, Github, Linkedin, Mail, Terminal, Server, Cpu, ArrowUp, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { useState, useEffect } from "react";
import { z } from "zod";
import Image from "next/image";


const emailSchema = z.string().email("Please enter a valid email address");

export default function Home() {
  const [email, setEmail] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse(email);
      if (!gdprConsent) {
        toast.error("Please accept the privacy policy");
        return;
      }
      
      // Here you would typically send this to your API
      toast.success("Successfully subscribed to the newsletter!");
      setEmail("");
      setGdprConsent(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setEmailError(error.errors[0].message);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    { name: "SAP ABAP", years: 3, icon: <Code2 className="w-4 h-4" /> },
    { name: "SAP HANA", years: 3, icon: <Database className="w-4 h-4" /> },
    { name: "Python", years: 2, icon: <FileCode2 className="w-4 h-4" /> },
    { name: "JavaScript", years: 2, icon: <FileCode2 className="w-4 h-4" /> },
  ];

  const projects = [
    {
      title: "SAP HANA Optimization",
      description: "Improved database performance by 40% through query optimization and code refactoring",
      tags: ["SAP HANA", "ABAP", "Performance Optimization"]
    },
    {
      title: "Custom ABAP Reports",
      description: "Developed complex reporting solutions for financial analytics",
      tags: ["ABAP", "SAP", "Financial Reporting"]
    },
    {
      title: "Python Automation",
      description: "Created automation scripts for data processing and ETL workflows",
      tags: ["Python", "Automation", "ETL"]
    }
  ];

  const blogPosts = [
    {
      title: "Optimizing SAP HANA Performance",
      excerpt: "Learn the best practices for optimizing SAP HANA database performance through proper indexing and query optimization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      category: "Database",
      date: "2024-03-15",
      readTime: "5 min read"
    },
    {
      title: "Modern ABAP Development",
      excerpt: "Explore modern ABAP programming techniques and how to integrate them with contemporary development practices.",
      image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=800",
      category: "Development",
      date: "2024-03-10",
      readTime: "7 min read"
    },
    {
      title: "Python in Enterprise",
      excerpt: "Discover how Python is transforming enterprise software development and automation workflows.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      category: "Automation",
      date: "2024-03-05",
      readTime: "4 min read"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background grid-background">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-20 relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold hero-gradient">
                  Hi, I&apos;m <p>Sameer Jha</p>
                </h1>
                <p className="text-xl text-foreground/80">
                  SAP Developer & Full-Stack Engineer with 3+ years of expertise in transforming business processes
                </p>
                <div className="flex gap-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Github className="mr-2 h-4 w-4" />
                    View Projects
                  </Button>
                </div>
              </div>
                <div className="relative floating hidden md:block">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <Terminal className="w-20 h-20 text-primary" />
                  <Server className="w-20 h-20 text-secondary" />
                  <Database className="w-20 h-20 text-secondary" />
                  <Cpu className="w-20 h-20 text-primary" />
                </div>
                </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 hero-gradient">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card key={skill.name} className="p-6 hover:shadow-lg transition-shadow border-primary/20 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <p className="text-muted-foreground">
                  {skill.years} years of experience
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 hero-gradient">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 hero-gradient">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm blog-card">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                  src={post.image} 
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="blog-card-image"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-secondary/20">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="group text-primary hover:text-primary/90">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto p-8 border-primary/20 bg-card/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-center mb-4 hero-gradient">Stay Updated</h2>
            <p className="text-center text-muted-foreground mb-8">
              Subscribe to my newsletter for the latest insights on SAP development, 
              enterprise software, and modern web technologies.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  className={`bg-background/50 border-primary/20 focus:border-primary ${
                    emailError ? "border-destructive" : ""
                  }`}
                />
                {emailError && (
                  <p className="text-sm text-destructive mt-1">{emailError}</p>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="gdpr"
                  checked={gdprConsent}
                  onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
                />
                <label
                  htmlFor="gdpr"
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  I agree to receive emails and accept the privacy policy
                </label>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 hero-gradient">Let&apos;s Connect</h2>
            <p className="text-muted-foreground mb-8">
              Looking for a developer who can bridge the gap between SAP and modern web technologies?
              Let&apos;s discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col w-1/2 mx-auto gap-4 justify-center md:flex-row md:gap-8">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 bg-primary rounded-full shadow-lg transition-all duration-300 hover:bg-primary/90 scroll-to-top ${
            showScrollTop ? "visible" : ""
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </main>
    </>
  );
}