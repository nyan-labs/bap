<script lang="ts">
  const { children } = $props();
</script>

<div class="messages">
  {@render children()}
</div>

<style lang="scss">
  .messages {
    display: flex;
    flex-direction: column;
    padding: var(--app-padding-2);

    gap: var(--app-chat-spacing);

    overflow-y: scroll;
  }
</style>
