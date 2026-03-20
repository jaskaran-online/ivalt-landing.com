import Image from 'next/image';
import Credential from '@/assets/images/home/credential.png';

const CredentialFailExcecution = () => {
    return (
        <div className='text-center py-16 px-4'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                Credential Fail at Execution
            </h2>
            <p className='text-xl md:text-2xl text-gray-600 mb-12 mx-auto'>
                AI Exponentially Amplifies this Proven Weakness
            </p>
            <div className='flex justify-center'>
                <div className=' rounded-lg overflow-hidden shadow'>
                    <Image 
                        src={Credential} 
                        alt="Credential Fail at Execution" 
                        width={1500} 
                        height={700}
                        className='w-full '
                    />
                </div>
            </div>
        </div>
    );
};

export default CredentialFailExcecution;