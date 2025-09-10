export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-400">Contact Me</h2>
      <div className="max-w-lg mx-auto text-center">
        <p className="mb-6 text-gray-300">
          Interested in collaborating or hiring me? Let’s connect!
        </p>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=22940abdu@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-green-500 rounded-lg text-white font-medium hover:bg-green-600"
>
  Send an Email
</a>


        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://github.com/abdulah-qurashii" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/abdullah-975938295/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
