import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

const MobileLayout = ({ children, className = "", noPadding = false }: MobileLayoutProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50">
      <div className={`relative w-full max-w-[430px] min-h-screen bg-background overflow-hidden ${noPadding ? '' : 'px-5 py-6'} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;
