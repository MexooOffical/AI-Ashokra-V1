import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

// Official OpenAI flower / spiral rosette
export const OpenAILogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-label="OpenAI"
  >
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1636a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.6862zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1635a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6814zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
  </svg>
);

// Official Google Gemini 4-point sparkle gradient star
export const GoogleGeminiLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-label="Google Gemini"
  >
    <defs>
      <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1ba0e2" />
        <stop offset="35%" stopColor="#4285f4" />
        <stop offset="70%" stopColor="#9b72cb" />
        <stop offset="100%" stopColor="#d96570" />
      </linearGradient>
    </defs>
    <path
      d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
      fill="url(#gemini-grad)"
    />
  </svg>
);

// Official DeepSeek blue whale / dolphin logo
export const DeepSeekLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-label="DeepSeek"
  >
    <path
      d="M21.5 12.5C21.5 7.8 17.7 4 13 4C9.2 4 6 6.5 4.9 10C4.3 9.8 3.7 9.8 3.2 10.1C2.3 10.6 1.8 11.6 2 12.6C2.2 13.5 3 14.3 4 14.4C4 14.6 4 14.8 4.1 15C4.7 17.9 7.3 20 10.3 20C12.3 20 14.1 19.1 15.3 17.6C18.9 17.5 21.5 15.3 21.5 12.5ZM13 6C16.6 6 19.5 8.9 19.5 12.5C19.5 14.5 17.5 16.1 14.8 16.1C14.5 15.3 14 14.6 13.3 14.1C14 13.4 14.5 12.5 14.5 11.5C14.5 9.6 12.9 8 11 8C10.1 8 9.2 8.4 8.6 9C9.2 7.2 10.9 6 13 6Z"
      fill="#2962FF"
    />
  </svg>
);

// Official Perplexity woven lattice star logo
export const PerplexityLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-label="Perplexity"
  >
    <path
      d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19"
      stroke="#20B2AA"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="3.5" stroke="#20B2AA" strokeWidth="2" />
  </svg>
);

// Official Anthropic coral/terracotta 16-ray sunburst logo
export const AnthropicLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`${className} text-[#D97757]`}
    aria-label="Anthropic"
  >
    <path d="M13.827 2.083a.965.965 0 0 0-1.745 0l-1.39 3.32a.965.965 0 0 1-.54.54l-3.32 1.39a.965.965 0 0 0 0 1.745l3.32 1.39a.965.965 0 0 1 .54.54l1.39 3.32a.965.965 0 0 0 1.745 0l1.39-3.32a.965.965 0 0 1 .54-.54l3.32-1.39a.965.965 0 0 0 0-1.745l-3.32-1.39a.965.965 0 0 1-.54-.54l-1.39-3.32zM7.2 12.8a.72.72 0 0 0-1.303 0l-1.037 2.478a.72.72 0 0 1-.403.403L1.979 16.72a.72.72 0 0 0 0 1.303l2.478 1.037a.72.72 0 0 1 .403.403l1.037 2.478a.72.72 0 0 0 1.303 0l1.037-2.478a.72.72 0 0 1 .403-.403l2.478-1.037a.72.72 0 0 0 0-1.303l-2.478-1.037a.72.72 0 0 1-.403-.403L7.2 12.8z" />
  </svg>
);

// Official xAI slash-circle logo
export const XAILogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-label="xAI"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 15.5l-3.2-4.5 1.4-1.2 2.2 3.1 5.9-8.4h2.2l-8.5 11z" />
  </svg>
);

// Official Meta ribbon logo
export const MetaLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`${className} text-[#0081FB]`}
    aria-label="Meta"
  >
    <path d="M16.99 6.57c-1.84 0-3.37 1.04-4.24 2.57-.87-1.53-2.4-2.57-4.24-2.57-2.76 0-5 2.24-5 5 0 2.76 2.24 5 5 5 1.84 0 3.37-1.04 4.24-2.57.87 1.53 2.4 2.57 4.24 2.57 2.76 0 5-2.24 5-5 0-2.76-2.24-5-5-5zm-8.48 7.86c-1.57 0-2.86-1.28-2.86-2.86s1.28-2.86 2.86-2.86c1.33 0 2.45.92 2.77 2.16-.31.39-.77.7-1.27.7-.8 0-1.5-.6-1.5-1.4 0-.3.1-.6.3-.8-.7.3-1.1 1-1.1 1.8 0 1.2 1 2.2 2.2 2.2.4 0 .7-.1 1-.2-.2.6-.7 1.06-1.4 1.06zm8.48 0c-.7 0-1.2-.46-1.4-1.06.3.1.6.2 1 .2 1.2 0 2.2-1 2.2-2.2 0-.8-.4-1.5-1.1-1.8.2.2.3.5.3.8 0 .8-.7 1.4-1.5 1.4-.5 0-.96-.31-1.27-.7.32-1.24 1.44-2.16 2.77-2.16 1.58 0 2.86 1.28 2.86 2.86s-1.29 2.86-2.86 2.86z" />
  </svg>
);

// Official Mistral orange blocks logo
export const MistralLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`${className} text-[#FF7000]`}
    aria-label="Mistral AI"
  >
    <path d="M3 4h4v4H3V4zm14 0h4v4h-4V4zm-7 4h4v4h-4V8zM3 12h4v4H3v-4zm14 0h4v4h-4v-4zM3 16h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4z" />
  </svg>
);

// Helper component that selects the correct logo
export const AILogoIcon: React.FC<{
  type: string;
  className?: string;
  size?: number;
}> = ({ type, className, size = 20 }) => {
  switch (type.toLowerCase()) {
    case 'openai':
      return <OpenAILogo className={className} size={size} />;
    case 'google':
      return <GoogleGeminiLogo className={className} size={size} />;
    case 'deepseek':
      return <DeepSeekLogo className={className} size={size} />;
    case 'perplexity':
      return <PerplexityLogo className={className} size={size} />;
    case 'anthropic':
      return <AnthropicLogo className={className} size={size} />;
    case 'xai':
      return <XAILogo className={className} size={size} />;
    case 'meta':
      return <MetaLogo className={className} size={size} />;
    case 'mistral':
      return <MistralLogo className={className} size={size} />;
    default:
      return <OpenAILogo className={className} size={size} />;
  }
};
