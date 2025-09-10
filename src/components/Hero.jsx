import profile from "../assets/profile.png"; // ✅ Correct way to import image

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <img
        src={profile}
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-green-400 mb-6"
      />
      <h1 className="text-4xl md:text-6xl font-bold">Hi, I’m Abdullah 🚀</h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300">
        Data Scientist | AI Enthusiast | Machine Learning Engineer
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600"
      >
        View My Work
      </a>
    </section>
  );
}
