"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Briefcase, FileEdit, ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen pt-28 md:pt-36 pb-24 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-amber-50">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-amber-200 rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3" />
      
      {/* Dynamic geometric elements */}
      <div className="absolute top-20 left-[10%] w-12 h-12 bg-indigo-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-[30%] right-[5%] w-20 h-20 bg-amber-400 rounded-lg opacity-20 rotate-45 animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[20%] left-[20%] w-16 h-16 bg-teal-400 rounded-full opacity-20 animate-ping" style={{ animationDuration: '5s' }} />
      <div className="absolute top-[15%] left-[40%] w-8 h-8 border-2 border-indigo-300 rounded-full opacity-30" />
      <div className="absolute bottom-[15%] right-[30%] w-10 h-10 border-2 border-amber-300 rounded-lg opacity-30 rotate-12" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main hero content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
          {/* Left side content - enhanced */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-100 text-indigo-600 font-medium text-sm shadow-sm mb-2">
                <Star size={16} className="mr-2" />
                <span>AI-Powered Career Assistant</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Accelerate Your 
                <span className="block mt-2" style={{
                  background: "linear-gradient(to right, rgb(79, 70, 229), rgb(219, 39, 119))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>Career Journey</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-xl">
                Professional tools designed to help you land your dream job and advance your career faster than ever before.
              </p>
            </div>
            
            {/* Three featured buttons - bigger and more attractive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button 
                size="lg" 
                className="h-auto py-8 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-indigo-500/90 to-indigo-600/90 hover:from-indigo-600 hover:to-indigo-700 text-white border-none shadow-lg shadow-indigo-200/50 transform transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/dashboard" passHref>
                  <div className="bg-indigo-400/30 p-4 rounded-full">
                    <Briefcase size={32} className="text-white" />
                  </div>
                  <span className="text-xl font-semibold">Industry Insights</span>
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className="h-auto py-8 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-amber-500/90 to-amber-600/90 hover:from-amber-600 hover:to-amber-700 text-white border-none shadow-lg shadow-amber-200/50 transform transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/resume-builder">
                  <div className="bg-amber-400/30 p-4 rounded-full">
                    <FileText size={32} className="text-white" />
                  </div>
                  <span className="text-xl font-semibold">Build Resume</span>
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className="h-auto py-8 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-teal-500/90 to-teal-600/90 hover:from-teal-600 hover:to-teal-700 text-white border-none shadow-lg shadow-teal-200/50 transform transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/cover-letter">
                  <div className="bg-teal-400/30 p-4 rounded-full">
                    <FileEdit size={32} className="text-white" />
                  </div>
                  <span className="text-xl font-semibold">Cover Letter</span>
                </Link>
              </Button>
            </div>
            
            {/* Additional CTA */}
            <Link href="/features" className="inline-flex items-center text-indigo-600 font-medium text-lg hover:text-indigo-800 transition-colors cursor-pointer mt-4">
              <span>Explore all features</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          
          {/* Right side illustration - enhanced */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg transform transition-all duration-500 hover:scale-[1.02]">
              {/* Image with enhanced styling */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white p-3 rotate-1 transform hover:rotate-0 transition-transform duration-500">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/banner.jpeg"
                    width={800}
                    height={600}
                    alt="Career Dashboard"
                    className="rounded-xl object-cover hover:scale-105 transition-all duration-700"
                    priority
                  />
                </div>
                
                {/* Dashboard elements overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-medium">Interactive Dashboard Demo</p>
                    <p className="text-sm opacity-80">Click to explore features</p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-indigo-100 rotate-3 transform hover:rotate-0 transition-transform">
                <Briefcase size={32} className="text-indigo-500" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-amber-100 -rotate-3 transform hover:rotate-0 transition-transform">
                <FileText size={32} className="text-amber-500" />
              </div>
              
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-xl border border-teal-100 rotate-6 transform hover:rotate-0 transition-transform">
                <FileEdit size={32} className="text-teal-500" />
              </div>
              
              {/* Decorative status indicators */}
              <div className="absolute top-8 left-8 flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;