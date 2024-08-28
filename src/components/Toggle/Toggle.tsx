import { useTheme } from '../../contexts/ThemeContext'

function Toggle() {

  const { theme, darkMode, lightMode } = useTheme();

  const onToggleTheme = (e: any) => {
    const toggleVal = e.currentTarget.checked;
    if (toggleVal) {
      darkMode();
    } else {
      lightMode();
    }
  }


  return (
    <div className='toggle-container'>
      <input type="checkbox" name="toggleTheme" id="toggleTheme"
        checked={theme === 'dark'}
        onChange={onToggleTheme}
      />
    </div>
  )
}

export default Toggle