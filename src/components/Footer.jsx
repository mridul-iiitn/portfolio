export default function Footer() {
  return (
   <footer>
      <p>
        Designed & Developed by{" "}
        <span className="half-text">Mridul</span>
      </p>

      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="half-text">BuiltByMridul</span>. All rights reserved.
      </p>
    </footer>
  );
}