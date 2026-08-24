"use client";

import type React from "react";

import {
	type FAQItem,
	ContactMain,
	FAQ,
	KnowMore,
	SectionPrincipalBanner,
} from "@/components/atoms";
import { ContactForm, FindUs } from "@/components/molecules";

const Contact: React.FC<{ faqItems?: FAQItem[] }> = ({ faqItems }) => (
	<div>
		<SectionPrincipalBanner title="Contacto" subtitle="Soluciones y servicios gráficos" />
		<div className="p-5 pt-10 lg:flex lg:flex-row-reverse lg:items-center mx-auto w-full max-w-[1200px]">
			<div className="lg:w-[1/2] lg:pl-10">
				<ContactMain />
			</div>
			<div className="lg:w-[1/2]">
				<ContactForm />
			</div>
		</div>
		<div className="pt-10 px-10">
			<FindUs />
		</div>
		{faqItems && faqItems.length > 0 && (
			<section className="px-5 pt-10 mx-auto max-w-[1200px]">
				<FAQ items={faqItems} />
			</section>
		)}
		<KnowMore path={"/servicios"} copy={"VER MÁS"} />
	</div>
);

export default Contact;
