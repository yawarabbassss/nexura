import React, { useState, useRef, useEffect } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Download, Sparkles, Video } from 'lucide-react';

export const YouTubeThumbnailPage = () => {
  const [title, setTitle] = useState('HOW WE GENERATE 100+ LEADS WITH AI AUTOMATION');
  const [badge, setBadge] = useState('STEP BY STEP 2026');
  const [theme, setTheme] = useState('cyan-orange');

  const canvasRef = useRef(null);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = 1280;
    const height = 720;

    canvas.width = width;
    canvas.height = height;

    // Background Gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    if (theme === 'cyan-orange') {
      grad.addColorStop(0, '#0F2B2A');
      grad.addColorStop(0.5, '#071816');
      grad.addColorStop(1, '#1A0E07');
    } else {
      grad.addColorStop(0, '#0F2B2A');
      grad.addColorStop(1, '#051811');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = 'rgba(249, 115, 22, 0.15)';
    ctx.lineWidth = 1.5;
    for (let x = 0; x < width; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Heavy Border
    ctx.strokeStyle = '#F97316';
    ctx.lineWidth = 6;
    ctx.strokeRect(15, 15, width - 30, height - 30);

    // High Impact Badge
    ctx.fillStyle = '#F97316';
    ctx.beginPath();
    ctx.roundRect(80, 80, 260, 48, 8);
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 18px Space Grotesk, sans-serif';
    ctx.fillText(badge, 100, 110);

    // High Contrast Bold Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 52px Space Grotesk, sans-serif';
    const words = title.split(' ');
    let line = '';
    let yPos = 240;

    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' ';
      let metrics = ctx.measureText(testLine);
      if (metrics.width > width - 160 && n > 0) {
        ctx.fillText(line, 80, yPos);
        line = words[n] + ' ';
        yPos += 68;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 80, yPos);

    // Brand Seal
    ctx.fillStyle = '#14B8A6';
    ctx.font = 'bold 20px JetBrains Mono, monospace';
    ctx.fillText('NEXURA DIGITAL GROWTH', 80, height - 80);
  };

  useEffect(() => {
    drawCanvas();
  }, [title, badge, theme]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `nexura-yt-thumbnail-1280x720.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <>
      <SEOHead
        title="YouTube Thumbnail Generator (1280x720)"
        description="Build high-contrast 1280x720 YouTube thumbnails with bold typography, badges, and instant PNG export."
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <Breadcrumbs items={[{ label: 'Resources', link: '/resources' }, { label: 'YouTube Thumbnail Generator' }]} />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Free Interactive Tool</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              YouTube <span className="text-[#14B8A6]">Thumbnail Generator</span> (1280×720).
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl font-sans">
              Create high-CTR YouTube thumbnails formatted at exact 1280x720 resolution with high-contrast text and visual badges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 shadow-lg">
              <h2 className="text-lg font-bold font-heading text-[#0F2B2A]">Thumbnail Settings</h2>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Video Title Text</label>
                <textarea
                  rows={3}
                  value={title}
                  onChange={(e) => setTitle(e.target.value.toUpperCase())}
                  className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3 py-2 text-xs text-slate-900 outline-none resize-none font-mono uppercase"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Badge Text</label>
                <input
                  type="text"
                  value={badge}
                  onChange={(e) => setBadge(e.target.value.toUpperCase())}
                  className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3 py-2 text-xs text-slate-900 outline-none font-mono uppercase"
                />
              </div>

              <button
                onClick={handleDownload}
                className="w-full py-3.5 rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Thumbnail (1280x720 PNG)</span>
              </button>
            </div>

            <div className="lg:col-span-7 bg-[#0F2B2A] p-6 rounded-3xl border border-[#14B8A6]/30 flex flex-col items-center justify-center space-y-4 shadow-xl">
              <div className="text-xs font-mono text-slate-200 flex items-center gap-2 font-bold">
                <Video className="w-4 h-4 text-[#F97316]" /> Live 1280x720 Thumbnail Render
              </div>
              <div className="max-w-full overflow-hidden rounded-2xl border-2 border-[#F97316] shadow-2xl bg-[#0F2B2A]">
                <canvas ref={canvasRef} className="max-w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
