<script lang="ts">
  export let thumbSrc = '/kyutositsu.webp'
  export let title = 'Kyutositsu'
  export let description = `
  hogefuga
  `
  export let linkUrl = 'https://github.com/rkun123/kyutositsu'
  import { navigateLinkHandlerFactory } from "../lib/navigate"

  const navigateLinkHandler = navigateLinkHandlerFactory(linkUrl)
  let onHover = false;
</script>

<div class="work-card" on:click={navigateLinkHandler} on:mouseenter={() => onHover = true} on:mouseleave={() => onHover = false}>
  <div class="work-card__thumb" >
    <img src={thumbSrc} alt="thumbnail">
  </div>
  <div class="work-card__description" class:hoverd={onHover}>
    <h3 class="title">{title}</h3>
    <p>
      {description}
    </p>
  </div>
</div>

<style lang="scss">
  .work-card {
    position: relative;
    width: 100%;
    overflow: hidden;
    transition: all .5s cubic-bezier(0, 1, 0, 1);
    border-radius: 5px;
    box-shadow: silver 2px 2px 10px;
    max-height: 30em;
    flex-basis: 540px;
    flex-grow: 1;
    align-self: stretch;
    cursor: pointer;

    .title {
      font-size: 1.8em;
      margin-bottom: 0;
    }

    &__thumb {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      overflow: hidden;
    }

    &__description {
      position: absolute;
      width: 100%;
      bottom: 0;
      background: linear-gradient(#fff0 0%, #fffa 20%, #fff 100%);
      backdrop-filter: blur(2px);
      padding: 1rem;
      transition: min-height .3s;
      min-height: 0%;

    }
    .hoverd {
      min-height: 50%;
    }
  }
</style>