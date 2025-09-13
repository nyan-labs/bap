
import type { Action } from 'svelte/action';

export const Tooltip: Action<HTMLElement, {
  title: string
}> = (node, params) => {
  console.log(node, params);

  $effect(() => {


    return () => {
      // teardown goes here
    };
  });
};