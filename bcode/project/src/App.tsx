import React from 'react';
import { Calendar, Keyboard, Code2, Globe2, Flag, BrainCircuit, Clock } from 'lucide-react';

interface EventForm {
  title: string;
  description: string;
  icon: React.ReactNode;
  formUrl: string;
  timing: string;
  venue: string;
}

const eventForms: EventForm[] = [
  {
    title: "Quiz Competition",
    description: "Test your technical knowledge in our comprehensive tech quiz challenge",
    icon: <BrainCircuit className="w-6 h-6 text-[#000510]" />,
    formUrl: "https://forms.google.com/your-quiz-form",
    timing: "9:00 AM - 11:00 AM",
    venue: "Auditorium"
  },
  {
    title: "Blind Typing",
    description: "Show off your typing speed and accuracy without looking at the keyboard",
    icon: <Keyboard className="w-6 h-6 text-[#000510]" />,
    formUrl: "https://forms.google.com/your-typing-form",
    timing: "11:30 AM - 1:00 PM",
    venue: "Computer Lab 1"
  },
  {
    title: "Web Design",
    description: "Create stunning websites and showcase your design skills",
    icon: <Globe2 className="w-6 h-6 text-[#000510]" />,
    formUrl: "https://forms.google.com/your-webdesign-form",
    timing: "2:00 PM - 5:00 PM",
    venue: "Computer Lab 2"
  },
  {
    title: "Capture The Flag",
    description: "Put your cybersecurity skills to the test in our CTF challenge",
    icon: <Flag className="w-6 h-6 text-[#000510]" />,
    formUrl: "https://forms.google.com/your-ctf-form",
    timing: "10:00 AM - 4:00 PM",
    venue: "Online"
  },
  {
    title: "Coding Competition",
    description: "Solve complex programming challenges and compete with the best",
    icon: <Code2 className="w-6 h-6 text-[#000510]" />,
    formUrl: "https://forms.google.com/your-coding-form",
    timing: "9:30 AM - 3:30 PM",
    venue: "Computer Lab 3"
  }
];

function App() {
  return (
    <div 
      className="min-h-screen bg-[#000510] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 5, 16, 0.9), rgba(0, 5, 16, 0.7)), url('/src/bytecode.jpg')`,
      }}
    >
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 text-center relative">
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <Calendar className="w-8 h-8 sm:w-12 sm:h-12 text-[#00ffff]" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff] animate-pulse">
          BYTECODE 3.0
        </h1>
        <p className="text-lg sm:text-xl text-[#00ffff] max-w-2xl mx-auto opacity-80 mb-6 px-4">
          Join us for an incredible journey through technology, innovation, and creativity.
          Register for our exciting events below!
        </p>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] p-[2px] rounded-full">
          <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#000510]">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ffff]" />
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-transparent bg-clip-text">
              Registration closes on March 31, 2025
            </span>
          </div>
        </div>
      </header>

      {/* Event Forms Grid */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {eventForms.map((form, index) => (
            <div
              key={index}
              className="bg-[#000510] bg-opacity-80 border border-[#00ffff] rounded-xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#00ffff] to-[#ff00ff] mb-4">
                {form.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#00ffff] mb-2">{form.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{form.description}</p>
              <div className="mb-4 sm:mb-6 space-y-2">
                <div className="flex items-center gap-2 text-[#00ffff] text-sm sm:text-base">
                  <Clock className="w-4 h-4" />
                  <span>{form.timing}</span>
                </div>
                <div className="flex items-center gap-2 text-[#00ffff] text-sm sm:text-base">
                  <Calendar className="w-4 h-4" />
                  <span>{form.venue}</span>
                </div>
              </div>
              <a
                href={form.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-2 sm:py-3 px-4 sm:px-6 bg-transparent border border-[#00ffff] text-[#00ffff] font-semibold rounded-lg text-center hover:bg-[#00ffff] hover:text-[#000510] transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] text-sm sm:text-base"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 sm:py-8 text-center text-[#00ffff] opacity-60 text-sm sm:text-base">
        <p>© 2025 BYTECODE 3.0. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;