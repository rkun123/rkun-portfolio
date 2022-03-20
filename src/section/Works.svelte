<script lang="typescript">
  import SectionTitle from '../SectionTitle.svelte'
  import WorkCard from './WorkCard.svelte'
</script>

<SectionTitle sectionTitle="Works"></SectionTitle>

<div class="work-list">
  <WorkCard title="Kyutositsu" description="Grid style Tag based SNS"/>
  <WorkCard thumbSrc="no-more-youtube.webp" title="no-more-youtube" description="YouTube player which don't melt your time 😍"/>
</div>


<style lang="scss">
  .work-list {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }
</style>
