import { Theme } from "contexts";
import { useTheme } from "hooks";
import "./ThemeSelector.css";

const themeColors = Object.values(Theme);

export const ThemeSelector = () => {
  const { changeColor } = useTheme();

  return (
    <div className="theme-selector">
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
