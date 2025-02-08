import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import "./index.css";

// そして最後のtailwindCSS
// https://tailwindcss.com/docs/installation/using-vite
// viteを使っているので
// npm install tailwindcss @tailwindcss/vite
// viteのバージョンが古く競合するので依存関係をクリアし再アップデートする。。
// rm -rf node_modules package-lock.json
// npm install
// npm install vite@latest
// npm install tailwindcss @tailwindcss/vite
// OK!
export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
