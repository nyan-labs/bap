<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  // svelte-ignore non_reactive_update
  let input: HTMLInputElement;

  const {
    type,
    name,
    value,
    ...rest
  }: {
    type: string;
    name?: string;
    value?: string;
  } & HTMLAttributes<HTMLInputElement> = $props();
</script>

<input bind:this={input} {...rest}
type={type} name={name} value={value}
class={`input`}
>

<style lang="scss">
  .input {
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

    width: min-content; ;

    transition: background 0.125s ease;
  }
</style>
