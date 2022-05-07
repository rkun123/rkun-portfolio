<script lang="ts">
import { tweened } from 'svelte/motion'
import { cubicOut } from 'svelte/easing'

  let sections: {
    title: string,
    element: HTMLElement
  }[] = []

  const topElement = document.querySelector('body')

  let scrollTop = tweened(0, {
    duration: 400,
    easing: cubicOut
  })

  let sectionIndex = 0

  window.addEventListener('load', () => {
    document.querySelectorAll<HTMLElement>('section.section').forEach((elem, index) => {
      sections[index] = {
        title: elem.querySelector('h2').innerText,
        element: elem
      }
    })
  })

  scrollTop.subscribe(() => {
    console.debug(`scrollTop: ${$scrollTop}`)
    window.scrollTo({
      top: $scrollTop
    })
  })

  function scrollTo(element: HTMLElement) {
    console.debug(`scrollTo: ${element.scrollTop}`)
    scrollTop.set(document.scrollingElement.scrollTop || document.body.scrollTop, {
      duration: 0
    })
    scrollTop.set(element.offsetTop)
  }

  function next() {
    if(sectionIndex+1 >= sections.length) return
    sectionIndex++
    scrollTo(sections[sectionIndex].element)
  }

  function previous() {
    if(sectionIndex-1 < 0) return
    sectionIndex--
    scrollTop.set(sectionIndex)
    scrollTo(sections[sectionIndex].element)
  }
  
</script>

<div class="navigator">
  <div
    on:click={() => scrollTo(topElement)}
    class="navigate"
  >Top</div>
  { #each sections as section, idx }
    <div
      on:click={() => scrollTo(sections[idx].element)}
      class="navigate"
    >
      { section.title }
    </div>
  {/each}
</div>

<style lang="scss">
  .navigator {
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    top: 0;
    background-color: #fff;
    background: linear-gradient(#ffffff 20%, #00000000);
    padding-bottom: 1rem;

    .navigate {
      margin: .6rem 0;
      padding: 0 .3rem;
      font-weight: bold;
      cursor: pointer;
      transition: padding-top .2s;

      &:last-child {
        border-right: none;
      }
      &:hover {
        padding-top: .2rem;
      }
    }
  }
</style>