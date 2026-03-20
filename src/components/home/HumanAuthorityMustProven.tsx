import Image from 'next/image';
import ProvenAuthorityImage from "@/assets/images/home/human-bound.png"

const HumanAuthorityMustProven = () => {
    return (
        <div className='text-center py-16 px-4'>
            <h2 className='text-4xl md:text-5xl font-bold text-primary mb-6'>
                Human Authority Must be Proven at Execution
            </h2>
            <p className='text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto'>
                From Identity to Provable (and Trusted) Authority
            </p>
            <div className='flex justify-center py-4'>
                <div className='relative rounded-lg overflow-hidden shadow'>
                    <Image 
                        src={ProvenAuthorityImage} 
                        alt="Human Authority Must be Proven at Execution"
                        width={1200}
                        height={700}
                        className='object-cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default HumanAuthorityMustProven;