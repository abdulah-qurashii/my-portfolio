export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-green-400">My Portfolio</h1>
        <ul className="flex space-x-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-green-400">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
