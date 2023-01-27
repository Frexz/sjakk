<script>
    import { Sjakkbrett } from "./klasser/Sjakkbrett";

    let sjakkbrett = new Sjakkbrett()

    function sjekkBakgrunnsfarge(i, j) {
      if (i%2 == 0) {
        if (j%2 == 0) {
            return "white"
        } else {
            return "teal"
        }
      } else {
          if (j%2 == 0) {
            return "teal"
          } else {
            return "white"
          }
      }
    }
</script>

<div class="brett">
  {#each sjakkbrett.brett as rad, i}
    {#each rad as kol, j}
      <div class="rute" style="background-color: {sjekkBakgrunnsfarge(i, j)}">
        {#if sjakkbrett.brett[i][j] != null}
          <img src="src/img/{sjakkbrett.brett[i][j]}" alt="">
        {/if}
      </div>
    {/each}
  {/each}
</div>

<button on:click={() => sjakkbrett.brett[6][2].flytt(5, 2)}>Flytt Brikke</button>


<style>
  button {
    margin-top: 10px;
  }

  img {
    width: 70px;
    height: 70px;
  }

  .brett {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
  }

  .rute {
    border: 1px solid black;
    height: 80px;
    width: 80px;
  }
</style>