const saveBtn = document.getElementById("js-save");
const paintingMode = document.getElementById("js-mode");
const colorList = document.querySelectorAll(".color");
const rangeElm = document.getElementById("js-range");
const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let paintMode = true;


const stopPainting = function() {
  painting = false;
}

const startPainting = function() {
  painting = true;
}

const onMouseMove = function(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else if (painting && paintMode){
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

const handleCanvasClick = function() {
  if (!paintMode){
    ctx.beginPath();
    ctx.rect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.fill();
  }
}

const handleCM = function(event) {
  event.preventDefault();
}

const canvasFunc = function() {
  if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
  };
}

const handleLineWidth = function() {
  const lineSize = rangeElm.value;
  ctx.lineWidth = lineSize;
}

const rangeChange = function() {
  rangeElm.addEventListener("change", handleLineWidth)
}

const handleColorClick = function(event) {
  const lineColor = event.target.style.backgroundColor;
  ctx.strokeStyle = lineColor;
  ctx.fillStyle = lineColor;
}

const colorChange = function() {
  for (let i=0; i<colorList.length; i++) {
    colorList[i].addEventListener("click", handleColorClick);
  }
}

const handlePaintMode = function() {
  if (!paintMode) {
    paintingMode.innerText = "FILL";
    paintMode = true;
  } else {
    paintingMode.innerText = "PAINT";
    paintMode = false;
  }
}

const modeChange = function() {
  paintingMode.addEventListener("click", handlePaintMode)
}

const handleImgSave = function() {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[result]";
  link.click();
}

const imageSave = function() {
  saveBtn.addEventListener("click", handleImgSave)
}

function init() {
  canvasFunc();
  rangeChange();
  colorChange();
  modeChange();
  imageSave();
}

init();
