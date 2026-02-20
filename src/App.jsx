
import Home from "./pages/Home";
import BottomNav from "./components/BottomNav";
import TopBar from "./components/TopBar";
export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] flex flex-col">
      <TopBar />
      <main className="flex-1 px-4 pb-24"><Home /></main>
      <BottomNav />
    </div>
  );
}
