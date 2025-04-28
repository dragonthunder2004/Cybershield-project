import React from 'react';
import { CheckCircle, WarningCircle } from '@phosphor-icons/react';

const SecurityReport = () => {
  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-80">
        <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#111517] p-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-base font-medium leading-normal">Security</h1>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 px-3 py-2"><p className="text-white text-sm font-medium leading-normal">Dashboard</p></div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#293138]"><p className="text-white text-sm font-medium leading-normal">Security</p></div>
              <div className="flex items-center gap-3 px-3 py-2"><p className="text-white text-sm font-medium leading-normal">Compliance</p></div>
              <div className="flex items-center gap-3 px-3 py-2"><p className="text-white text-sm font-medium leading-normal">Incident Response</p></div>
              <div className="flex items-center gap-3 px-3 py-2"><p className="text-white text-sm font-medium leading-normal">Reports</p></div>
              <div className="flex items-center gap-3 px-3 py-2">
                <p className="text-white text-sm font-medium leading-normal">Compliance</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2">
                <p className="text-white text-sm font-medium leading-normal">Incident Response</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2">
                <p className="text-white text-sm font-medium leading-normal">Reports</p>
              </div>
            </div>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1a73bc] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">New scan</span>
          </button>
        </div>
      </div>
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Detailed Website Security Report</p>
        </div>
        
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Summary</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#3d4852] bg-[#1c2226] p-4 flex-col">
            <div className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">No critical issues</h2>
              <p className="text-[#9eacb7] text-sm font-normal leading-normal">
                Your site is secure. We didn't find any critical security issues.
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#3d4852] bg-[#1c2226] p-4 flex-col">
            <div className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">2 high priority issues</h2>
              <p className="text-[#9eacb7] text-sm font-normal leading-normal">
                High priority issues require immediate attention. This report includes 2 high priority issues.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">High priority issues</h3>
        <div className="flex items-center gap-4 bg-[#111517] px-4 min-h-[72px] py-2">
          <div className="text-white flex items-center justify-center rounded-lg bg-[#293138] shrink-0 size-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">Invalid domain name</p>
            <p className="text-[#9eacb7] text-sm font-normal leading-normal line-clamp-2">
              The domain name is not valid. This issue can prevent email delivery and may also be a sign of a phishing attempt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityReport;
