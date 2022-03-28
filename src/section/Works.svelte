<script lang="ts">
  import SectionTitle from '../SectionTitle.svelte'
  import WorkCard from './WorkCard.svelte'
</script>

<SectionTitle sectionTitle="Works"></SectionTitle>

<div class="work-list">
  <WorkCard title="Kyutositsu" description="Grid style Tag based SNS"/>
  <WorkCard thumbSrc="no-more-youtube.webp" title="no-more-youtube" description="YouTube player which don't melt your time 😍" linkUrl="https://topaz.dev/projects/c18lrsa23akg00ci9mig"/>
</div>


<style lang="scss">
  .work-list {
    display: flex;
    flex-direction: row;
    gap: 3rem 3rem;
    flex-wrap: wrap;
  }
</style>
