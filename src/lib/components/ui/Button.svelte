<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  const {
    children,
    type,
    submit,
    reset,
    ...rest
  }: {
    children?: Snippet;
    type?: ButtonTypes;
    submit?: boolean;
    reset?: boolean;
  } & HTMLAttributes<HTMLButtonElement> = $props();

  type ButtonTypes = "primary"|"secondary"|"transparent";
</script>

<button {...rest}
type={submit 
    ? "submit" 
    : reset 
      ? "reset" 
      : "button"
}
class={`button button-${type ?? "primary"} ${rest.class || ""}`}
>{@render children?.()}</button>

<style lang="scss">
  button.button {
    appearance: none;
    display: inline;

    cursor: pointer;

    --padding: var(--app-padding-1);
    --border-radius: var(--app-border-radius);
    &.button-primary {
      --border: 0.1em solid hsl(from var(--background) h s calc(l - 5));

      --background: hsl(
        from var(--tropical-indigo) h calc(s + 22) calc(l - 4)
      );
      --color: #fff;
      &:hover {
        --background: hsl(
          from var(--tropical-indigo) h calc(s - 22) calc(l - 22)
        );
      }
      &:active {
        --background: hsl(
          from var(--tropical-indigo) h calc(s - 44) calc(l - 44)
        );
      }
    }

    &.button-secondary {
      --border: 0.1em solid hsl(from var(--app-background) h s calc(l + 25));
      
      --base-color: var(--app-background);
      --background: hsl(from var(--base-color) h s calc(l + 12));
      --color: var(--app-color);
      &:hover {
        --background: hsl(from var(--base-color) h s calc(l + 18));
      }
      &:active {
        --background: hsl(from var(--base-color) h s calc(l - 14));
      }
    }

    &.button-transparent {
      --background: transparent;
      --border: none;
      &:hover {
        --background: light-dark(
          hsl(from var(--app-background) h s calc(l - 3)),
          hsl(from var(--app-background) h s calc(l + 12))
        )
      }
      &:active {
        --background: light-dark(
          hsl(from var(--app-background) h s calc(l - 16)),
          hsl(from var(--app-background) h s calc(l + 3))
        )
      }
    }

    color: var(--color);
    background: var(--background);

    border: var(--border);
    border-radius: var(--border-radius);

    padding: var(--padding);

    min-width: 2em;

    transition: background 0.125s ease;
  }
</style>
