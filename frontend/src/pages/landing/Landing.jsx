import React, { useEffect, useState } from "react";
import {
  MessageCircle,
  Zap,
  Shield,
  Users,
  Globe,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const navigate = useNavigate();

  const messages = [
    { id: 1, user: "Alice", text: "Hello! How are you doing?", delay: 0 },
    {
      id: 2,
      user: "Bob",
      text: "I'm doing great, thanks for asking!",
      delay: 2000,
    }
  ]

  useEffect(() => {
    if (messageIndex >= messages.length) {
      setTimeout(() => {
        setMessageIndex(0);
        setCurrentMessage("");
      }, 2000);
      return;
    }

    const message = messages[messageIndex];

    const startTyping = setTimeout(() => {
      setIsTyping(true);
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex <= message.text.length) {
          setCurrentMessage(message.text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => {
            setMessageIndex((prev) => prev + 1);
            setCurrentMessage("");
          }, 1500);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }, message.delay);

    return () => clearTimeout(startTyping);
  }, [messageIndex]);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const getUserColor = (user) => {
    const colors = {
      Alice: "bg-indigo-500",
      Bob: "bg-purple-500",
    };
    return colors[user] || "bg-gray-500";
  };

  const getUserInitial = (user) => user.charAt(0);

  return (
    <div className="h-full w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                PulseTalk
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                About
              </a>
              <button
                onClick={handleLogin}
                className="text-gray-700 hover:text-indigo-600 transition font-medium"
              >
                Login
              </button>
              <button
                onClick={handleSignup}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition transform hover:scale-105"
              >
                Sign Up
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a
                href="#features"
                className="block text-gray-700 hover:text-indigo-600 transition"
              >
                Features
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-indigo-600 transition"
              >
                About
              </a>
              <button
                onClick={handleLogin}
                className="block w-full text-left text-gray-700 hover:text-indigo-600 transition font-medium"
              >
                Login
              </button>
              <button
                onClick={handleSignup}
                className="block w-full bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Connect Instantly,
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Chat Effortlessly
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Experience real-time communication like never before. Fast, secure,
            and designed for the way you connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleSignup}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleLogin}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition border-2 border-indigo-600"
            >
              Sign In
            </button>
          </div>

          {/* <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 justify-end">
                  <div className="flex-1 text-right">
                    <div className="h-4 bg-indigo-100 rounded w-3/4 mb-2 ml-auto"></div>
                    <div className="h-4 bg-indigo-100 rounded w-1/2 ml-auto"></div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-600"></div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-600"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Chat Demo Section with Typing Animation */}
          <div className="mt-12 ablsolute z-50 ">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-2xl p-1 mb-0 max-w-4xl h mx-auto">
              <div className="bg-white rounded-xl overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      A
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      B
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">Chatting to Alice</h3>
                    <p className="text-white/80 text-xs">online</p>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Chat Messages */}
                <div className="p-6  min-h-[230px] bg-gray-50">
                  {messages.slice(0, messageIndex + 1).map((msg, idx) => {
                    const isCurrentMessage = idx === messageIndex;
                    const isAlice = msg.user === 'Alice';
                    
                    return (
                      <div key={msg.id} className={`flex items-start space-x-3 ${!isAlice ? 'justify-end' : ''}`}>
                        {isAlice && (
                          <div className={`w-10 h-10 rounded-full ${getUserColor(msg.user)} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                            {getUserInitial(msg.user)}
                          </div>
                        )}
                        
                        <div className={`flex flex-col ${!isAlice ? 'items-end' : ''} max-w-[70%]`}>
                          <span className="text-xs text-gray-500 mb-1 text-start font-medium">{msg.user}</span>
                          <div className={`rounded-2xl px-4 py-3 ${
                            isAlice 
                              ? 'bg-white border border-gray-200' 
                              : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                          }`}>
                            {isCurrentMessage && isTyping ? (
                              <div className="flex items-center  space-x-1">
                                <span className={isAlice ? 'text-gray-800' : 'text-white'}>
                                  {currentMessage}
                                </span>
                                <span className="inline-block w-0.5 h-4 bg-current animate-pulse"></span>
                              </div>
                            ) : (
                              <p className={isAlice ? 'text-gray-800' : 'text-white'}>
                                {idx < messageIndex ? msg.text : currentMessage}
                              </p>
                            )}
                          </div>
                          <span className="text-xs text-start text-gray-400 mt-1">Just now</span>
                        </div>

                        {!isAlice && (
                          <div className={`w-10 h-10 rounded-full ${getUserColor(msg.user)} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                            {getUserInitial(msg.user)}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Typing Indicator for next user */}
                  {!isTyping && messageIndex < messages.length - 1 && (
                    <div className={`flex items-start space-x-3 ${messages[messageIndex + 1].user !== 'Alice' ? 'justify-end' : ''}`}>
                      {messages[messageIndex + 1].user === 'Alice' && (
                        <div className={`w-10 h-10 rounded-full ${getUserColor(messages[messageIndex + 1].user)} flex items-center justify-center text-white font-bold`}>
                          {getUserInitial(messages[messageIndex + 1].user)}
                        </div>
                      )}
                      <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-gray-100 text-start rounded-full px-4 py-3">
                      <p className="text-gray-400 text-sm">Type a message...</p>
                    </div>
                    <button className="rotate-45 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full p-3 hover:shadow-lg transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Stay Connected
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed for seamless communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 center ">
            <div className="p-6 rounded-xl border-2 border-gray-100 hover:border-indigo-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Instant Messaging
              </h3>
              <p className="text-gray-600">
                Send and receive messages in real-time with zero delay. Your
                conversations flow naturally.
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 border-gray-100 hover:border-purple-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure & Private
              </h3>
              <p className="text-gray-600">
                End-to-end encryption keeps your conversations private and
                secure from prying eyes.
              </p>
            </div>

            {/* <div className="p-6 rounded-xl border-2 border-gray-100 hover:border-green-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Group Chats
              </h3>
              <p className="text-gray-600">
                Create groups, manage members, and keep everyone in sync with
                powerful group features.
              </p>
            </div> */}

            <div className="p-6 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cross-Platform
              </h3>
              <p className="text-gray-600">
                Access your chats from anywhere on any device. Your
                conversations sync seamlessly.
              </p>
            </div>

            {/* <div className="p-6 rounded-xl border-2 border-gray-100 hover:border-pink-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Rich Media
              </h3>
              <p className="text-gray-600">
                Share photos, videos, files, and more. Express yourself with
                emojis and reactions.
              </p>
            </div> */}

            <div className="p-6 rounded-xl border-2 border-gray-100 hover:border-orange-500 hover:shadow-lg transition ">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Built for speed with optimized performance. Messages delivered
                in milliseconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Chatting?
          </h2>
          <p className="text-xl text-indigo-100 mb-10">
            Join thousands of users already connecting through PulseTalk
          </p>
          <button
            onClick={handleSignup}
            className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
          >
            Create Your Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageCircle className="w-6 h-6 text-indigo-400" />
            <span className="text-xl font-bold text-white">PulseTalk</span>
          </div>
          <p className="text-gray-400">
            © 2025 PulseTalk. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
