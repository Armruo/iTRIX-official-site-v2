'use client'

export default function NewFeatures() {
    return (
        <div className="flex flex-col items-center gap-16 py-16">
            <div className="inline-flex justify-center items-center gap-3">
                <div className="w-1 h-3 outline outline-1 outline-offset-[-0.50px] outline-orange-300"></div>
                <div className="justify-start text-gray-400 text-xs font-normal font-['Space_Grotesk'] uppercase leading-none tracking-widest">Real-time Influence Anywhere,  Anytime</div>
                <div className="w-1 h-3 origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-orange-300"></div>
            </div>

            <div className="text-center justify-start text-white text-5xl font-medium font-['Poppins'] leading-[60px]">Features</div>

            <div className="flex flex-row gap-8">
                <div className="w-[548px] bg-zinc-950 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-orange-300 overflow-hidden p-14">
                    <div className="w-96 flex justify-between items-center mb-16">
                        <div className="w-28 h-4 flex justify-center items-center gap-3">
                            <div className="w-1 h-3 outline outline-1 outline-offset-[-0.50px] outline-orange-300"></div>
                            <div className="justify-start text-gray-400 text-xs font-normal font-['Space_Grotesk'] uppercase leading-none tracking-widest">ITRIX</div>
                            <div className="w-1 h-3 origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-orange-300"></div>
                        </div>
                        <div className="px-4 py-1 bg-white rounded flex justify-start items-start gap-2.5 overflow-hidden">
                            <div className="w-4 h-4 relative">
                                <div className="w-3 h-2 bg-zinc-950 m-auto mt-[3.33px]"></div>
                            </div>
                            <div className="justify-start text-zinc-950 text-xs font-normal font-['Space_Grotesk'] uppercase leading-none tracking-widest">done</div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-8">
                        <div className="w-96 flex flex-col gap-4">
                            <div className="flex justify-start items-start gap-40">
                                <div className="w-9 h-9 relative bg-purple-500 rounded-xl overflow-hidden">
                                    <div className="w-6 h-6 m-auto mt-[5px]">
                                        <div className="w-5 h-5 bg-white m-auto"></div>
                                    </div>
                                </div>
                                <div className="justify-start text-gray-400 text-[10px] font-normal font-['Space_Grotesk'] uppercase leading-3 tracking-wider">1m ago</div>
                            </div>
                            <div className="justify-start text-white text-base font-normal font-['Source_Code_Pro'] leading-7">Morning! Ask me anything</div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="w-96 text-white text-3xl font-medium font-['Poppins'] leading-[48px]">AI Voice Cloning</div>
                        <div className="w-96 mt-4 text-gray-500 text-base font-light font-['Poppins'] leading-normal">Advanced acoustic algorithms precisely replicate original voice tone and style</div>
                        <div className="w-80 mt-8 text-white text-base font-semibold font-['Poppins'] leading-normal">Virtual Appearance</div>
                        <div className="w-80 mt-4 text-white text-base font-semibold font-['Poppins'] leading-normal">Language · Seamless</div>
                        <div className="w-96 mt-2 text-gray-500 text-base font-light font-['Poppins'] leading-normal">Real-time multilingual switching, breaking barriers for global communication</div>
                    </div>
                </div>

                <div className="w-[548px] bg-zinc-950 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden p-14">
                    <div className="w-96 flex justify-between items-center">
                        <div className="w-28 h-4 flex justify-center items-center gap-3">
                            <div className="w-1 h-3 outline outline-1 outline-offset-[-0.50px] outline-orange-300"></div>
                            <div className="justify-start text-gray-400 text-xs font-normal font-['Space_Grotesk'] uppercase leading-none tracking-widest">ITRIX</div>
                            <div className="w-1 h-3 origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-orange-300"></div>
                        </div>
                        <div className="px-4 py-1 bg-white rounded flex justify-start items-start gap-2.5 overflow-hidden">
                            <div className="w-4 h-4 relative">
                                <div className="w-3 h-2 bg-zinc-950 m-auto mt-[3.33px]"></div>
                            </div>
                            <div className="justify-start text-zinc-950 text-xs font-normal font-['Space_Grotesk'] uppercase leading-none tracking-widest">done</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
