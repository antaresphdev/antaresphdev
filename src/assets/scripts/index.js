import "./animations/navigation-bar"
import { ColorScheme } from "./libraries/color-scheme"
import { Toggle } from './components/toggle'

window.colorScheme = new ColorScheme();

const popupToggles = document.querySelectorAll('button[data-toggle]')
popupToggles.forEach(toggle => console.log(new Toggle(toggle)))
