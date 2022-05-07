<script lang="ts">
  import SectionTitle from '../SectionTitle.svelte'
  import Link from '../lib/link.svelte'

  function navigateLink(url: string) {
    window.open(url)
  }
</script>

<SectionTitle sectionTitle="Links"></SectionTitle>

<div class="link-list">
  <div class="link-wrapper">
    <Link url="https://twitter.com/rkunkunr" label="Twitter" />
  </div>
  <div class="link-wrapper">
    <Link url="https://github.com/rkun123" label="GitHub" />
  </div>
  <div class="link-wrapper">
    <Link url="https:///mstdn.rkunkunr.com/@rkun" label="Mastodon" />
  </div>
</div>

<style lang="scss">
  .link-list {
    display: flex;
    flex-direction: row;
    justify-content: start;
    font-size: 1.2rem;
  }

  .link-wrapper {
    margin-right: 1.2rem;
    &:last-child {
      margin-left: 0;
    }
  }
</style>
