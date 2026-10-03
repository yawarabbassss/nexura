import React, { useState, useRef, useEffect } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Download, Sparkles, Image } from 'lucide-react';

export const BlogImageGeneratorPage = () => {
  const [title, setTitle] = useState('How Technical SEO Architecture Drives Sustainable B2B Lead Pipelines');
  const [category, setCategory] = useState('TECHNICAL SEO');
  const [readTime, setReadTime] = useState('6 MIN READ');

  const canvasRef = useRef(null);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = 1200;
    const height = 630;

    canvas.width = width;
    canvas.height = height;

    // Background Gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#0F2B2A');
    grad.addColorStop(0.6, '#071816');
    grad.addColorStop(1, '#1A0E08');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Subtle Grid pattern
    ctx.strokeStyle = 'rgba(20, 184, 166, 0.15)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Outer Glow Border
    ctx.strokeStyle = '#14B8A6';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    // Category Pill Badge
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#F97316';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(80, 80, 200, 40, 20);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#F97316';
    ctx.font = 'bold 14px JetBrains Mono, monospace';
    ctx.fillText(category, 100, 105);

    // Read Time Badge
    ctx.fillStyle = '#14B8A6';
    ctx.font = 'bold 14px JetBrains Mono, monospace';
    ctx.fillText(`•  ${readTime}`, 300, 105);

    // Headline Wrap
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 44px Space Grotesk, sans-serif';
    const words = title.split(' ');
    let line = '';
    let yPos = 220;

    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' ';
      let metrics = ctx.measureText(testLine);
      if (metrics.width > width - 180 && n > 0) {
        ctx.fillText(line, 80, yPos);
        line = words[n] + ' ';
        yPos += 58;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 80, yPos);

    // Bottom Watermark
    ctx.fillStyle = '#14B8A6';
    ctx.font = 'bold 18px Space Grotesk, sans-serif';
    ctx.fillText('NEXURA ENTERPRISES  —  DIGITAL GROWTH × TECH', 80, height - 80);
  };

  useEffect(() => {
    drawCanvas();
  }, [title, category, readTime]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `nexura-featured-image-1200x630.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <>
      <SEOHead
        title="Blog & Featured Image Generator (1200x630)"
        description="Generate on-brand 1200x630 featured header visual banners for articles and social sharing."
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <Breadcrumbs items={[{ label: 'Resources', link: '/resources' }, { label: 'Blog Image Generator' }]} />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Free Interactive Tool</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              Blog & Article <span className="text-[#14B8A6]">Featured Image Generator</span>.
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl font-sans">
              Create clean 1200x630 header images formatted specifically for social sharing and OpenGraph metadata.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 shadow-lg">
              <h2 className="text-lg font-bold font-heading text-[#0F2B2A]">Banner Settings</h2>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Article Title</label>
                <textarea
                  rows={4}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3 py-2 text-xs text-slate-900 outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Category Tag</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3 py-2 text-xs text-slate-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Read Time Tag</label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3 py-2 text-xs text-slate-900 outline-none"
                />
              </div>

              <button
                onClick={handleDownload}
                className="w-full py-3.5 rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Featured Image (1200x630 PNG)</span>
              </button>
            </div>

            <div className="lg:col-span-7 bg-[#0F2B2A] p-6 rounded-3xl border border-[#14B8A6]/30 flex flex-col items-center justify-center space-y-4 shadow-xl">
              <div className="text-xs font-mono text-slate-200 flex items-center gap-2 font-bold">
                <Image className="w-4 h-4 text-[#14B8A6]" /> Live 1200x630 OpenGraph Render
              </div>
              <div className="max-w-full overflow-hidden rounded-2xl border-2 border-[#14B8A6] shadow-2xl bg-[#0F2B2A]">
                <canvas ref={canvasRef} className="max-w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
