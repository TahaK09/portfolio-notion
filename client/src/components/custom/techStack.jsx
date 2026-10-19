export default function TechStack() {
    const techStack = [
        {
            name: "JavaScript", logo: <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 0h256v256H0V0z" fill="#000000"></path><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path></g></svg>
        },
       ];

    return (
        <section className="border-t border-[#deded7] py-[72px] max-[650px]:py-14" id="work">
            <div className="mb-[30px] flex items-baseline justify-between gap-5 max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-[9px]">
                <h2 className="m-0 text-[29px] font-medium tracking-[-.05em]">what i work on...</h2>
                <p className="m-0 text-[13px] text-[#77786f]">my tech stack</p>
            </div>
            <div className="flex flex-wrap gap-5">
                {techStack.map((tech) => (
                    <div
                        key={tech.name}
                        className="flex flex-col gap-3 rounded-[3px] border border-[#292929] px-10 py-7 text-md font-medium text-[#6b6b6b]"
                    >
                        <div className="h-full w-full flex items-center justify-center">
                            {tech.logo}
                        </div>
                        <div className="font-semibold text-black text-xs text-center">
                            {tech.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};