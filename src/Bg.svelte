<script lang="ts">
  import { onMount } from 'svelte'
  let bgElement: HTMLDivElement
  let blured = false
  let showScrollDownPict = true

  onMount(() => {
    window.addEventListener('scroll', (e) => {
      const height = window.innerHeight
      const scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop
      if(scrollTop > height / 2 && (scrollTop + height) < document.body.scrollHeight - height/2) {
        blured = true
      } else {
        blured = false
      }

      if(scrollTop <= 0) showScrollDownPict = true
      else showScrollDownPict = false
    })
  })
</script>

<div class="bg-container" bind:this={bgElement} class:bg-container__blured={blured}>
  <h1>rkun</h1>
  <h2 >Ren Tanaka</h2>

  <div class="scroll-down-pict" class:scroll-down-pict__show={showScrollDownPict}>
    <img src="array.svg">
  </div>
</div>

<style lang="scss">
  .bg-container {
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    transition: filter,color .2s;

    &__blured {
      filter: blur(10px);
      color: #808080;
    }
    h1 {
      margin: 0;
      font-size: 5rem;
    }
    h2 {
      margin: 0;
    }

    .scroll-down-pict {
      opacity: 0;
      position: absolute;
      bottom: 0;
      margin-bottom: 1rem;
      transition: opacity .2s;

      &__show {
        opacity: 1;
      }

      img {
        width: 5rem;
      }
    }
  }
</style>