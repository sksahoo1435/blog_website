import Blogs from "./components/Blogs/page";
import Contact from "./components/Contact/page";

export default function Home() {
  return (
    <div className="m-h-dvh font-[family-name:var(--font-geist-sans)]">
      <Blogs />
      <section id="contact" className="min-h-128">
        <Contact />
      </section>
    </div>
  );
}
