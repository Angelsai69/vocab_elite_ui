import { generateLesson } from "../services/api";

async function handleStart() {
  const data = await generateLesson("Grade 3 adventure story");
  console.log(data);
}

import Mascot from "../components/Mascot";
export default function Home() {
  return (
    <div className="space-y-6 mt-4">
      <Mascot />
      <div className="bg-gradient-to-r from-[#FFD9A0] to-[#FFB86B] p-5 rounded-3xl shadow">
        <h2 className="text-lg font-semibold mb-2">Ready to level up?</h2>
        <button className="bg-white px-5 py-2 rounded-full shadow font-medium">
          Start Lesson
        </button>
      </div>
    </div>
  );
}
