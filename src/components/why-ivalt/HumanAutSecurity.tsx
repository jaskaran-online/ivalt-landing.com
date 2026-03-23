const HumanAutSecurity = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2A3F6C] mb-2">
          Human Authority Security Stack
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl font-bold italic text-teal-primary sm:text-2xl mb-12">
          Identity Proves Login. Authority Proves Execution.
        </p>

        <div className="grid grid-cols-4 items-center gap-4 max-w-3xl mx-auto py-6">
          {/* First Row */}
          <div></div>
          <div className="col-span-3">
            <div className="w-full max-w-2xl bg-primary text-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold">Identity Layer — SSO</p>
            </div>
          </div>

          {/* Second Row */}
          <div></div>
          <div className="col-span-3">
            <div className="w-full max-w-2xl bg-primary text-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold">
                Application / Agent Layer — Enterprise Apps | AI Agents
              </p>
            </div>
          </div>

          {/* Third Row */}
          <div></div>
          <div className="col-span-3">
            <div className="w-full max-w-2xl bg-primary text-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold">
                Access & Governance Layer — Access Mgmt | AI Governance
              </p>
            </div>
          </div>

          {/* Fourth Row */}
          <div>
            <h1 className="text-2xl font-bold text-[#2A3F6C] italic mx-auto">
              The Missing <br /> Layer
            </h1>
          </div>
          <div className="col-span-3">
            <div className="flex items-center space-y-4">
              <div className="relative w-full max-w-2xl bg-[#30b68e] text-white p-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold">
                  Human Authority Layer (NEW) — Provable Human-Bound Authority — iVALT
                </p>
              </div>
            </div>
          </div>

          {/* Fifth Row */}
          <div></div>
          <div className="col-span-3">
            <div className="w-full max-w-2xl bg-primary text-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold">
                Execution Layer — Enterprise Execution | AI Execution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanAutSecurity;
