import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {
    if (location.pathname !== "/") {
      // Navigate to home and pass the target section in state
      navigate("/", { state: { scrollTo: id } });
    } else {
      // Already on home, scroll directly
      const section = document.querySelector(`#${id}`);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Coralie TADJIFOUE Portfolio |</h1>
        <div className="space-x-6">
          <button onClick={() => handleClick("home")} className="hover:text-blue-600">Home</button>
          <button onClick={() => handleClick("about")} className="hover:text-blue-600">About</button>
          <button onClick={() => handleClick("projects")} className="hover:text-blue-600">Projects</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
