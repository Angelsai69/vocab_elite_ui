
export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#FFF8F2] sticky top-0 z-50">
      <div className="text-lg font-semibold">VocabGo</div>
      <div className="flex items-center gap-3">
        <div className="bg-white px-3 py-1 rounded-full shadow text-sm">Lv. 2</div>
        <div className="bg-white px-3 py-1 rounded-full shadow text-sm">🔥 5</div>
      </div>
      <div className="bg-[#FFB86B] text-white px-3 py-1 rounded-full text-sm">120 XP</div>
    </div>
  );
}
