<script lang="typescript">
  import SectionTitle from '../SectionTitle.svelte'
</script>

<SectionTitle sectionTitle="About"></SectionTitle>

<table class="skills-table">
  <tr>
    <td>Webフロントエンド</td>
    <td>JavaScript / TypeScript / React.js / Vue.js / Svelte</td>
  </tr>
  <tr>
    <td>Webバックエンド</td>
    <td>Ruby on Rails / FastAPI / gin</td>
  </tr>
  <tr>
    <td>モバイル開発</td>
    <td>Android (Kotlin)</td>
  </tr>
</table>

<style lang="scss">
  .skills-table {
    tr {
      td {
        &:first-child {
          font-weight: bold;
          padding-right: 1rem;
        }

      }
    }
  }
</style>
