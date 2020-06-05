const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hey 👋🏼, <br>my name is Nils and I'm a hobby developer. Since 2015 I'm watching web trends and code as a hobby. You want to know more about me? Type help to see the supported commands.",
  skills:
    '<span class="code">Languages:</span>  HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git<br><span class="code">Frameworks:</span> React.js',
  education:
    '<span class="code">2018 - 2021</span>, Cooperative State University of Baden-Württemberg, Bachelor of Arts <br>',
  experience: "Is building up 🔝",
  contact:
    "You can write me an <a href='mailto:mail@nils-eisenhauer.de' class='success link'>email</a> or visit me on <a href='https://www.instagram.com/eisenils/' class='success link'>Instagram</a>.",
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">${input} - command not found. Type <span class="code">help</span> for available commands</div>`;
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
