<script>
  import Button from "$lib/components/ui/Button.svelte";
  import TextArea from "$lib/components/ui/TextArea.svelte";
</script>

<div class="message-box">
  <Button type="transparent" class="bi bi-upload" aria-label="upload"></Button>
  <TextArea rows={1} fit_content placeholder="message #main"/>
  <Button type="transparent" class="emoji-picker" aria-label="emoji picker">
    <div class="emoji">🐈</div>
  </Button>
  <Button type="transparent" class="bi bi-send" aria-label="send"></Button>
</div>

<style lang="scss">
  .message-box {
    display: flex;
    flex-direction: row;

    align-items: baseline;

    gap: var(--app-spacing-size);

    :global .textarea {
      width: 100%;

      max-height: 40svh;

      // ha ck
      padding: var(--app-padding-1);
      margin: auto;

      font-size: var(--app-font-size);
    }

    :global button {
      font-size: large;
      &.emoji-picker {
        & .emoji {
          filter: grayscale(1);

          transition: filter ease 0.1s;
        }
        &:hover .emoji {
          filter: invert(0) grayscale(0) !important;
        }
        :global(html[theme="light"]) & .emoji {
          filter: invert(1) grayscale(1);
        }
      }
    }
  }
</style>
