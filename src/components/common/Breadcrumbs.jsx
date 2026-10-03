import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-400">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-[#2DD4BF] transition-colors">
            <Home className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            {item.link ? (
              <Link to={item.link} className="hover:text-[#2DD4BF] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#F97316] font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
