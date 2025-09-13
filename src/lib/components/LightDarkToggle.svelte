<script lang="ts">
  import { PrefersColorScheme, LightDark } from "@/lib/stores/LightDark";
  import { get } from "svelte/store";
  import { wait } from "$lib/utils/wait";
  
  import Button from "$lib/components/ui/Button.svelte";

  let elem: HTMLDivElement|undefined;

  let promise: ReturnType<typeof wait>|undefined = undefined
  const light_dark_toggle = async () => {
    if(promise) return;
    
    if(elem) elem.classList.add("disabled")
    
    if(get(LightDark) === "dark") {
      LightDark.set("light")
    } else {
      LightDark.set("dark")
    }

    if(!promise) promise = wait(300);
    await promise;
    promise = undefined;

    if(elem) elem.classList.remove("disabled")
  }
</script>


<div bind:this={elem} class="theme-switcher">
  <Button onclick={async () => await light_dark_toggle()} type="secondary" aria-label="theme switch"></Button>
</div>

<style lang="scss">
  .theme-switcher {
    &:global(.disabled) :global(button) {
      cursor: not-allowed;
      opacity: 0.5;
    }
    & :global(button) {
      display: flex;

      //js-set theme
      &::before {
        transition: opacity 0.5s ease;
      }

      :global(html[theme="dark"]) &::before {
        font-family: "bootstrap-icons";
        content: "\F497";
        opacity: 1;
      }
      :global(html[theme="light"]) &::before {
        font-family: "bootstrap-icons";
        content: "\F1D2";
        opacity: 1;
      }

      //prefers theme
      @media (prefers-color-scheme: dark) { 
        &::before {
          font-family: "bootstrap-icons";
          content: "\F497";
          opacity: 0.6;
        }
      }
      @media (prefers-color-scheme: light) { 
        &::before {
          font-family: "bootstrap-icons";
          content: "\F1D2";
          opacity: 0.6;
        }
      }
    }
  }
</style>