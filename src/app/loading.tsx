export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
            <div className="relative">
                <div className="w-24 h-24 border-4 border-slate-100 rounded-full" />
                <div className="w-24 h-24 border-4 border-primary border-t-transparent rounded-full animate-spin absolute inset-0" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src="/favicon.png"
                        alt="MIWAY"
                        className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                </div>
            </div>
            <div className="absolute bottom-12 left-0 right-0 text-center">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] animate-pulse">Initializing MIWAY...</p>
            </div>
        </div>
    );
}
