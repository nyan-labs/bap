<script lang="ts">
  import Button from "../ui/Button.svelte";

</script>
<aside class="server-sidebar">
  <header class="server-name">qzip's faggot tree</header>
  <div class="banner"></div>
  <div class="channels">
    <Button type="transparent" class="channel">
      <i class="channel-icon bi bi-hash"></i>
      <div class="channel-name">main</div>
    </Button>
    <Button type="transparent" class="channel">
      <i class="channel-icon bi bi-mic"></i>
      <div class="channel-name">main</div>
    </Button>
  </div>
</aside>

<style lang="scss">
  .server-sidebar {
    display: block;

    width: 100%;
    height: 100%;
    min-width: 12rem;

    overflow-y: scroll;

    & .banner {
      background: #000;
      width: 100%;
      aspect-ratio: 16/9;

      border-bottom: var(--app-border-width) solid var(--app-border-color);
    }

    & .server-name {
      border-bottom: var(--app-border-width) solid var(--app-border-color);
      padding: var(--app-padding-2);
    }

    & .channels {
      display: flex;
      flex-direction: column;

      padding: var(--app-padding-1);

      :global .channel {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--app-spacing-size);

        padding: var(--app-padding-1);

        opacity: 0.75;

        & .channel-icon {
          font-size: large;
        }
      }
    }
  }
</style>
