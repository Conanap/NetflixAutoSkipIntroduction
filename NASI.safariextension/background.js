'use strict';

console.log("NASI loaded.");

// prereq functions
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
};

async function check() {
  while(true) {
      while(document.getElementsByClassName("skip-credits").length == 0) {
        await sleep(1000);
      }

      await sleep(1000);
      if($(".skip-credits")[0])
        $(".skip-credits")[0].children[0].click();

    console.log("Skipped.");
    await sleep(80000);
  }
};

check();