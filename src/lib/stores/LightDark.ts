import { browser } from "$app/environment";
import { get, readable, writable } from "svelte/store";

type LightDarkValues = "light"|"dark";

const localstorage_key = "app.light-dark";

const default_value = "dark"

export const LightDark = (() => {
  const local_set = (theme: LightDarkValues) => browser && localStorage
    ? localStorage.setItem(localstorage_key, theme)
    : void 0; // to match localstorage lol

  const local_get = () => browser && localStorage
    ? localStorage.getItem(localstorage_key) as LightDarkValues
    : default_value;

  const store = writable<LightDarkValues>(local_get());

  store.subscribe((theme) => browser && 
    (local_set(theme), document.documentElement.setAttribute("theme", theme))
  );

  browser && window.addEventListener("storage", (event) => {
    if(event.key === localstorage_key) {
      store.set(local_get())
    }
  })

  return {
    subscribe: store.subscribe,
    set: (theme: LightDarkValues) => {
      store.set(theme)
    },
    update: (theme: LightDarkValues) => {
      store.update((s) => theme)
    },
  }
})();

// i realized i didnt need this for css IM SO STUPID
export const PrefersColorScheme = readable<LightDarkValues>(default_value, (set) => {
  browser && window.matchMedia("(prefers-color-scheme: light)").addEventListener('change', event => {
    set(event.matches ? "light" : "dark");
  });
});