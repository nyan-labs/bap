<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
  import { Tooltip } from "@/lib/components/ui/Tooltip.svelte";
</script>

{#snippet list_item(item: {
  name: string
  
  image?: string,

  heyimlast?: boolean
})}
  <div class={`item ${`active`}`} style={item.heyimlast ? `margin-top: auto;` : ``}>
    <!-- to remove -->
    <div class="read"></div>

    <Button class="icon" type="secondary">
      {#if item.image} 
        <img class="image" src={item.image} alt={item.name} />
      {:else}
        
      <span class="text">
        {#each item.name.split(" ").splice(0, 3) as word}
        {word.charAt(0)}
        {/each}
      </span>
      {/if}
    </Button>

    <div class="empty"></div>
  </div>
{/snippet}

<nav class="server-n-user-list">
  <hr />
  {@render list_item({
    // image: "/ass.png",
    name: "qzip's faggot tree",
  })}

  <div class="you">
    <div use:Tooltip={{
      title: "ass"
    }} class="pfp">
      <img
        alt="pfp"
        src="https://cdn.discordapp.com/avatars/1128677020830806057/1f7108ac112e46595c3d5a681166afe8.png?size=2048"
      />
    </div>
  </div>
</nav>

<style lang="scss">
  hr {
    margin: 0 calc(var(--app-spacing-size) * 2);
  }

  .server-n-user-list {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    border-right: var(--app-border-width) solid var(--app-border-color);

    max-width: 4.25rem;

    padding: var(--app-padding-1) 0;

    height: 100%;

    & .item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      gap: var(--app-spacing-size);

      overflow: hidden;

      & .read {
        background: light-dark(#353432, #d1d1d1);
        height: 25%;
        width: var(--app-spacing-size);

        border-top-right-radius: var(--app-border-radius);
        border-bottom-right-radius: var(--app-border-radius);
      }
      &.active .read {
        height: 80%;
      }

      :global .icon {
        aspect-ratio: 1/1;
        border-radius: var(--app-border-radius);
        width: 100%;

        overflow: hidden;

        cursor: pointer;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      & .empty {
        width: var(--app-spacing-size);
      }
    }

    & .you {
      margin-top: auto;
      margin-left: auto;
      margin-right: auto;

      position: relative;

      display: flex;
      flex-direction: row;

      & .pfp {
        padding: 0 calc(2*var(--app-spacing-size));
        & img {
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: var(--app-border-radius);
        }
      }

      :global .details {
        position: absolute;

        left: 100%;
      }
    }
  }
</style>