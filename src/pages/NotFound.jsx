import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-[#060709]">
      <div className="text-center px-6">
        <p className="text-white/60 mb-2">404</p>
        <h1 className="text-3xl font-semibold mb-4">Страница не найдена</h1>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-white text-black font-medium hover:opacity-90 transition"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
