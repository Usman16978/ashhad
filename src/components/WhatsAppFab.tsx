import { WhatsApp } from "./Icons";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center rounded-full bg-[#1f9d63] p-3.5 text-white shadow-[0_12px_30px_-8px_rgba(8,60,40,0.55)] transition-all duration-300 hover:bg-[#178a56] hover:shadow-[0_16px_36px_-8px_rgba(8,60,40,0.65)] sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-[#1f9d63]/30 [animation-duration:3s]" />
      <WhatsApp className="h-6 w-6 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[12px] font-semibold opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[120px] group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:max-w-[120px] group-focus-visible:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
