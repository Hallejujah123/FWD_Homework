<!-- <script lang="ts">

</script> -->
<script context="module">
  import { browser, dev } from "$app/env";

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<main>
  <div class="wrapper">
    <div class="row">
      <div class="col span4 box">
        <h2>Something(correct later)</h2>
        <ul>
          <li>
            Something (correct later)
          </li>
          <br />
        </ul>
      </div>
      <div class="col span4 box">
        <h2>Something(correct later)</h2>
        <ul>
          <li>
            Something(correct later)
          </li>
        </ul>
      </div>
      <div class="col span4 box">
        <h2>Something(correct later)</h2>
        <ul>
          <li>
            Something(correct later)
          </li>
      </div>
    </div>
  </div>
</main>

<style>
  h2{
    margin-left: 5%;
  }
  li {
    margin-right: 5%;
    margin-left: 5%;
    list-style-type: square;
  }

  .box {
    background-color: #34c977;
    border-radius: 15px;
    word-break: break-word;
    max-height: 700px;
    padding-top: 1%;
    overflow: auto;
  }
  
</style> 
