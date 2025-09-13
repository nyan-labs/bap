<script lang="ts">
  import Time from "svelte-time";
  import type { Snippet } from "svelte";

  const props: {
    id: string,
    user: {
      id: string,
      username: string,
    },
    created: number,

    children: Snippet,
  } = $props();
</script>

<div class="message">
  <div class="pfp">
    <img
      alt="pfp"
      src="https://cdn.discordapp.com/avatars/1128677020830806057/1f7108ac112e46595c3d5a681166afe8.png?size=2048"
    />
  </div>
  <div data-message-id={props.id} data-message-author-id={props.user.id} class="info-n-contents">
    <div class="info">
      <div class="username">{props.user.username}</div>
      <Time class="date" format={"MMM D, YYYY h:mm A"} timestamp={props.created}></Time>
    </div>
    <div class="content">{@render props.children()}</div>
  </div>
</div>

<style lang="scss">
  .message {
    display: flex;
    flex-direction: row;
    gap: var(--app-padding-2);
    & .pfp {
      & img {
        width: 2.75em;
        height: 2.75em;
        border-radius: var(--app-border-radius);
      }
    }
    & .info-n-contents {
      display: flex;
      flex-direction: column;
      gap: var(--app-spacing-size);

      & .info {
        overflow: hidden;
        overflow-wrap: anywhere;
        
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: var(--app-spacing-size);

        :global .date {
          color: var(--app-muted-color-1);
          font-size: small;
        }
      }
      & .content {
        overflow: hidden;
        overflow-wrap: anywhere;
      }
    }
  }
</style>
