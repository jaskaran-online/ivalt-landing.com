import Image from 'next/image';
import HumanIdentityRootImage from "@/assets/images/home/ivalt-devices.png"

const HumanIdentityRoot = () => {
    return (
        <div className='text-center py-16 px-4'>
            <h2 className='text-4xl md:text-5xl font-bold text-primary mb-6'>
                Human Identity is the Root of Trust
            </h2>
            <p className='text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto'>
                Provable Authority for Humans, AI Agents, and Devices
            </p>
            <div className='flex flex-col lg:flex-row justify-center items-start gap-8 py-8'>
                <div className='flex-1 max-w-md'>
                    <ul className='space-y-6 py-50 text-left font-medium'>
                        <li className='flex items-start'>
                            <span className='text-primary font-semibold text-lg mr-2'>•</span>
                            <span className='text-gray-700 text-lg leading-relaxed'>
                                Stops Social Engineering (incl Phishing)
                            </span>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-primary font-semibold text-lg mr-2'>•</span>
                            <span className='text-gray-700 text-lg leading-relaxed'>
                                Bilateral Trust for Helpdesks and Customer Service
                            </span>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-primary font-semibold text-lg mr-2'>•</span>
                            <span className='text-gray-700 text-lg leading-relaxed'>
                                Definitive KYC
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='relative rounded-lg overflow-hidden  flex-shrink-0'>
                    <Image
                        src={HumanIdentityRootImage}
                        alt="Human Identity Root"
                        width={1000}
                        height={700}
                        className='object-cover h-auto'
                    />
                </div>
                <div className='flex-1 max-w-md '>
                    <ol className='space-y-6 py-50 font-medium text-left'>
                        <li className='flex items-start'>
                             <span className='text-primary font-semibold text-lg mr-2'>•</span>
                            <span className='text-gray-700 text-lg leading-relaxed'>
                                Stops Rogue AI Agents
                            </span>
                        </li>
                        <li className='flex items-start'>
                             <span className='text-primary font-semibold text-lg mr-2'>•</span>
                            <span className='text-gray-700 text-lg leading-relaxed'>
                                Enables Trusted Agent-to-Human Interactions
                            </span>
                        </li>
                        <li className='flex items-start'>
                             <span className='text-primary font-semibold text-lg mr-2'>•</span>
                            <span className='text-gray-700 text-lg leading-relaxed'>
                                Establishes Verifiable Machine Identity
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default HumanIdentityRoot;