import Header from "../components/custom/header.jsx";
import Hero from "../components/custom/hero.jsx";
import Pfp from "../assets/profilePicture.png";
import TechStack from "../components/custom/techStack.jsx";



const currentYear = new Date().getFullYear();

export default function Home() {
	return (
		<main className="min-h-screen bg-[#f7f6f2] text-[#20211e] [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
			<div className="mx-auto w-[min(1080px,calc(100%-48px))] max-[650px]:w-[min(100%-36px,1080px)]">
				
                    <Header />

{/* hero section */}
			        <Hero Pfp={Pfp}/>
					<TechStack />
					
					<section className="border-t border-[#deded7] py-[72px] max-[650px]:py-14" id="about">
						<div className="mb-[30px] flex items-baseline justify-between gap-5 max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-[9px]">
							<h2 className="m-0 text-[29px] font-medium tracking-[-.05em]">A little about me</h2>
							<p className="m-0 text-[13px] text-[#77786f]">Curiosity, care, and a good cup of coffee.</p>
						</div>
						<div className="grid grid-cols-2 gap-[70px] max-[650px]:grid-cols-1 max-[650px]:gap-7">
							<p className="m-0 max-w-[460px] text-[15px] leading-[1.85] text-[#686960]">
								I bring ideas to life through considered design and thoughtful code. From the first sketch to the final detail, I care about making things that are easy to use, feel distinct, and make a positive difference.
							</p>
							<div className="flex content-start flex-wrap gap-[9px]" aria-label="Areas of expertise">
								{["Web design", "Frontend development", "Brand identity", "UI/UX", "Creative direction", "Prototyping"].map((skill) => (
									<span className="rounded-[3px] border border-[#deded7] px-3 py-[9px] text-xs text-[#55564f]" key={skill}>{skill}</span>
								))}
							</div>
						</div>
					</section>

					<section className="flex items-end justify-between gap-[30px] border-t border-[#deded7] py-[72px] pb-[92px] max-[650px]:flex-col max-[650px]:items-start max-[650px]:py-14 max-[650px]:pb-[65px]" id="contact">
						<div>
							<span className="text-[11px] font-bold uppercase tracking-[.15em] text-[#718569]">Have a project in mind?</span>
							<h2 className="mt-4 max-w-[500px] text-[clamp(34px,5vw,54px)] font-medium leading-[1.05] tracking-[-.05em]">Let’s make something meaningful.</h2>
						</div>
						<a className="inline-flex rounded-[4px] bg-[#262822] px-[19px] py-[13px] text-[13px] text-white no-underline transition-colors duration-200 hover:bg-[#66845f]" href="mailto:hello@example.com">hello@example.com&nbsp; ↗</a>
					</section>

					<footer className="flex justify-between gap-5 border-t border-[#deded7] py-[22px] text-[11px] text-[#77786f]">
						<span>© {currentYear} Your Name</span>
						<span>Designed with care.</span>
					</footer>
				</div>
		</main>
	);
}
