import "./animations/navigation-bar"
import { ColorScheme } from "./libraries/color-scheme"
import { Toggle } from './components/toggle'
import { ToggleController } from "./components/toggle-controller";

window.colorScheme = new ColorScheme();

const popupToggles = document.querySelectorAll('button[data-toggle]')
const toggles = [...popupToggles].map(toggle => new Toggle(toggle))

const toggleController = new ToggleController(toggles)