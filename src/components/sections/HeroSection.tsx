import Profile from "../../assets/profile.png";

export const HeroSection = () => {
  return (
    <section className="py-5 px-5">
      <div className="font-space-grotesk text-5xl font-bold">
        <h1 className="text-slate-950">I build thoughtful</h1>
        <span className="text-primary">things for the web and app.</span>
      </div>
      <div className="mt-5">
        <p className="font-plus-jakarta-sans font-medium text-slate-700 text-">
          I'm James, an aspiring frontend developer who loves turning ideas into
          clear, welcoming digital experiences.
        </p>
      </div>
      <div className="flex justify-center mb-5">
        <img
          src={Profile}
          alt="Profile"
          className="mt-8 rounded-3xl w-2xs border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
};
