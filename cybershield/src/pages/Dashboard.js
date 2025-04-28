import React from 'react';

const Dashboard = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Dashboard</p>
            <p className="text-[#9eacb7] text-base font-normal leading-normal">Get an overview of your security posture</p>
          </div>
        </div>
        
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Website Security</h2>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#3d4852]">
            <p className="text-white text-base font-medium leading-normal">Issues found</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">3</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#3d4852]">
            <p className="text-white text-base font-medium leading-normal">Recommendations</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">4</p>
          </div>
        </div>

        <div className="p-4 @container">
          <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#3d4852] bg-[#111517] p-5 @[480px]:flex-row @[480px]:items-center">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Add a website</p>
              <p className="text-[#9eacb7] text-base font-normal leading-normal">Scan a website for security issues</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#1a73bc] text-white text-sm font-medium leading-normal">
              <span className="truncate">Scan now</span>
            </button>
          </div>
        </div>

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Connection to Compromised Platforms</h2>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#3d4852]">
            <p className="text-white text-base font-medium leading-normal">Issues found</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">0</p>
          </div>
        </div>

        <div className="p-4 @container">
          <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#3d4852] bg-[#111517] p-5 @[480px]:flex-row @[480px]:items-center">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Connect to a platform</p>
              <p className="text-[#9eacb7] text-base font-normal leading-normal">Check if your platform has been compromised</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#1a73bc] text-white text-sm font-medium leading-normal">
              <span className="truncate">Check now</span>
            </button>
          </div>
        </div>

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Past Database Breaches</h2>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#3d4852]">
            <p className="text-white text-base font-medium leading-normal">Issues found</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">0</p>
          </div>
        </div>

        <div className="p-4 @container">
          <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#3d4852] bg-[#111517] p-5 @[480px]:flex-row @[480px]:items-center">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Connect to a platform</p>
              <p className="text-[#9eacb7] text-base font-normal leading-normal">Check if your platform has been compromised</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#1a73bc] text-white text-sm font-medium leading-normal">
              <span className="truncate">Check now</span>
            </button>
          </div>
        </div>

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Gmail Security Assessment</h2>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#3d4852]">
            <p className="text-white text-base font-medium leading-normal">Issues found</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">0</p>
          </div>
        </div>

        <div className="p-4 @container">
          <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#3d4852] bg-[#111517] p-5 @[480px]:flex-row @[480px]:items-center">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Connect to a platform</p>
              <p className="text-[#9eacb7] text-base font-normal leading-normal">Check if your platform has been compromised</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#1a73bc] text-white text-sm font-medium leading-normal">
              <span className="truncate">Check now</span>
            </button>
          </div>
        </div>

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Email Security Assessment</h2>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#3d4852]">
            <p className="text-white text-base font-medium leading-normal">Issues found</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">0</p>
          </div>
        </div>

        <div className="p-4 @container">
          <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#3d4852] bg-[#111517] p-5 @[480px]:flex-row @[480px]:items-center">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Connect to a platform</p>
              <p className="text-[#9eacb7] text-base font-normal leading-normal">Check if your platform has been compromised</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#1a73bc] text-white text-sm font-medium leading-normal">
              <span className="truncate">Check now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
