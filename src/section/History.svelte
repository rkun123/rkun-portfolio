<script lang="ts">
  import SectionTitle from '../SectionTitle.svelte'
</script>

<SectionTitle sectionTitle="History"></SectionTitle>

<div class="history-table">
  <div class="row">
    <div class="column">1999/12</div>
    <div class="column">
      <h4>誕生</h4>
      愛媛県松山市
    </div>
  </div>
  <div class="row">
    <div class="column">2013/11</div>
    <div class="column">
      <h4>第４回全国少年少女チャレンジ創造コンテスト全国大会</h4>
      文部科学大臣賞
    </div>
  </div>
  <div class="row">
    <div class="column">2015/11</div>
    <div class="column">
      <h4>世界青少年発明展(IEYI2015)</h4>
      香港特別賞・台湾特別賞
    </div>
  </div>
  <div class="row">
    <div class="column">2018/04</div>
    <div class="column">
      <h4>九州工業大学情報工学部 入学</h4>
    </div>
  </div>
  <div class="row">
    <div class="column">2018/05 ~ 2021/06</div>
    <div class="column">
      <h4>株式会社オプティム アルバイト</h4>
      Web / Android開発
    </div>
  </div>
  <div class="row">
    <div class="column">2018/05 ~ 2021/06</div>
    <div class="column">
      <h4>Life is Tech! メンターアルバイト</h4>
      Unity, Web
    </div>
  </div>
</div>

<style lang="scss">
  .history-table {
    display: flex;
    flex-direction: column;
    border-spacing: 0 2rem;
    .row {
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
      .column {
        &:first-child {
          font-weight: bold;
          padding-right: 1rem;
          font-size: 1.2em;
          vertical-align: top;
          flex-basis: 20%;
        }

        h4 {
          margin: 0;
        }
      }

      &::after {
        margin-bottom: 1rem;
      }
    }
  }
</style>
