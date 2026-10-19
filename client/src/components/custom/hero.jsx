
	export default function Hero({ Pfp }) {
		return (
			<div className="flex flex-row items-between gap-5">
                	<section className="py-[112px] pb-[120px] max-[650px]:py-[88px] max-[650px]:pb-[92px]" id="home">
						<span className="text-[11px] font-bold uppercase tracking-[.15em] text-[#718569]">socials/@tahafirozk • github/@TahaK09</span>
						<h1 className="my-[25px] mb-[22px] max-w-[800px] text-[clamp(48px,8vw,94px)] font-semibold leading-[.99] tracking-[-.075em]">im taha, a student, a dev and a content creator.</h1>
						<p className="max-w-[510px] text-[17px] leading-[1.75] text-[#686960] max-[650px]:text-[15px]">
						im not gonna show you my work, i’ll tell you a story instead.
                        </p>
						<div className="mt-[34px] flex items-center gap-6">
							<a className="inline-flex rounded-[4px] bg-[#262822] px-[19px] py-[13px] text-[13px] text-white no-underline transition-colors duration-200 hover:bg-[#66845f]" href="#work">Explore my work <span aria-hidden="true">&nbsp;↘</span></a>
							<a className="text-[13px] text-[#55564f] no-underline hover:text-[#66845f]" href="mailto:hello@example.com">Say hello ↗</a>
						</div>
					</section>
                    <img
						src={Pfp}
						alt="Taha"
						className="my-auto h-80 w-80 rounded-full object-cover max-[650px]:h-60 max-[650px]:w-60"
					/>
				</div>
	);
}