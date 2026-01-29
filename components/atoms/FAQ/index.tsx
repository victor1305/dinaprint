"use client";

import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

export interface FAQItem {
	question: string;
	answer: string;
}

interface FAQProps {
	title?: string;
	items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ title = "Preguntas frecuentes", items }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleItem = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	// Schema FAQ para SEO
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};

	return (
		<section className="py-10">
			<script type="application/ld+json" suppressHydrationWarning>
				{JSON.stringify(faqSchema)}
			</script>
			<h2 className="text-2xl lg:text-3xl font-semibold text-secondary pb-6">{title}</h2>
			<div className="space-y-3">
				{items.map((item, index) => (
					<div key={item.question} className="rounded-xl shadow-findBox bg-white overflow-hidden">
						<button
							type="button"
							className="w-full flex items-center justify-between p-5 text-left font-semibold text-base lg:text-lg hover:text-primary transition-colors"
							onClick={() => toggleItem(index)}
							aria-expanded={openIndex === index}
						>
							<span>{item.question}</span>
							{openIndex === index ? (
								<RiArrowUpSLine className="w-6 h-6 text-primary flex-shrink-0" />
							) : (
								<RiArrowDownSLine className="w-6 h-6 text-secondary flex-shrink-0" />
							)}
						</button>
						<div
							className={`overflow-hidden transition-all duration-300 ${
								openIndex === index ? "max-h-96 pb-5 px-5" : "max-h-0"
							}`}
						>
							<p className="text-base leading-relaxed">{item.answer}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FAQ;
