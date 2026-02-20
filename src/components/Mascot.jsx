
export default function Mascot() {
  return (
    <div className="bg-white rounded-3xl p-4 shadow flex items-center gap-4">
      <img src="/mascot.png" className="w-20 h-20 object-contain" />
      <div>
        <h3 className="font-semibold text-lg">Hey, ready to learn?</h3>
        <p className="text-sm text-gray-500">Let’s grow your vocabulary 🚀</p>
      </div>
    </div>
  );
}
