import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase, Award, Zap, Terminal, ArrowRight, ChevronDown, Sparkles, Phone, FileText, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const fullText = 'Welcome to my portfolio';

  useEffect(() => {
    let index = 0;
    let typingInterval;
    
    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            index = 0;
            setTypedText('');
            startTyping();
          }, 2000);
        }
      }, 80);
    };
    
    startTyping();

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const frontendSkills = ['React.js', 'JavaScript ES6', 'Tailwind CSS', 'HTML5 CSS3'];
  const backendSkills = ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'];
  const toolsSkills = ['Git GitHub', 'API Integration', 'Cloud Deployment', 'Responsive Design'];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen w-full overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
        code, .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes wiggle { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-5deg); } 75% { transform: rotate(5deg); } }
        
        .animate-fade-up { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fade-down { animation: fadeInDown 0.6s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.5s ease-out forwards; }
        .animate-slide-left { animation: slideInLeft 0.7s ease-out forwards; }
        .animate-slide-right { animation: slideInRight 0.7s ease-out forwards; }
        .animate-pulse-slow { animation: pulse 3s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-rotate { animation: rotate 20s linear infinite; }
        .animate-bounce-slow { animation: bounce 2s ease-in-out infinite; }
        .hover-wiggle:hover { animation: wiggle 0.5s ease-in-out; }
        
        .gradient-border { position: relative; background: linear-gradient(to right, #0ea5e9, #8b5cf6); padding: 2px; border-radius: 12px; }
        .gradient-border-content { background: #020617; border-radius: 10px; }
        .glass-effect { background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(10px); border: 1px solid rgba(148, 163, 184, 0.1); }
      `}</style>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-rotate"></div>
      </div>

      <nav className="fixed top-3 md:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[95%] sm:w-auto max-w-4xl">
        <div className="glass-effect rounded-full px-4 sm:px-6 md:px-8 py-2.5 md:py-3 shadow-xl border border-slate-700/20 backdrop-blur-md bg-slate-900/10">
          <div className="flex items-center justify-between sm:justify-center gap-3 sm:gap-5 md:gap-8">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-1 sm:gap-1.5 text-xs md:text-sm font-semibold text-slate-400 hover:text-cyan-400 transition whitespace-nowrap">
              <ChevronDown size={16} className="rotate-180" />
              <span>Home</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="flex items-center gap-1 sm:gap-1.5 text-xs md:text-sm font-semibold text-slate-400 hover:text-cyan-400 transition whitespace-nowrap">
              <Award size={16} />
              <span>About</span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="flex items-center gap-1 sm:gap-1.5 text-xs md:text-sm font-semibold text-slate-400 hover:text-violet-400 transition whitespace-nowrap">
              <Terminal size={16} />
              <span>Projects</span>
            </button>
            <button onClick={() => scrollToSection('skills')} className="flex items-center gap-1 sm:gap-1.5 text-xs md:text-sm font-semibold text-slate-400 hover:text-blue-400 transition whitespace-nowrap">
              <Code2 size={16} />
              <span>Skills</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="flex items-center gap-1 sm:gap-1.5 text-xs md:text-sm font-semibold text-slate-400 hover:text-cyan-400 transition whitespace-nowrap">
              <Mail size={16} />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </nav>



      <section id="home" className="relative min-h-screen flex flex-col justify-center px-4 pt-4 z-10">
        <div className="absolute top-20 left-0 right-0 flex justify-center">
          <div className="h-8 md:h-10 flex items-center justify-center gap-2">
            <span className="text-base md:text-lg text-cyan-400 font-mono">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 animate-float" />
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-center">
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 animate-fade-up mt-16 md:mt-20">
            <span className="block text-slate-100">Dinesh Chandra</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">Mishra</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-up leading-relaxed px-4" style={{animationDelay: '0.1s'}}>
            Full-Stack Developer specializing in MERN stack. Building scalable web applications and crafting exceptional digital experiences.
          </p>

          <div className="flex gap-3 md:gap-4 justify-center mb-8 md:mb-12 animate-fade-up flex-wrap px-4" style={{animationDelay: '0.2s'}}>
            <button onClick={() => scrollToSection('contact')} className="px-5 py-2.5 md:px-8 md:py-4 text-sm md:text-base bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105">
              Get In Touch
            </button>
            <button onClick={() => scrollToSection('projects')} className="px-5 py-2.5 md:px-8 md:py-4 text-sm md:text-base border-2 border-slate-700 text-slate-300 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition">
              View Projects
            </button>
          </div>

          <div className="flex gap-4 md:gap-6 justify-center animate-fade-up" style={{animationDelay: '0.3s'}}>
            <a href="https://github.com/dineshchandra24" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition hover-wiggle transform hover:scale-110">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/dinesh-chandra-mishra/" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition hover-wiggle transform hover:scale-110">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="mailto:chdineshmishra02@gmail.com" className="p-2.5 md:p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition hover-wiggle transform hover:scale-110">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>

          <div className="mt-6 md:mt-8 animate-bounce-slow">
            <ChevronDown className="w-7 h-7 md:w-8 md:h-8 mx-auto text-slate-600" />
          </div>
        </div>
      </section>

      <section id="about" className="relative py-0 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8 mt-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">About Me</h2>
            <p className="text-sm md:text-base text-slate-500">Get to know more about my background and expertise</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-left space-y-4 md:space-y-6">
              <p className="text-slate-300 leading-relaxed text-sm md:text-base lg:text-lg">
                I'm a <span className="text-cyan-400 font-semibold">B.Tech Computer Science graduate</span> from Shri Ramswaroop Memorial University with a passion for building innovative web solutions.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base lg:text-lg">
                Currently working as a <span className="text-violet-400 font-semibold">Web Development Intern (Advanced)</span> at LABMENTIX, where I develop full-stack applications using the MERN stack.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base lg:text-lg">
                I believe in writing <span className="text-cyan-400 font-semibold">clean, maintainable code</span> and creating <span className="text-violet-400 font-semibold">intuitive user experiences</span> that solve real-world problems.
              </p>
            </div>

            <div className="animate-slide-right space-y-3 md:space-y-4">
              <div className="gradient-border transform hover:scale-105 transition-transform duration-300">
                <div className="gradient-border-content p-4 md:p-6 hover:bg-slate-900/50 transition">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-cyan-500/10 rounded-lg animate-float">
                      <Award className="text-cyan-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold mb-1 text-cyan-400">Education</h3>
                      <p className="text-sm md:text-base text-slate-300 font-medium">B.Tech Computer Science</p>
                      <p className="text-xs md:text-sm text-slate-500">CGPA: 7.19 • SRMU, Lucknow</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gradient-border transform hover:scale-105 transition-transform duration-300">
                <div className="gradient-border-content p-4 md:p-6 hover:bg-slate-900/50 transition">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-violet-500/10 rounded-lg animate-float" style={{animationDelay: '0.5s'}}>
                      <Briefcase className="text-violet-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold mb-1 text-violet-400">Current Role</h3>
                      <p className="text-sm md:text-base text-slate-300 font-medium">Web Dev Intern (Advanced)</p>
                      <p className="text-xs md:text-sm text-slate-500">LABMENTIX • Sept 2025 - Present</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gradient-border transform hover:scale-105 transition-transform duration-300">
                <div className="gradient-border-content p-4 md:p-6 hover:bg-slate-900/50 transition">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-blue-500/10 rounded-lg animate-float" style={{animationDelay: '1s'}}>
                      <Code2 className="text-blue-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold mb-1 text-blue-400">Specialization</h3>
                      <p className="text-sm md:text-base text-slate-300 font-medium">MERN Stack Developer</p>
                      <p className="text-xs md:text-sm text-slate-500">Full-Stack • APIs • Cloud</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-16 md:py-24 px-4 z-10 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-sm md:text-base text-slate-500">A showcase of my recent work and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="gradient-border animate-scale-in hover:scale-105 transition-transform duration-300 hover-wiggle">
              <div className="gradient-border-content p-6 md:p-8 h-full">
                <div className="flex items-center justify-between gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Terminal className="text-cyan-400 animate-float w-6 h-6" />
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100">EchoScribe</h3>
                  </div>
                  <a href="https://stt-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 transition">
                    Visit <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-slate-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  Full-stack speech-to-text application with real-time transcription using Deepgram API. Features a responsive React frontend and robust Node.js backend.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2.5 py-1 md:px-3 md:py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition">MERN Stack</span>
                  <span className="px-2.5 py-1 md:px-3 md:py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition">Deepgram API</span>
                  <span className="px-2.5 py-1 md:px-3 md:py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition">Real-time</span>
                </div>
              </div>
            </div>

            <div className="gradient-border animate-scale-in hover:scale-105 transition-transform duration-300 hover-wiggle" style={{animationDelay: '0.1s'}}>
              <div className="gradient-border-content p-6 md:p-8 h-full">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <Zap className="text-violet-400 animate-float w-6 h-6" style={{animationDelay: '0.5s'}} />
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100">Currency Converter</h3>
                </div>
                <p className="text-slate-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  Real-time currency exchange application with live market rates. Built with vanilla JavaScript and external APIs for accurate conversions.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2.5 py-1 md:px-3 md:py-1 bg-violet-500/10 text-violet-400 text-xs font-medium rounded-full border border-violet-500/20 hover:bg-violet-500/20 transition">JavaScript</span>
                  <span className="px-2.5 py-1 md:px-3 md:py-1 bg-violet-500/10 text-violet-400 text-xs font-medium rounded-full border border-violet-500/20 hover:bg-violet-500/20 transition">REST API</span>
                  <span className="px-2.5 py-1 md:px-3 md:py-1 bg-violet-500/10 text-violet-400 text-xs font-medium rounded-full border border-violet-500/20 hover:bg-violet-500/20 transition">Responsive</span>
                </div>
                <a href="https://dineshchandra24.github.io/Currency-Converter/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 text-violet-400 text-sm font-medium rounded-lg border border-violet-500/20 hover:bg-violet-500/20 transition">
                  Visit <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-16 md:py-24 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Skills and Expertise</h2>
            <p className="text-sm md:text-base text-slate-500">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="gradient-border animate-fade-up transform hover:scale-105 transition-transform duration-300">
              <div className="gradient-border-content p-6 md:p-8 hover:bg-slate-900/50 transition">
                <Code2 className="text-cyan-400 mb-3 md:mb-4 animate-float w-7 h-7" />
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-slate-100">Frontend Development</h3>
                <ul className="space-y-2 md:space-y-3">
                  {frontendSkills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-slate-400 hover:text-cyan-400 transition">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="gradient-border animate-fade-up transform hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.1s'}}>
              <div className="gradient-border-content p-6 md:p-8 hover:bg-slate-900/50 transition">
                <Terminal className="text-violet-400 mb-3 md:mb-4 animate-float w-7 h-7" style={{animationDelay: '0.5s'}} />
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-slate-100">Backend Development</h3>
                <ul className="space-y-2 md:space-y-3">
                  {backendSkills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-slate-400 hover:text-violet-400 transition">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="gradient-border animate-fade-up transform hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
              <div className="gradient-border-content p-6 md:p-8 hover:bg-slate-900/50 transition">
                <Award className="text-blue-400 mb-3 md:mb-4 animate-float w-7 h-7" style={{animationDelay: '1s'}} />
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-slate-100">Tools and Others</h3>
                <ul className="space-y-2 md:space-y-3">
                  {toolsSkills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-slate-400 hover:text-blue-400 transition">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-4 z-10 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Work Experience</h2>
            <p className="text-sm md:text-base text-slate-500">My professional journey and roles</p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="gradient-border animate-slide-left transform hover:scale-102 transition-transform duration-300">
              <div className="gradient-border-content p-6 md:p-8 hover:bg-slate-900/50 transition">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-cyan-500/10 rounded-lg animate-float flex-shrink-0">
                    <Briefcase className="text-cyan-400 w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-1">Web Development Intern (Advanced)</h3>
                    <p className="text-sm md:text-base text-slate-400 mb-3 md:mb-4">LABMENTIX • September 2025 - Present</p>
                    <ul className="space-y-2">
                      <li className="flex gap-2 md:gap-3 text-xs md:text-sm text-slate-400 hover:text-cyan-400 transition">
                        <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        Developing full-stack applications using MERN stack
                      </li>
                      <li className="flex gap-2 md:gap-3 text-xs md:text-sm text-slate-400 hover:text-cyan-400 transition">
                        <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        Integrating third-party APIs like Deepgram for advanced features
                      </li>
                      <li className="flex gap-2 md:gap-3 text-xs md:text-sm text-slate-400 hover:text-cyan-400 transition">
                        <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        Managing cloud deployment and database optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border animate-slide-right transform hover:scale-102 transition-transform duration-300">
              <div className="gradient-border-content p-6 md:p-8 hover:bg-slate-900/50 transition">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-violet-500/10 rounded-lg animate-float flex-shrink-0" style={{animationDelay: '0.5s'}}>
                    <Code2 className="text-violet-400 w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-violet-400 mb-1">Java Full Stack Development</h3>
                    <p className="text-sm md:text-base text-slate-400 mb-3 md:mb-4">PIE INFOCOMM PVT LTD • June - August 2024</p>
                    <ul className="space-y-2">
                      <li className="flex gap-2 md:gap-3 text-xs md:text-sm text-slate-400 hover:text-violet-400 transition">
                        <ArrowRight className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                        Completed comprehensive Java Full Stack training program
                      </li>
                      <li className="flex gap-2 md:gap-3 text-xs md:text-sm text-slate-400 hover:text-violet-400 transition">
                        <ArrowRight className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                        Developed expertise in front-end and back-end technologies
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-16 md:py-24 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Let's Work Together</h2>
          <p className="text-slate-400 text-sm md:text-base lg:text-lg mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex gap-4 md:gap-6 justify-center mb-8 md:mb-12 flex-wrap">
            <a href="mailto:chdineshmishra02@gmail.com" className="gradient-border hover:scale-110 transition-transform hover-wiggle">
              <div className="gradient-border-content p-4 md:p-6">
                <Mail className="text-cyan-400 animate-float w-6 h-6 md:w-7 md:h-7" />
              </div>
            </a>
            <a href="tel:+916394585224" className="gradient-border hover:scale-110 transition-transform hover-wiggle">
              <div className="gradient-border-content p-4 md:p-6">
                <Phone className="text-green-400 animate-float w-6 h-6 md:w-7 md:h-7" style={{animationDelay: '0.3s'}} />
              </div>
            </a>
            <a href="https://github.com/dineshchandra24" target="_blank" rel="noopener noreferrer" className="gradient-border hover:scale-110 transition-transform hover-wiggle">
              <div className="gradient-border-content p-4 md:p-6">
                <Github className="text-violet-400 animate-float w-6 h-6 md:w-7 md:h-7" style={{animationDelay: '0.5s'}} />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/dinesh-chandra-mishra/" target="_blank" rel="noopener noreferrer" className="gradient-border hover:scale-110 transition-transform hover-wiggle">
              <div className="gradient-border-content p-4 md:p-6">
                <Linkedin className="text-blue-400 animate-float w-6 h-6 md:w-7 md:h-7" style={{animationDelay: '1s'}} />
              </div>
            </a>
          </div>

          <div className="space-y-1 md:space-y-2 text-slate-500 font-mono text-xs md:text-sm">
            <p>Phone: +91 6394585224</p>
            <p>Email: chdineshmishra02@gmail.com</p>
          </div>
        </div>
      </section>

      <footer className="relative py-6 md:py-8 px-4 border-t border-slate-800 text-center text-slate-500 z-10 text-xs md:text-sm">
        <p>2025 Dinesh Chandra Mishra. Designed and Built with passion.</p>
      </footer>
    </div>
  );
}
