import React, { useState, useRef, useEffect } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Download, Sparkles, Image } from 'lucide-react';

export const CreativeGeneratorPage = () => {
  const [brand, setBrand] = useState('NEXURA ENTERPRISES');
  const [headline, setHeadline] = useState('BUILD THE DIGITAL SYSTEMS THAT MOVE BUSINESSES FORWARD');
  const [subtext, setSubtext] = useState('SEO • Web Development • AI Solutions • Automations');
  const [ratio, setRatio] = useState('1:1'); // 1:1, 9:16, 16:9
  const [gradient, setGradient] = useState('teal-orange');

  const canvasRef = useRef(null);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = 600;
    let height = 600;
    if (ratio === '9:16') {
      width = 540;
      height = 960;
    } else if (ratio === '16:9') {
      width = 960;
      height = 540;
    }

    canvas.width = width;
    canvas.height = height;

    // Background Gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    if (gradient === 'teal-orange') {
      grad.addColorStop(0, '#0F2B2A');
      grad.addColorStop(0.5, '#071816');
      grad.addColorStop(1, '#1A0E08');
    } else if (gradient === 'dark-emerald') {
      grad.addColorStop(0, '#051811');
      grad.addColorStop(1, '#0F2B2A');
    } else {
      grad.addColorStop(0, '#0F2B2A');
      grad.addColorStop(1, '#0C1A24');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Subtle Grid pattern
    ctx.strokeStyle = 'rgba(20, 184, 166, 0.15)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Border Glow
    ctx.strokeStyle = '#14B8A6';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    // Accent Pill Badge
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#14B8A6';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(40, 40, 180, 32, 16);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#F97316';
    ctx.font = 'bold 11px JetBrains Mono, monospace';
    ctx.fillText('HIGH-CONVERTING AD', 55, 60);

    // Brand Watermark
    ctx.fillStyle = '#14B8A6';
    ctx.font = 'bold 14px Space Grotesk, sans-serif';
    ctx.fillText(brand, 40, height - 50);

    // Headline Text Wrap
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 26px Space Grotesk, sans-serif';
    const words = headline.split(' ');
    let line = '';
    let yPos = 140;

    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' ';
      let metrics = ctx.measureText(testLine);
      let testWidth = metrics.width;
      if (testWidth > width - 80 && n > 0) {
        ctx.fillText(line, 40, yPos);
        line = words[n] + ' ';
        yPos += 36;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 40, yPos);

    // Subtext
    ctx.fillStyle = '#CBD5E1';
    ctx.font = '13px Inter, sans-serif';
    ctx.fillText(subtext, 40, yPos + 40);
  };

  useEffect(() => {
    drawCanvas();
  }, [brand, headline, subtext, ratio, gradient]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `nexura-creative-${ratio.replace(':', 'x')}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <>
      <SEOHead
        title="Free AI Ad Creative Generator"
        description="Build high-converting on-brand ad creatives in minutes. Customize headlines, dimensions, and download crisp PNG visuals instantly."
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <Breadcrumbs items={[{ label: 'Resources', link: '/resources' }, { label: 'Creative Generator' }]} />

          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Free Interactive Tool</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              AI-Powered <span className="text-[#14B8A6]">Creative Generator</span>.
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl font-sans">
              Generate high-impact ad banners and visual social assets in seconds. Customize messaging, aspect ratios, and export high-res PNG files instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Controls */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 shadow-lg">
              <h2 className="text-lg font-bold font-heading text-[#0F2B2A]">Creative Controls</h2>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Brand Name</label>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3 py-2 text-xs text-slate-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Main Headline</label>
                <textarea
                  rows={3}
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3 py-2 text-xs text-slate-900 outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Supporting Subtext</label>
                <input
                  type="text"
                  value={subtext}
                  onChange={(e) => setSubtext(e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3 py-2 text-xs text-slate-900 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Aspect Ratio</label>
                  <select
                    value={ratio}
                    onChange={(e) => setRatio(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3 py-2 text-xs text-slate-900 outline-none"
                  >
                    <option value="1:1">1:1 Square (Feed)</option>
                    <option value="9:16">9:16 Story / Reel</option>
                    <option value="16:9">16:9 Landscape</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Color Theme</label>
                  <select
                    value={gradient}
                    onChange={(e) => setGradient(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3 py-2 text-xs text-slate-900 outline-none"
                  >
                    <option value="teal-orange">Teal & Orange Glow</option>
                    <option value="dark-emerald">Dark Emerald</option>
                    <option value="cyber-cyan">Cyber Cyan</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleDownload}
                className="w-full py-3.5 rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download High-Res Creative (PNG)</span>
              </button>
            </div>

            {/* Live Canvas Canvas Preview */}
            <div className="lg:col-span-7 bg-[#0F2B2A] p-6 rounded-3xl border border-[#14B8A6]/30 flex flex-col items-center justify-center space-y-4 min-h-[400px] shadow-xl">
              <div className="text-xs font-mono text-slate-200 flex items-center gap-2 font-bold">
                <Image className="w-4 h-4 text-[#14B8A6]" /> Live Canvas Render ({ratio})
              </div>
              
              <div className="max-w-full overflow-hidden rounded-2xl border-2 border-[#14B8A6] shadow-2xl bg-[#0F2B2A]">
                <canvas ref={canvasRef} className="max-w-full max-h-[500px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
