import { useTheme } from "../hooks/ThemeContext";

// const themes = [
//   { label: "Default", value: "default" },
//   { label: "Retro", value: "retro" },
//   { label: "Cyberpunk", value: "cyberpunk" },
//   { label: "Autumn", value: "autumn" },
//   { label: "Aqua", value: "aqua" },
//   { label: "Coffee", value: "coffee"},
//   { label: "Black", value: "black"},
// ];

export default function ThemeController() {
  const { theme, themes, handleThemeChange } = useTheme();

  // const handleThemeChange = (newTheme) => {
  //   setTheme(newTheme);
  //   localStorage.setItem("selectedTheme", newTheme);
  // };
  
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </label>
      <ul className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
        {themes.map((t) => (
          <li key={t.value}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={t.label}
              value={t.value}
              checked={theme === t.value}
              onChange={() => handleThemeChange(t.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};