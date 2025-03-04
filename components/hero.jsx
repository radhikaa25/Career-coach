"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, ArrowRight, Star, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen pt-28 md:pt-36 pb-24 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-amber-50">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-amber-200 rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3" />
      
      {/* Dynamic geometric elements with enhanced animations */}
      <div className="absolute top-20 left-[10%] w-16 h-16 bg-indigo-400 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute top-[30%] right-[5%] w-24 h-24 bg-amber-400 rounded-lg opacity-20 rotate-45 animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[20%] left-[20%] w-20 h-20 bg-teal-400 rounded-full opacity-20 animate-ping" style={{ animationDuration: '5s' }} />
      <div className="absolute top-[15%] left-[40%] w-12 h-12 border-4 border-indigo-300 rounded-full opacity-30 animate-spin" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-[15%] right-[30%] w-16 h-16 border-4 border-amber-300 rounded-lg opacity-30 rotate-12 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[40%] right-[15%] w-10 h-10 border-4 border-teal-300 rounded-full opacity-30 animate-spin" style={{ animationDuration: '10s' }} />
      
      {/* Enhanced grid pattern overlay with gradient */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main hero content - centered layout */}
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto text-center">
          {/* Enhanced badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-100 text-indigo-600 font-medium text-base shadow-md mb-6 transform hover:scale-105 transition-transform">
            <Sparkles size={20} className="mr-2" />
            <span>AI-Powered Career Assistant</span>
            <Zap size={20} className="ml-2" />
          </div>
          
          {/* Enhanced heading */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-8">
            Accelerate Your 
            <span className="block mt-3" style={{
              background: "linear-gradient(to right, rgb(79, 70, 229), rgb(219, 39, 119), rgb(245, 158, 11))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              padding: "0.25rem 0"
            }}>Career Journey</span>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Our professional tools are designed to help you land your dream job and advance your career 
            faster than ever before. Get personalized insights based on industry trends and data-driven recommendations.
          </p>
          
          {/* Single prominent button */}
          <div className="mb-16">
            <Button 
              size="lg" 
              className="h-auto py-8 px-12 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-none shadow-xl shadow-indigo-200/50 transform transition-all duration-300 hover:scale-105 rounded-2xl"
              asChild
            >
              <Link href="/dashboard" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Briefcase size={28} className="text-white" />
                  </div>
                  <div className="text-left">
                    <span className="text-2xl font-bold block">Industry Insights</span>
                    <span className="text-sm font-medium text-white/80">Explore career opportunities</span>
                  </div>
                  <ArrowRight size={24} className="ml-4" />
                </div>
              </Link>
            </Button>
          </div>
          
          {/* Enhanced image container */}
          <div className="relative w-full max-w-4xl mx-auto transform transition-all duration-500 hover:scale-[1.02]">
            {/* Main image with enhanced styling */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white p-3 rotate-1 transform hover:rotate-0 transition-transform duration-500">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/banner.jpeg"
                  width={1200}
                  height={800}
                  alt="Career Dashboard"
                  className="rounded-xl object-cover hover:scale-105 transition-all duration-700"
                  priority
                />
              </div>
              
              {/* Enhanced overlay with gradient and info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Interactive Dashboard Demo</h3>
                  <p className="text-base opacity-90 max-w-lg">Discover how our AI-powered tools can help you analyze job market trends and optimize your career path</p>
                  <button className="mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-2 px-4 rounded-full text-sm font-medium inline-flex items-center transition-colors">
                    Explore features <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Enhanced floating element */}
            <div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-indigo-100 rotate-3 transform hover:rotate-0 transition-transform">
              <Briefcase size={40} className="text-indigo-500" />
            </div>
            
            {/* Decorative status indicators */}
            <div className="absolute top-8 left-8 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;