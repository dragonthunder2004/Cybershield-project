import React from 'react';
import { Link } from 'react-router-dom';
import { LockSimple, Package, UserPlus } from '@phosphor-icons/react';

const Overview = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/93f4328a-95b9-4b87-9a61-61cd2ddf172c.png")',
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Good morning, Shield
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  You have no critical issues to address today
                </h2>
              </div>
              <div className="flex gap-4">
                <Link to="/verify" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1a73bc] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span className="truncate">Start a new scan</span>
                </Link>

              </div>
            </div>
          </div>
        </div>

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Today's recommendations</h2>
        <div className="p-4 @container">
          <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#3d4852] bg-[#111517] p-5 @[480px]:flex-row @[480px]:items-center">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Enable 2FA on your email accounts</p>
              <p className="text-[#9eacb7] text-base font-normal leading-normal">
                Two-factor authentication (2FA) is a security process in which the user provides two different authentication factors to verify themselves. It adds an extra layer of security to your accounts.
              </p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#1a73bc] text-white text-sm font-medium leading-normal">
              <span className="truncate">Set up 2FA</span>
            </button>
          </div>
        </div>

        <div className="p-4 @container">
          <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#3d4852] bg-[#111517] p-5 @[480px]:flex-row @[480px]:items-center">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Upgrade your website to SSL/TLS</p>
              <p className="text-[#9eacb7] text-base font-normal leading-normal">
                SSL/TLS certificates are used to secure network communications and establish the identity of websites over the internet as well as encrypting information transmitted between the client and server.
              </p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#1a73bc] text-white text-sm font-medium leading-normal">
              <span className="truncate">Learn more</span>
            </button>
          </div>
        </div>

        <div className="p-4 @container">
          <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#3d4852] bg-[#111517] p-5 @[480px]:flex-row @[480px]:items-center">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Check for software updates</p>
              <p className="text-[#9eacb7] text-base font-normal leading-normal">
                Regularly updating your software, including your operating system, web browsers, and other applications, is one of the most effective ways to protect yourself from cyber threats.
              </p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#1a73bc] text-white text-sm font-medium leading-normal">
              <span className="truncate">Learn more</span>
            </button>
          </div>
        </div>

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent scans</h2>
        <div className="flex items-center gap-4 bg-[#111517] px-4 min-h-[72px] py-2 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-white flex items-center justify-center rounded-lg bg-[#293138] shrink-0 size-12">
              <LockSimple size={24} weight="regular" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">Acme Corp</p>
              <p className="text-[#9eacb7] text-sm font-normal leading-normal line-clamp-2">
                Scan for vulnerabilities and weak encryption on your website
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <p className="text-white text-base font-normal leading-normal">5 days ago</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-[#111517] px-4 min-h-[72px] py-2 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-white flex items-center justify-center rounded-lg bg-[#293138] shrink-0 size-12">
              <Package size={24} weight="regular" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">Acme Corp</p>
              <p className="text-[#9eacb7] text-sm font-normal leading-normal line-clamp-2">
                Check if any of your credentials have been leaked online
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <p className="text-white text-base font-normal leading-normal">6 days ago</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-[#111517] px-4 min-h-[72px] py-2 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-white flex items-center justify-center rounded-lg bg-[#293138] shrink-0 size-12">
              <LockSimple size={24} weight="regular" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">Acme Corp</p>
              <p className="text-[#9eacb7] text-sm font-normal leading-normal line-clamp-2">
                Scan for vulnerabilities and weak encryption on your website
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <p className="text-white text-base font-normal leading-normal">7 days ago</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-[#111517] px-4 min-h-[72px] py-2 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-white flex items-center justify-center rounded-lg bg-[#293138] shrink-0 size-12">
              <Package size={24} weight="regular" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">Acme Corp</p>
              <p className="text-[#9eacb7] text-sm font-normal leading-normal line-clamp-2">
                Check if any of your credentials have been leaked online
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <p className="text-white text-base font-normal leading-normal">8 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
