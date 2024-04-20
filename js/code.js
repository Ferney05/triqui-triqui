

// Agg nombres

import { VerificarInputs } from "./show_hidden_sections/sh_sections.js";
VerificarInputs()

// Symbols

import { replaceTextSymbols } from "./show_hidden_sections/sh_sections.js";
import { selectSymbols } from "./show_hidden_sections/sh_sections.js";

replaceTextSymbols()
selectSymbols()

// Playing

import { ShowPlayStart } from "./show_hidden_sections/sh_sections.js";
import { ShowNamesPlayers } from "./playing_start/play-start.js";
import { add_event_modal } from "./playing_start/apostar.js";

// Loading

import { show_loading } from "./loading/loading.js";

// ShowSymbols

import { ShowHiddenSections2 } from "./symbols/symbols.js";

ShowPlayStart()
ShowNamesPlayers()
add_event_modal()
show_loading()
ShowHiddenSections2()