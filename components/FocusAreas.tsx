'use client';

import { IconCpu, IconLayers, IconSpark } from './icons';

export default function FocusAreas() {
  const items = [
    {
      icon: <IconCpu size={22} />, title: 'AI-Driven Platforms',
      text: 'Building enterprise AI platforms like PRISM that turn standards into agent-consumable rules.'
    },
    {
      icon: <IconLayers size={22} />, title: 'Enterprise Architecture',
      text: 'Leading standards and governance across Web, Security, and AI domains.'
    },
    {
      icon: <IconSpark size={22} />, title: 'Developer Experience',
      text: 'Modernizing platforms and productivity with flags, A/B testing, and tooling.'
    }
  ];
  return (
    <div className="stagger-animate mt-10">
      <div className="clean-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Current Focus Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gray-50 ring-1 ring-gray-200 flex items-center justify-center mx-auto mb-4 text-gray-700">
                {it.icon}
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{it.title}</h4>
              <p className="text-sm text-gray-600">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

