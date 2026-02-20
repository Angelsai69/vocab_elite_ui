
export default function BottomNav() {
  const items = ["Home", "Hall", "Share", "Progress", "Settings"];
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 rounded-t-3xl shadow-lg">
      {items.map((item, i) => (
        <button key={i} className="text-sm flex flex-col items-center text-gray-600">
          <div className="w-10 h-10 rounded-full bg-[#FFF3E0] flex items-center justify-center mb-1">
            {item[0]}
          </div>
          {item}
        </button>
      ))}
    </div>
  );
}
