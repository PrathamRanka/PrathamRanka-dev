'use client';

import React from 'react';

const metrics = [
	{
		id: 1,
		value: '1+',
		label: 'Year of Experience',
		description: 'Dedicating to advance my skills in frontend development.',
	},
	{
		id: 2,
		value: 'OWASP',
		label: 'Executive Member',
		description:
			'Organized HACKOWASP 7.0, a major Hackathon attracting over 500+ participants across the nation. Collaborated with teams to ensure smooth event execution, including logistics, participant management, and technical setup.',
	},
	{
		id: 3,
		value: '7+',
		label: 'Technologies Learnt',
		description: 'Proficient in various programming languages and frameworks.',
	},
	{
		id: 4,
		value: '99%',
		label: 'Code Quality',
		description: 'Committed to writing clean, efficient, and maintainable code.',
	},
	{
		id: 5,
		value: '100+',
		label: 'Commits on GitHub',
		description: 'Active contributor to open-source and personal projects.',
	},
{
    id: 6,
    value: '2x',
    label: 'Hackathon Finalist',
    description: `• Hackspire 2025 Finalist – Ranked in the Top 15 out of 200+ teams at Thapar Institute of Technology, Patiala • Innovate 2025 Finalist – Among 300+ teams in NIT Bhopal and TIET hackathon, showcasing exceptional problem-solving skills and collaborative teamwork.`,
},
];

export const KeyMetrics = () => {
	return (
		<section className='min-h-screen bg-[#131313] text-white flex items-center justify-center p-8'>
			<div className='w-full glass border border-white/10 rounded-2xl p-10'>
				<h2 className='text-6xl font-bold mb-12 text-center'>
					Key <span className='text-purple-500'>Metrics</span>
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{metrics.map((metric) => (
						<div key={metric.id} className='flex flex-col'>
							<h3 className='text-5xl font-bold text-purple-300 mb-2'>
								{metric.value}
							</h3>
							<p className='text-xl font-semibold mb-2'>{metric.label}</p>
							<p className='text-gray-400'>{metric.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
