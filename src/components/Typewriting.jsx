const Typewriting = () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  setTimeout(() => {
    const phrases = ["Web Developer", "Web Designer", "Graphic Designer"];
    const el = document.getElementById("typewriter");

    let sleepTime = 100;
    let curPhraseIndex = 0;

    const textLoop = async () => {
      while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
          el.innerText = curWord.substring(0, i + 1);
          await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
          el.innerText = curWord.substring(0, i - 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) {
          curPhraseIndex = 0;
        } else curPhraseIndex++;
      }
    };
    textLoop();
  }, 2000);
};

export default Typewriting;
