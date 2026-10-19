
	export default function Header() {
		return (
			<header className="flex h-[82px] items-center justify-between border-b border-[#deded7] max-[650px]:h-[70px]">
					<a className="text-[15px] font-extrabold tracking-[-.04em] no-underline" href="#home">Taha Firoz Khan</a>
					<nav className="flex items-center gap-[30px] text-[13px] max-[650px]:gap-4 max-[650px]:text-xs" aria-label="Main navigation">
							<a className="text-[#66675f] no-underline hover:text-[#66845f]" href="#work">Work</a>
							<a className="text-[#66675f] no-underline hover:text-[#66845f]" href="#about">About</a>
							<a className="text-[#66675f] no-underline hover:text-[#66845f]" href="#contact">Contact</a>
						</nav>
			</header>
		);
	}