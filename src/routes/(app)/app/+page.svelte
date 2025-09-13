<script lang="ts">
  import { m } from "$lib/paraglide/messages";
    import Chat from "@/lib/components/app/Channel/Chat.svelte";
    import Message from "@/lib/components/app/Channel/Message.svelte";
    import MessageBox from "@/lib/components/app/Channel/MessageBox.svelte";
  import ServerSidebar from "@/lib/components/app/ServerSidebar.svelte";
  import ServerUserNav from "@/lib/components/app/ServerUserNav.svelte";
  
  import LightDarkToggle from "@/lib/components/LightDarkToggle.svelte"; 
  import Button from "@/lib/components/ui/Button.svelte";
  import TextArea from "@/lib/components/ui/TextArea.svelte";
</script>


<div class="master-layout">
  <aside class="chat-aside">
    <div class="chat-aside-row">
      <ServerUserNav />
      <ServerSidebar />
    </div>
  </aside>
  <main class="channel">
    <header class="channel-name">main</header>
    <Chat>
      {#each { length: 25 }, a}
        <Message id={"hi"} created={Date.now()} user={{
          id: "123456",
          username: "qzip",
        }}>sadsdsa</Message>
      {/each}
    </Chat>
    <div class="bottom-bar">
      <div class="typing"><b>qzip</b> is typing...</div>
      <MessageBox />
    </div>
  </main>
</div>

<style lang="scss">
  .master-layout {
    display: flex;
    flex-direction: row;
    height: 100%;
    & .chat-aside {
      display: flex;
      flex-direction: column;

      height: 100%;
      
      border-right: var(--app-border-width) solid var(--app-border-color);

      & .chat-aside-row {
        display: flex;
        flex-direction: row;
        flex: 1;
      }
      max-width: 25rem;
      width: 20rem;
      min-width: 15rem;
      
      resize: horizontal;

      overflow: hidden;
    }

    & .channel {
      display: flex;
      flex-direction: column;

      flex: 1;
      & .channel-name {
        border-bottom: var(--app-border-width) solid var(--app-border-color);
        padding: var(--app-padding-2);
      }

      & .bottom-bar { 
        display: flex; 
        flex-direction: column; 

        gap: var(--app-spacing-size);
        
        margin: var(--app-padding-1);
        margin-top: auto;

        & .typing {
          font-size: small;
        }
      }
    }
  }
</style>
