import React, { useState } from 'react';
import { Search, Globe, Bot, Cpu, Workflow, TrendingUp } from 'lucide-react';

export const HeroVisual = () => {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    { id: 'seo', label: 'SEO', icon: Search, x: 280, y: 65, color: '#14B8A6', detail: 'Organic Search Optimization & Rankings' },
    { id: 'web', label: 'Web Platform', icon: Globe, x: 345, y: 175, color: '#0F2B2A', detail: 'Ultra-Fast React Flagship Architecture' },
    { id: 'chatbots', label: 'AI Chatbots', icon: Bot, x: 280, y: 285, color: '#F97316', detail: '24/7 Automated Lead Intake & Qualification' },
    { id: 'automation', label: 'Automations', icon: Workflow, x: 120, y: 285, color: '#14B8A6', detail: 'System & Workflow Synchronization' },
    { id: 'ai', label: 'AI Systems', icon: Cpu, x: 55, y: 175, color: '#0F2B2A', detail: 'Intelligent Knowledge & LLM Agents' },
    { id: 'marketing', label: 'Digital Growth', icon: TrendingUp, x: 120, y: 65, color: '#F97316', detail: 'Multi-Channel Customer Acquisition' }
  ];

  const centerNode = { x: 200, y: 175 };

  const activeNodeData = activeNode ? nodes.find(n => n.id === activeNode) : null;

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center p-2">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial from-[#14B8A6]/15 via-[#F97316]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Connected Network Canvas / SVG */}
      <div className="w-full relative">
        <svg className="w-full h-auto overflow-visible" viewBox="0 0 400 350">
          <defs>
            <linearGradient id="lineGlowTealOrangeLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Outer Connection Ring */}
          <circle
            cx={centerNode.x}
            cy={centerNode.y}
            r="125"
            fill="none"
            stroke="rgba(20, 184, 166, 0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          {/* Connecting Lines */}
          {nodes.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <g key={`line-${node.id}`}>
                <line
                  x1={centerNode.x}
                  y1={centerNode.y}
                  x2={node.x}
                  y2={node.y}
                  stroke={isActive ? '#F97316' : 'rgba(20, 184, 166, 0.35)'}
                  strokeWidth={isActive ? '2.5' : '1.5'}
                  className="transition-all duration-300"
                />
                {/* Animated Data Signal Particle */}
                <line
                  x1={centerNode.x}
                  y1={centerNode.y}
                  x2={node.x}
                  y2={node.y}
                  stroke="url(#lineGlowTealOrangeLight)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-signal-flow"
                />
              </g>
            );
          })}

          {/* Central Core Nexura Logo Node */}
          <g className="cursor-pointer">
            <circle
              cx={centerNode.x}
              cy={centerNode.y}
              r="44"
              fill="#FFFFFF"
              stroke="#14B8A6"
              strokeWidth="2.5"
              className="shadow-lg"
            />
            <circle
              cx={centerNode.x}
              cy={centerNode.y}
              r="36"
              fill="#0F2B2A"
              className="animate-node-pulse"
              style={{ transformOrigin: '200px 175px' }}
            />

            {/* Embedded Image Logo */}
            <foreignObject x={centerNode.x - 28} y={centerNode.y - 28} width="56" height="56">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#F97316] p-0.5 bg-white shadow-md">
                <img
                  src="/logo.jpg"
                  alt="Nexura Logo Node"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </foreignObject>
          </g>

          {/* Satellite Nodes */}
          {nodes.map((node) => {
            const IconComponent = node.icon;
            const isActive = activeNode === node.id;
            return (
              <g
                key={node.id}
                className="cursor-pointer group transition-all duration-300"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isActive ? '25' : '21'}
                  fill={isActive ? '#0F2B2A' : '#FFFFFF'}
                  stroke={isActive ? '#F97316' : 'rgba(20, 184, 166, 0.5)'}
                  strokeWidth="2"
                  className="transition-all duration-300 shadow-sm"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="17"
                  fill={isActive ? '#0F2B2A' : '#F8FAFC'}
                />

                {/* Icon */}
                <foreignObject x={node.x - 10} y={node.y - 10} width="20" height="20">
                  <div className="w-full h-full flex items-center justify-center">
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#F97316]' : 'text-[#14B8A6]'} transition-colors`} />
                  </div>
                </foreignObject>

                {/* Label Pill */}
                <rect
                  x={node.x - (node.label === 'SEO' ? 26 : 40)}
                  y={node.y + 22}
                  width={node.label === 'SEO' ? 52 : 80}
                  height="18"
                  rx="9"
                  fill="#FFFFFF"
                  stroke={isActive ? '#F97316' : '#CBD5E1'}
                  strokeWidth="1"
                  className="shadow-xs"
                />
                <text
                  x={node.x}
                  y={node.y + 34}
                  textAnchor="middle"
                  fill={isActive ? '#F97316' : '#0F2B2A'}
                  fontSize="9.5"
                  fontWeight="700"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Clean Dedicated Interactive Detail Card Below Graph (Zero Overlap!) */}
      <div className="w-full mt-2 min-h-[52px]">
        {activeNodeData ? (
          <div className="w-full bg-white border-2 border-[#F97316] p-2.5 rounded-xl shadow-lg text-center transition-all animate-in fade-in">
            <span className="text-xs font-bold text-[#0F2B2A] font-heading mr-1.5">
              {activeNodeData.label}:
            </span>
            <span className="text-xs text-slate-700 font-sans font-medium">
              {activeNodeData.detail}
            </span>
          </div>
        ) : (
          <div className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-center text-xs text-slate-500 font-sans font-medium shadow-xs">
            <span>Hover anything to view details</span>
          </div>
        )}
      </div>
    </div>
  );
};
