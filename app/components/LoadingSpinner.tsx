'use client';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner = ({ className = "" }: LoadingSpinnerProps) => {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-background text-color ${className}`}>
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        <div className="absolute inset-1 border-4 border-transparent border-l-[#9d00ff] rounded-full animate-spin animation-delay-150"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 