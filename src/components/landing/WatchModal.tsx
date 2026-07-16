"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";

interface WatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WatchModal({ isOpen, onClose }: WatchModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="watch-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop with cinematic dark blue blur */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#002B4A]/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal card - Premium, Minimalist Realization */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-[24px] bg-white text-left align-middle shadow-[0_30px_70px_-10px_rgba(0,43,74,0.35)] transition-all animate-in fade-in zoom-in-95 duration-300">
        
        {/* Asymmetric brand anchor line across the top edge */}
        <div className="flex h-1.5 w-full">
          <div className="bg-[#002B4A] flex-grow" />
          <div className="bg-[#F37A20] w-24" />
        </div>

        {/* Close Button with spin hover effect */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 hover:bg-[#F37A20] hover:text-white hover:rotate-90"
        >
          <X className="h-4 w-4" strokeWidth={2.5} />
        </button>

        {/* Dynamic Typography and Elements layout */}
        <div className="relative z-10 flex flex-col items-center px-8 py-12 text-center">
          
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
            Available Nationwide On
          </span>

          {/* Logo placed natively on background without a bounding box container */}
          <div className="relative mt-5 mb-5 h-12 w-36">
            <Image
              src="/images/where-to-watch/mytv.png"
              alt="MYTV Broadcasting"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Big Structural Channel Header */}
          <h2
            id="watch-modal-title"
            className="text-[44px] font-black uppercase leading-none tracking-tighter text-[#002B4A]"
          >
            Channel{" "}
            <span className="text-[#F37A20]">
              {siteConfig?.channel?.number || "200"}
            </span>
          </h2>

          {/* Body Information Layout */}
          <div className="mt-6 flex flex-col items-center gap-1.5">
            <p className="max-w-[300px] text-[15px] font-medium leading-relaxed text-slate-600">
              Broadcasted <span className="font-extrabold text-black">FREE</span> across all networks via {siteConfig?.channel?.platform || "MYTV Digital Television"}.
            </p>
            
            {/* Visual dividing bullet string */}
            <div className="mt-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <span>No Subscription</span>
              <span className="text-[#F37A20]">&bull;</span>
              <span>No Monthly Fees</span>
            </div>
          </div>

          {/* Action Close Dismissal Button */}
          <button
            onClick={onClose}
            className="mt-8 w-full rounded-xl bg-[#002B4A] py-4 text-[13px] font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#F37A20] hover:shadow-lg"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}