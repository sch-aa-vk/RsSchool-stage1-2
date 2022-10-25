let size = 4;

createHtmlElements();

function createHtmlElements() {
    const body = document.querySelector("body");
    const page = document.createElement("div");
    page.className = "page";
    body.append(page);

    const audio = document.createElement("audio");
    audio.id = "song";
    body.append(audio);

    const source = document.createElement("source");
    source.setAttribute("src", "../audio/schelchok-po-derevyannoy-poverhnosti.mp3");
    source.setAttribute("type", "audio/mp3");
    audio.append(source);

    const fifteen = document.createElement("div");
    fifteen.className = "fifteen";
    fifteen.id = "fifteen";
    page.append(fifteen);

    for(let i = 1; i <= size ** 2; i++) {
        const btn = document.createElement("button");
        btn.className = "item";
        btn.style.width = `calc(100% / ${size})`;
        btn.style.height = `calc(100% / ${size})`;
        btn.dataset.matrixId = i;
        fifteen.append(btn);

        const span = document.createElement("span");
        span.className = "item-span";
        span.innerHTML = i;
        btn.append(span);
    }

    const timeScoreContainer = document.createElement("div");
    timeScoreContainer.className = "t-s-container";
    page.prepend(timeScoreContainer);

    const timeContainer = document.createElement("div");
    timeContainer.className = "time-container";
    timeScoreContainer.append(timeContainer);

    const timeText = document.createElement("p");
    timeText.className = "time-text";
    timeText.innerHTML = "Time:";
    timeContainer.append(timeText);

    const time = document.createElement("p");
    time.className = "time";
    time.id = "time";
    time.innerHTML = "00:00";
    timeContainer.append(time);

    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    timeScoreContainer.append(scoreContainer);

    const scoreText = document.createElement("p");
    scoreText.className = "score-text";
    scoreText.innerHTML = "Moves:";
    scoreContainer.append(scoreText);

    const score = document.createElement("p");
    score.className = "score";
    score.id = "score";
    score.innerHTML = "0";
    scoreContainer.append(score);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    page.prepend(buttonContainer);

    const shuffleBtn = document.createElement("button");
    shuffleBtn.className = "button";
    shuffleBtn.classList.add("btn");
    shuffleBtn.id = "shuffle";
    shuffleBtn.innerHTML = "Shuffle/Start";
    buttonContainer.append(shuffleBtn);

    const stopBtn = document.createElement("button");
    stopBtn.className = "button";
    stopBtn.classList.add("btn");
    stopBtn.id = "stop";
    stopBtn.innerHTML = "Stop";
    buttonContainer.append(stopBtn);

    const saveBtn = document.createElement("button");
    saveBtn.className = "button";
    saveBtn.classList.add("btn");
    saveBtn.id = "save";
    saveBtn.innerHTML = "Save";
    buttonContainer.append(saveBtn);

    const resultBtn = document.createElement("button");
    resultBtn.className = "button";
    resultBtn.classList.add("btn");
    resultBtn.id = "result";
    resultBtn.innerHTML = "Result";
    buttonContainer.append(resultBtn);

    const sizeContainer = document.createElement("div");
    sizeContainer.className = "size-container";
    page.append(sizeContainer);

    const sizeText = document.createElement("p");
    sizeText.className = "size-text";
    sizeText.innerHTML = "Other sizes:";
    sizeContainer.append(sizeText);

    const size3x3 = document.createElement("a");
    size3x3.setAttribute("href", "../3x3/index.html");
    size3x3.className = "size";
    size3x3.innerHTML = "3x3";
    sizeContainer.append(size3x3);

    const size4x4 = document.createElement("a");
    size4x4.setAttribute("href", "../4x4/index.html");
    size4x4.className = "size";
    size4x4.innerHTML = "4x4";
    sizeContainer.append(size4x4);

    const size5x5 = document.createElement("a");
    size5x5.setAttribute("href", "../5x5/index.html");
    size5x5.className = "size";
    size5x5.innerHTML = "5x5";
    sizeContainer.append(size5x5);

    const size6x6 = document.createElement("a");
    size6x6.setAttribute("href", "../6x6/index.html");
    size6x6.className = "size";
    size6x6.innerHTML = "6x6";
    sizeContainer.append(size6x6);

    const size7x7 = document.createElement("a");
    size7x7.setAttribute("href", "../7x7/index.html");
    size7x7.className = "size";
    size7x7.innerHTML = "7x7";
    sizeContainer.append(size7x7);

    const size8x8 = document.createElement("a");
    size8x8.setAttribute("href", "../8x8/index.html");
    size8x8.className = "size";
    size8x8.innerHTML = "8x8";
    size8x8.dataset.size = 5;
    sizeContainer.append(size8x8);

    const wonContainer = document.createElement("div");
    wonContainer.className = "won-container";
    fifteen.append(wonContainer);

    const wonText = document.createElement("p");
    wonText.className = "won-text";
    wonContainer.append(wonText);
}

/* main functions */

const containerNode = document.getElementById("fifteen");
const itemNodes = Array.from(containerNode.querySelectorAll(".item"));
const countItems = size ** 2;

const shuffleBtn = document.getElementById("shuffle");
const stopBtn = document.getElementById("stop");
const saveBtn = document.getElementById("save");
const resultBtn = document.getElementById("result");

const score = document.getElementById("score");
let scoreNumber = Number(score.innerHTML);
const time = document.getElementById("time");
let second = 0;
let minute = 0;
let timeInterval;

window.onload = function () {
    const shuffletArray = shuffleArray(matrix.flat());
    matrix = getMatrix(shuffletArray);
    setPositionItems(matrix);
    resetTime();
    timeInterval = setInterval(increaseTime, 1000);
}

if(itemNodes.length != countItems) {
    throw new Error(`'должно быть ровно ${countItems} элементов в HTML`);
}

itemNodes[countItems - 1].style.display = "none";
let matrix = getMatrix(
    itemNodes.map(item => Number(item.dataset.matrixId))
);
setPositionItems(matrix);

shuffleBtn.addEventListener("click", () => {
    const shuffletArray = shuffleArray(matrix.flat());
    matrix = getMatrix(shuffletArray);
    setPositionItems(matrix);
    resetTime();
    timeInterval = setInterval(increaseTime, 1000);
    stopBtn.removeAttribute("disabled", "disabled");
    stopBtn.style.cursor = "pointer";
    scoreNumber = 0;
    score.innerHTML = scoreNumber;
})

const scoreboard = document.querySelector(".scoreboard");
resultBtn.addEventListener("click", () => {
    alert("You`re results are undefined");
})

const blankNumber = countItems;
containerNode.addEventListener("click", (event) => {
    changePosition(event);
})

containerNode.addEventListener("mousedown", (event) => {
    changePosition(event);
})

containerNode.addEventListener("mouseup", (event) => {
    let scoreN = scoreNumber;
    changePosition(event);
    if(scoreN + 1 <= scoreNumber) {
        scoreNumber -= 2;
    }
})

saveBtn.addEventListener("click", () => {
    alert("Sorry, this function is not working now :( ");
})

/* helpers */

function getMatrix(arr) {
    const matrix = [[], [], [], []];
    let y = 0; 
    let x = 0;

    for(let i = 0; i < arr.length; i++) {
        if(x >= 4) {
            y++;
            x = 0;
        }

        matrix[y][x] = arr[i];
        x++;
    }

    return matrix;
}

function setPositionItems(matrix) {
    for(let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix[y].length; x++) {
            const value = matrix[y][x];
            const node = itemNodes[value - 1];
            setNodeStyles(node, x, y);
        }
    }
}

function setNodeStyles(node, x, y) {
    const shiftPs = 100;
    node.style.transform = `translate3D(${x * shiftPs}%, ${y * shiftPs}%, 0)`;
}

function shuffleArray(arr) {
    return arr
        .map(value => ({ value, sort: Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(({ value}) => value);
}

function findCoordinatesByNumber(number, matrix) {
    for(let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == number) return {x, y};
        }
    }
    return null;
}

function isValidForSwap(coords1, coords2) {
    const diffX = Math.abs(coords1.x - coords2.x);
    const diffY = Math.abs(coords1.y - coords2.y);

    return(diffX === 1 || diffY === 1) && (coords1.x === coords2.x || coords1.y === coords2.y);
}
function swap(coords1, coords2, matrix) {
    const coords1Number = matrix[coords1.y][coords1.x];
    matrix[coords1.y][coords1.x] = matrix[coords2.y][coords2.x];
    matrix[coords2.y][coords2.x] = coords1Number;
    score.innerHTML = `${scoreNumber+=1}`;

    if(isWon(matrix)) {
        addWonClass();
    }
}

const winFlatArr = new Array(countItems).fill(0).map((_item, i) => i + 1);
function isWon(matrix) {
    const flatMatrix = matrix.flat();
    
    for(let i = 0; i < winFlatArr.length; i++) {
        if(flatMatrix[i] != winFlatArr[i]) {
            return false;
        }
    }

    return true;
}

function addWonClass() {
    alert(`Hooray! You solved the puzzle in ${time.innerHTML} and ${score.innerHTML} moves!`);
    stopTime();
    setTimeout(() => {
        const shuffletArray = shuffleArray(matrix.flat());
        matrix = getMatrix(shuffletArray);
        setPositionItems(matrix);
        resetTime();
        timeInterval = setInterval(increaseTime, 1000);
        stopBtn.removeAttribute("disabled", "disabled");
        stopBtn.style.cursor = "pointer";
        scoreNumber = 0;
        score.innerHTML = scoreNumber;
    }, 1000);
}

function changePosition(event) {
    const buttonNode = event.target.closest("button");
    if(!buttonNode) return;

    const buttonNumber = Number(buttonNode.dataset.matrixId);
    const buttonCoords = findCoordinatesByNumber(buttonNumber, matrix);
    const blankCoords = findCoordinatesByNumber(blankNumber, matrix);
    const isValid = isValidForSwap(buttonCoords, blankCoords);

    if(shuffleBtn.hasAttribute("disabled") || !stopBtn.classList.contains("btn")) {
        isValid = false;
    }
    
    if(isValid) {
        swap(blankCoords, buttonCoords, matrix);
        moveTile();
        setPositionItems(matrix);
    }
}


function increaseTime() {
    let seconds = ++second;
    let minutes = minute;
    if(seconds > 59) {
        second = 0;
        minute += 1;
        time.innerHTML = `0${minutes}:${seconds}`;
    } else if(seconds < 10) {
        time.innerHTML = `0${minutes}:0${seconds}`;
    } else if(minute > 9) {
        time.innerHTML = `${minutes}:${seconds}`;
    } else {
        time.innerHTML = `0${minutes}:${seconds}`;
    }
}

function stopTime() {
    clearInterval(timeInterval);
}

function resetTime() {
    second = 0;
    minute = 0;
    time.innerHTML = `00:00`;
    stopTime();
}

let count = 0;
stopBtn.addEventListener("click", () => {
    if(count % 2 == 0) {
        stopTime();
        count += 1;
        setDisabledStyle();
    } else {
        timeInterval = setInterval(increaseTime ,1000);
        count += 1;
        removeDisabledStyle();
    }
})

function setDisabledStyle() {
    shuffleBtn.setAttribute("disabled", "disabled");
    shuffleBtn.classList.add("disabled");
    shuffleBtn.style.cursor = "auto";
    for(let i = 0; i < itemNodes.length; i++) {
        itemNodes[i].setAttribute("disabled", "disabled");
        itemNodes[i].style.cursor = "auto";
    }
}

function removeDisabledStyle() {
    shuffleBtn.removeAttribute("disabled", "disabled");
    shuffleBtn.classList.remove("disabled");
    shuffleBtn.style.cursor = "pointer";
    for(let i = 0; i < itemNodes.length; i++) {
        itemNodes[i].setAttribute("disabled", "disabled");
        itemNodes[i].style.cursor = "pointer";
    }
}

function moveTile() {
    let song = document.getElementById("song");
    song.volume = 0.1;
    song.play();
}