import Image from 'next/image';
import EasyOverlayImplementationImage from '@/assets/images/home/easy-overlay-implementation.png';

const TheFutureofIdentity = () => {
  return (
    <div className="text-center py-16 px-4 max-w-7xl mx-auto m-8">
      <h2 className="text-4xl md:text-5xl max-w-3xl mx-auto font-bold text-primary mb-6">
        The Future of Identity Is Provable Human Authority
      </h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 max-w-6xl mx-auto md:py-12 py-6">
        <ul className="list-disc list-inside max-w-3xl mx-auto space-y-4  text-left">
          <li>
            <span className="text-left mx-auto mt-4 max-w-3xl text-xl font-normal text-teal-primary sm:text-2xl">
              The Internet Verified Identity to Protect <span className="font-bold">Logins</span>.
            </span>
          </li>
          <li>
            <span className="text-left mx-auto mt-4 max-w-3xl text-xl font-normal text-teal-primary sm:text-2xl">
              The AI Era Requires Human Authority to Protect Execution for Both SSO and AI Agents
            </span>
          </li>
        </ul>
        <p className="mx-auto mt-4 md:mt-12 max-w-3xl text-xl font-normal italic text-primary sm:text-2xl">
          iVALT Provides <span className="font-bold underline">Provable</span>{' '}
          <span className="font-semibold">Human Authority</span>
        </p>
      </div>
    </div>
  );
};

export default TheFutureofIdentity;
