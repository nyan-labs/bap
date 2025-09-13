<script>
  import { enhance } from '$app/forms';
    import Button from '@/lib/components/ui/Button.svelte';
    import Input from '@/lib/components/ui/Input.svelte';

  let { data, form } = $props();
</script>

<form method="POST" action="?/create" use:enhance>
  {JSON.stringify(form)}
  <Input 
    type="text" 
    name="username"
    placeholder="ASS"
  />
  <Input 
    type="text" 
    name="password" 
    value="ass"
    placeholder="DICK"
  />
  <Button submit type="primary">hi</Button>
</form>