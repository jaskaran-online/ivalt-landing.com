const HumanAutSecurity = () => {
    return (
        <div className='bg-white py-16 px-4'>
            <div className='max-w-6xl mx-auto text-center'>
                <h2 className='text-4xl md:text-5xl font-bold text-[#2A3F6C] mb-2'>
                    Human Authority Security
                </h2>
                <p className='text-xl md:text-2xl font-semibold text-[#20B2AA] mb-12'>
                    Identity Proves Login. Authority Proves Execution.
                </p>

                <h3 className='text-3xl font-bold text-[#2A3F6C] mb-8'>
                    Stack
                </h3>

                <div className='flex flex-col items-center space-y-4'>
                    <div className='w-full max-w-2xl bg-primary text-white p-4 rounded-lg shadow-md'>
                        <p className='text-lg font-semibold'>Identity Layer — SSO</p>
                    </div>

                    <div className='w-full max-w-2xl bg-primary text-white p-4 rounded-lg shadow-md'>
                        <p className='text-lg font-semibold'>Application / Agent Layer — Enterprise Apps | AI Agents</p>
                    </div>

                    <div className='w-full max-w-2xl bg-primary text-white p-4 rounded-lg shadow-md'>
                        <p className='text-lg font-semibold'>Access & Governance Layer — Access Mgmt | AI Governance</p>
                    </div>

                    <div className='relative w-full max-w-2xl bg-[#4CAF50] text-white p-4 rounded-lg shadow-md'>
                       
                        <p className='text-lg font-semibold'>Human Authority Layer (NEW) — Provable Human-Bound Authority — iVALT</p>
                    </div>

                    <div className='w-full max-w-2xl bg-primary text-white p-4 rounded-lg shadow-md'>
                        <p className='text-lg font-semibold'>Execution Layer — Enterprise Execution | AI Execution</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanAutSecurity;