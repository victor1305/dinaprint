interface SectionPrincipalBannerProps {
	title: string;
	subtitle: string;
}

const SectionPrincipalBanner = ({ title, subtitle }: SectionPrincipalBannerProps) => (
	<div
		className="relative bg-transparent"
		style={{
			backgroundImage: "linear-gradient(130deg, #ff6b00 0%, rgba(255,107,0,0.59) 80%)",
		}}
	>
		<div className="absolute bg-[url('/BG-contact-hero-New.png')] bg-cover bg-[left_center] bg-no-repeat w-full h-full top-0 left-0 opacity-20 lg:bg-center" />
		<div className="absolute rotate-180 bottom-[-1px] left-0 overflow-hidden w-full">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1000 100"
				preserveAspectRatio="none"
				style={{
					width: "calc(260% + 1.3px)",
					transform: "translateX(-50%) rotateY(180deg)",
				}}
				className="block relative left-1/2 h-[50px] overflow-hidden lg:h-[120px]"
			>
				<title>Separador decorativo</title>
				<path
					className="fill-white !overflow-hidden"
					d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
				/>
			</svg>
		</div>
		<div className="relative mx-auto flex flex-col items-center justify-center min-h-[280px] lg:min-h-[500px] max-w-[1200px]">
			<h1 className="font-bold text-[30px] lg:text-[60px] text-center text-white">{title}</h1>
			<p className="font-semibold text-xl lg:text-2xl text-center text-white">{subtitle}</p>
		</div>
	</div>
);

export default SectionPrincipalBanner;
