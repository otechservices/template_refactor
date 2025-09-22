
interface MobileHeaderProps {
  setIsMobileSidebarOpen: (open: boolean) => void;
}

export default function MobileHeader({ setIsMobileSidebarOpen }: MobileHeaderProps) {
  return (
    <div className="lg:hidden bg-white shadow-sm border-b border-accent-300 px-4 py-3">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="text-text-dark hover:text-primary-500 p-2 cursor-pointer"
        >
          <i className="ri-menu-line text-xl"></i>
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-2">
            <span className="text-white text-sm font-bold">FDV</span>
          </div>
          <h1 className="text-lg font-bold text-text-dark">FDV System</h1>
        </div>
        <div className="w-10"></div>
      </div>
    </div>
  );
}
