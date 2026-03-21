const WhyNow = () => {
    return (
        <div className='text-center py-16 px-4 bg-white'>
            <h2 className='text-4xl md:text-5xl font-bold text-[#2A3F6C] mb-6'>
                Why Now?
            </h2>
            <p className='text-xl md:text-2xl text-green-600 italic mb-16 max-w-4xl mx-auto'>
                Three Forces Make Provable Human Authority <span className='underline'>Critical</span>
            </p>
            
            <div className='flex flex-col lg:flex-row justify-center items-start gap-8 max-w-7xl mx-auto mb-12'>
                {/* Force 1 */}
                <div className='flex-1 max-w-md bg-white border-2 border-gray-300 rounded-lg p-6 '>
                    <h3 className='text-xl font-bold text-[#2A3F6C] mb-4'>
                        Credential Identity Has Failed
                    </h3>
                    <ul className='text-left text-gray-700 space-y-2 mb-4'>
                        <li className='flex items-start'>
                            <span className='text-[#2A3F6C] mr-2'>•</span>
                            <span>80–90% of breaches start with <b>stolen credentials</b></span>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-[#2A3F6C] mr-2'>•</span>
                            <span>Phishing and social engineering dominate attacks</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-[#2A3F6C] mr-2'>•</span>
                            <span>SSO and MFA still rely on <b>credentials that can be stolen or impersonated</b> </span>
                        </li>
                    </ul>
                    <p className='text-sm font-bold text-[#2A3F6C] text-left'>
                        Identity systems trust logins — not humans
                    </p>
                </div>

        
                <div className='flex-1 max-w-md bg-white border-2 border-gray-300 rounded-lg p-6 '>
                    <h3 className='text-xl font-bold text-[#2A3F6C] mb-4'>
                        AI Is Starting to Execute Actions
                    </h3>
                    <ul className='text-left text-gray-700 space-y-2 mb-4'>
                        <li className='flex items-start'>
                            <span className='text-[#2A3F6C] mr-2'>•</span>
                            <span>AI agents access enterprise systems</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-[#2A3F6C] mr-2'>•</span>
                            <span>Autonomous workflows are expanding across enterprises rapidly</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-[#2A3F6C] mr-2'>•</span>
                            <span>AI will initiate transactions, approvals and decisions</span>
                        </li>
                    </ul>
                    <p className='text-sm font-bold text-[#2A3F6C] text-left'>
                        AI must prove who authorized execution
                    </p>
                </div>

                {/* Force 3 */}
                <div className='flex-1 max-w-md bg-white border-2 border-gray-300 rounded-lg p-6 '>
                    <h3 className='text-xl font-bold text-[#2A3F6C] mb-4'>
                        Deepfakes Break Human Trust
                    </h3>
                    <ul className='text-left text-gray-700 space-y-2 mb-4'>
                        <li className='flex items-start'>
                            <span className='text-[#2A3F6C] mr-2'>•</span>
                            <span>Voice deepfakes targeting help desks and customer support</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-[#2A3F6C] mr-2'>•</span>
                            <span>AI phishing and impersonation attacks</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-[#2A3F6C] mr-2'>•</span>
                            <span>Synthetic identities are rising</span>
                        </li>
                    </ul>
                    <p className='text-sm font-bold text-[#2A3F6C] text-left'>
                        Humans can no longer rely on visual or verbal trust
                    </p>
                </div>
            </div>

            <div className='relative max-w-4xl mx-auto'>
                <div className='flex justify-center mb-8'>
                    <div className='flex items-center gap-4'>
                        <div className='w-16 h-0.5 bg-gray-400'></div>
                        <div className='w-0 h-0 border-l-8 border-l-gray-400 border-t-4 border-t-transparent border-b-4 border-b-transparent'></div>
                    </div>
                </div>
                
                <div className='text-center'>
                    <h3 className='text-2xl md:text-3xl font-bold text-[#2A3F6C] bg-yellow-100 inline-block px-8 py-4 rounded-lg border-2 border-yellow-300'>
                        Solvable Today with iVALT
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default WhyNow;