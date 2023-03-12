/** Init */
const updatePlayerCount = (n: number) => Array.from(document.querySelectorAll('.players > .player'))
  .forEach((player, i) => {
    player.classList.toggle('hidden', i >= n);
    player.setAttribute('aria-hidden', `${i >= n}`);
  });

const updateBaseAuthority = (n: number) => Array.from(document.querySelectorAll('.players > .player > .score > span'))
  .forEach(score => {
    score.innerHTML = `${n}`;
  });

const update = () => {
  const inputPlayers = document.querySelector<HTMLInputElement>('.options input[name="players"]');
  const inputAuthority = document.querySelector<HTMLInputElement>('.options input[name="authority"]');

  updatePlayerCount(inputPlayers?.value ? parseInt(inputPlayers.value, 10) : 2);
  updateBaseAuthority(inputAuthority?.value ? parseInt(inputAuthority?.value, 10) : 50);
};

document.querySelector<HTMLButtonElement>('.options > button.reset')?.addEventListener('click', update);

/** Players */
Array.from(document.querySelectorAll('.players > .player'))
  .forEach(player => {
    const buttonAdd = player.querySelector<HTMLButtonElement>('button.add');
    const buttonSubtract = player.querySelector<HTMLButtonElement>('button.subtract');
    const score = player.querySelector<HTMLDivElement>('.score > span');

    buttonAdd?.addEventListener('click', () => {
      if (score) score.innerText = `${parseInt(score.innerText, 10) + 1}`;
    });

    buttonSubtract?.addEventListener('click', () => {
      if (score) score.innerText = `${parseInt(score.innerText, 10) - 1}`;
    });
  });

update();
