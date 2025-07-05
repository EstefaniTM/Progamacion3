import AccessWithLimit from "./AccessWithLimit";
import AutoCounter from "./AutoCounter";
import LanguageSwitcher from "./LanguageSwitcher";

export default function indexUseStates() {
  return (
    <div className="app">
      <h1>Demos de Hooks</h1>
      <AccessWithLimit />
      <AutoCounter />
      <LanguageSwitcher />
    </div>
    
  );
}
