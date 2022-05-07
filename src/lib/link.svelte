<script lang="ts">
  export let url: string
  export let label: string
  let hover = false;

  function navigate() {
    window.open(url)
  }
</script>

<div
  class="link"
  on:click={navigate}
>
  { label }
</div>


<style lang="scss">
  .link {
    position: relative;
    cursor: pointer;
    transition: padding .2s ease;
    padding: 0 0 .3rem 0;

    &:hover {
      padding: .3rem 0 0 0;
    }

  }
</style>