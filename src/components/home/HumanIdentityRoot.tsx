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
            <div className='flex justify-center py-4'>
                <div className='relative rounded-lg overflow-hidden shadow'>
                    <Image 
                        src={HumanIdentityRootImage} 
                        alt="Human Identity Root"
                        width={1000}
                        height={700}
                        className='object-cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default HumanIdentityRoot;