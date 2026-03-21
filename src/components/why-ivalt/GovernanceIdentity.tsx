const GovernanceIdentity = () => {
    return (
        <div className='text-center py-16 px-4'>
            <h2 className='text-4xl md:text-5xl font-bold text-primary mb-12'>
                AI Governance Has Outgrown Identity
            </h2>
            
            <div className='flex flex-col md:flex-row justify-center items-start gap-8 max-w-6xl mx-auto'>
                {/* Policy Pillar */}
                <div className='flex-1 max-w-sm'>
                    <div className='bg-white rounded-lg shadow-lg p-8 border border-gray-200'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Policy</h3>
                        <p className='text-gray-600 mb-6 leading-relaxed'>
                            Define and enforce governance policies for AI systems and human interactions
                        </p>
                        <div className='flex items-center justify-between'>
                            <span className='text-sm text-gray-500'>With iVALT</span>
                            <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Authority Pillar */}
                <div className='flex-1 max-w-sm'>
                    <div className='bg-white rounded-lg shadow-lg p-8 border border-gray-200'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Authority</h3>
                        <p className='text-gray-600 mb-6 leading-relaxed'>
                            Establish provable authority for AI agents and human decision-makers
                        </p>
                        <div className='flex items-center justify-between'>
                            <span className='text-sm text-gray-500'>With iVALT</span>
                            <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Audit Pillar */}
                <div className='flex-1 max-w-sm'>
                    <div className='bg-white rounded-lg shadow-lg p-8 border border-gray-200'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Audit</h3>
                        <p className='text-gray-600 mb-6 leading-relaxed'>
                            Comprehensive audit trails for AI decisions and human actions
                        </p>
                        <div className='flex items-center justify-between'>
                            <span className='text-sm text-gray-500'>Without iVALT</span>
                            <div className='w-6 h-6 bg-red-500 rounded-full flex items-center justify-center'>
                                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GovernanceIdentity;