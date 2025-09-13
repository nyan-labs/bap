<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  // svelte-ignore non_reactive_update
  let textarea: HTMLTextAreaElement;

  // todo:
  // basically say fuck you to textarea and make a custom pseudo textarea
  // so you can have ur richtext and shit
  // uggh

  const {
    fit_content,
    ...rest
  }: {
    fit_content: boolean
    rows: number
  } & HTMLAttributes<HTMLTextAreaElement> = $props();

  const auto_height = () => {
    textarea.innerHTML = textarea.textContent;

    textarea.style.height = ``;
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  onMount(() => {
    if(textarea) {
      if(fit_content) {
        auto_height();
        textarea.addEventListener("input", auto_height)
      }
    }
  })
</script>

<textarea bind:this={textarea} {...rest}
class={`textarea`}
></textarea>

<style lang="scss">
  .textarea {
    &:empty:before {
      content: attr(placeholder); 
      color: var(--app-muted-color-1);
    }
    appearance: none;
    display: inline;

    cursor: text;

    --background: hsl(from var(--app-background) h s calc(l + 7));

    font-family: var(--app-font-family);
    font-size: var(--app-font-size);

    --padding: var(--app-padding-1);
    --border-radius: var(--app-border-radius);

    --border-color: var(--app-border-color);
    --border: var(--app-border-width) solid var(--border-color);

    &:focus {
      outline: none;

      --border-color: var(--tropical-indigo);
    }

    background: var(--background);

    border: var(--border);
    border-radius: var(--border-radius);

    padding: var(--padding);

    resize: none;

    width: min-content; 

    overflow: hidden;
    overflow-wrap: anywhere;

    transition: background 0.125s ease;
  }
</style>
