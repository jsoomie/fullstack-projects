import { Theme, Mode } from "contexts";
import { useTheme } from "hooks";
import { modeIcon } from "assets";
import "./ThemeSelector.css";

const themeColors = Object.values(Theme);

export const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === Mode.DARK ? Mode.LIGHT : Mode.DARK);
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="dark/light toggle icon"
          onClick={toggleMode}
          style={{
            filter: mode === Mode.DARK ? "invert(100%)" : "invert(20%)",
          }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};
