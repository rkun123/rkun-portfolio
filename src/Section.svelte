<script lang="typescript">
  import { onMount } from "svelte"
  import { inview } from 'svelte-inview'
  let sectionElem: HTMLElement
  let showSection = false
  /*
  onMount(() => {
    window.addEventListener('scroll', (e) => {
      const scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop
      const sectionTop = sectionElem.scrollHeight
      showSection = sectionTop <= scrollTop + window.innerHeight/2
      console.log(sectionTop)
    })

  })
  **/
 function handleInViewChanged(e:CustomEvent<ObserverEventDetails>) {
   if(e.detail.inView && !showSection) {
     console.debug('show')
     showSection = true
   }
 }
</script>
<section use:inview={{}} on:change={handleInViewChanged} class="section" bind:this={sectionElem} class:section__show={showSection}>
  <div class="bar"></div>
  <div class="container">
    <slot></slot>
  </div>
</section>

<style lang="scss">
  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(64px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .bar {
    border: solid 1px black;
  }
  .section {
    min-height: 100vh;

    .container {
      margin: 0 2rem;
    }

    &__show {
      animation: slide-in 1s;
      opacity: 1;
    }
    
    opacity: 0;
  }
</style>