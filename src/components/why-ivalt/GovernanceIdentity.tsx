
const GovernanceIdentity = () => {
    return (
        <div className='text-center py-16 px-4 bg-[#FAF9F7]'>
            <h2 className='text-4xl md:text-5xl font-bold text-[#2A3F6C] mb-12'>
                AI Governance Has Outgrown Identity
            </h2>

            <div className='flex flex-col gap-4  md:flex-row justify-center items-start gap-8 max-w-6xl mx-auto'>
                {/* Policy Pillar */}
                <div className='flex-1 max-w-sm bg-[#E0E7EF] rounded-2xl pb-8  p-0 overflow-hidden'>
                    <h3 className='text-2xl font-bold text-[#2A3F6C] py-4'>Policy</h3>
                    <div className='bg-[#2A3F6C] rounded-2xl p-6 text-white text-lg font-semibold w-10/12 mx-auto'>
                        Define What AI Agents Can Do
                    </div>
                    <div className='bg-[#2A3F6C] w-10/12 rounded-2xl mx-auto mt-5 p-4 flex justify-center items-center'>
                        <div className='w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center'>
                            <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Authority Pillar */}
                <div className='flex-1 max-w-sm bg-[#E0E7EF] rounded-lg  p-0 overflow-hidden'>
                    <h3 className='text-2xl font-bold text-[#2A3F6C] py-4'>Authority</h3>
                    <div className='bg-[#2A3F6C] w-10/12 mx-auto rounded-2xl  p-6 text-white text-lg font-semibold'>
                        Prove WHO Authorized the Agent's Actions
                    </div>
                    <div className='bg-[#2A3F6C] rounded-2xl mx-auto mt-5 w-10/12 p-4 flex justify-center items-center'>
                        <div className='w-8 h-8 bg-[#F44336] rounded-full flex items-center justify-center'>
                            <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                            </svg>
                        </div>
                    </div>
                    <div className='bg-[#2A3F6C] p-4 rounded-2xl mx-auto w-10/12 mt-4 mb-4 flex justify-center items-center text-white text-lg font-semibold'>
                        With iVALT
                        <div className='w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center ml-2'>
                            <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Audit Pillar */}
                <div className='flex-1 max-w-sm bg-[#E0E7EF] rounded-lg p-0 overflow-hidden'>
                    <h3 className='text-2xl font-bold text-[#2A3F6C] py-4'>Audit</h3>
                    <div className='bg-[#2A3F6C] p-6 text-white w-10/12 mx-auto rounded-2xl text-lg font-semibold'>
                        Prove HOW the Agent Reached its Decision
                    </div>
                    <div className='bg-[#2A3F6C] w-10/12 mx-auto rounded-2xl mt-4 p-4 flex justify-center items-center'>
                        <div className='w-8 h-8 bg-[#F44336] rounded-full flex items-center justify-center'>
                            <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                            </svg>
                        </div>
                    </div>
                    <div className='bg-[#2A3F6C] rounded-2xl w-10/12 mx-auto mt-5 mb-4 p-4 flex justify-center items-center text-white text-lg font-semibold'>
                        With iVALT
                        <div className='w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center ml-2'>
                            <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-2xl font-bold text-primary mt-8">The Pillars of AI Agent Governance</p>
            </div>
        </div>
    );
};

export default GovernanceIdentity;