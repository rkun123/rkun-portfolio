<script lang="ts">
  export let thumbSrc = '/kyutositsu.webp'
  export let title = 'Kyutositsu'
  export let description = `
  hogefuga
  `
  export let linkUrl = 'https://github.com/rkun123/kyutositsu'
</script>

<div class="work-card">
  <div class="work-card__thumb" >
    <img src={thumbSrc} alt="thumbnail">
  </div>
  <div class="work-card__description">
    <a href={linkUrl}>
      <h3 class="title">{title}</h3>
      <p>
        {description}
      </p>
    </a>
  </div>
</div>

<style lang="scss">
  .work-card {
    position: relative;
    width: 100%;
    overflow: hidden;
    transition: all .5s cubic-bezier(0, 1, 0, 1);
    margin-bottom: 3rem;
    border-radius: 5px;
    box-shadow: silver 2px 2px 10px;

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
      padding: 0 1rem;
      transition: padding-bottom .3s;
      cursor: pointer;
      a {
        text-decoration: none;
        color: #333;
      }

      &:hover {
        padding-bottom: 10%;
      }
    }
  }
</style>