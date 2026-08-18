"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface SlidesProps {
	slides: Array<{
		backImage: string;
		title: string;
		image: string;
		url: string;
	}>;
}

const MainSwiperImages = ({ slides }: SlidesProps) => (
	<Swiper
		centeredSlides={true}
		autoplay={{
			delay: 5000,
			disableOnInteraction: false,
		}}
		loop={true}
		pagination={{
			clickable: true,
		}}
		speed={10}
		navigation={true}
		modules={[EffectFade, Autoplay, Pagination, Navigation]}
		effect="fade"
	>
		{slides.map((slide) => (
			<SwiperSlide key={slide.title}>
				<div className="relative h-[464px]">
					<Image
						src={slide.backImage}
						alt=""
						aria-hidden="true"
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						className="object-cover object-center -z-10"
					/>
					<div className="!animate-swip-main p-8 h-full mx-auto lg:max-w-[360px] flex justify-center flex-col items-center">
						<h3 className="text-[35px] font-bold text-white pb-4 text-center">{slide.title}</h3>
						<Image src={slide.image} width={100} height={120} alt={slide.title} />
						<Link
							href={slide.url}
							className="mt-8 text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl"
						>
							VER MÁS
						</Link>
					</div>
				</div>
			</SwiperSlide>
		))}
	</Swiper>
);

export default MainSwiperImages;
