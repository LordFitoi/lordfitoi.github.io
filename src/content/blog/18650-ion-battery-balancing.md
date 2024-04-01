---
title: '18650 Ion Battery Pack Builder Algorithm'
description: 'The objective of this post is to develop a battery pack builder algorithm.'
pubDate: 'Mar 31 2024'
heroImage: '/images/battery-blueprint.jpeg'
---

<math display="block">
    <!-- <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
      <mfrac>
        <mn>1</mn>
        <msup>
          <mi>n</mi>
          <mn>2</mn>
        </msup>
      </mfrac>
    </mrow>
</math> -->
<div class="font-thin">
    <p class="font-thin">
        The objective of this post is to develop a battery pack algorithm for 18650 ion batteries. The algorithm must follow <a class="hover:underline" href="https://en.wikipedia.org/wiki/Battery_balancing" target="_blank"><b class="font-bold">the principles of battery balancing</b></a>. This means that the algorithm will try to equalize the charge of all the cells in the battery pack in this case by grouping each other with the best candidates for balancing. The rules of the algorithm will be as follows:
    </p>
    <br>
    <ol class="list-decimal ml-[24px] flex flex-col gap-[8px] text-xs">
        <li>
            The algorithm will group the cells that are close to each other in terms of charge level.
        </li>
        <li>
            The algorithm must be optimized to balance a group of 10,000 (100 series x 100 parallel) cells in less than 1 second.
        </li>
        <li>
            The charge divergence between the cells in the group must be the smallest possible.
        </li>
    </ol>
    <br />
    <p>The proposed algorith is a combinatorial tree that select the best candidate by using a certain creteria:</p>
    <br>
     <ol class="list-decimal ml-[24px] flex flex-col gap-[8px] text-xs">
        <li>
            Calculate <b class="font-bold">mean charge</b> of the group each group. (It will be the target charge of each group.)
        </li>
        <li>
            Then calculate the <b class="font-bold">partial mean charge</b>. of each tree level starting from the deepest level, and selecting the min and max charge of the previous level.
        </li>
        <li>
            Then select the cell with the <b class="font-bold">partial charge</b> closest to the <b class="font-bold">partial mean charge</b>.
        </li>
    </ol>
</div>
<figure class="flex flex-col my-[16px]">
    <img src="/images/ion-battery-graph.png" alt="battery graph analysis" />
    <span class="text-xs mx-auto">Fig. 1: Battery graph analysis</span>
</figure>
<div class="font-thin">
    <p class="font-thin">The Fig. 1 is a graph analysis of the battery pack using the selected criteria of the algorithm. The circle, square and romboid represents the cells, partial charge and partial mean charge of the tree level.
    </p>
</div>