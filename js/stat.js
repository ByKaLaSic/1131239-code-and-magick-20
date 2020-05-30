'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TIME_GAP = 65;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var COLUMT_GAP = 50;
var winningPhrase = ['Ура вы победили!', 'Список результатов:'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var winningText = function (ctx, text) {
  ctx.font = '16px PT Mono';
  var lineCounter = 1.5;

  for (var j = 0; j < text.length; j++) {
    ctx.fillText(text[j], CLOUD_X + GAP * 2, FONT_GAP + CLOUD_Y + GAP * lineCounter);
    lineCounter += 2;
  }

  lineCounter = lineCounter;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  winningText(ctx, winningPhrase);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var timeLeft = BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime;
    var leftColumnGap = CLOUD_X + BAR_WIDTH + (BAR_WIDTH + COLUMT_GAP) * i;

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 100%, 30%)';
    }

    ctx.fillRect(leftColumnGap, CLOUD_Y + TIME_GAP + timeLeft + FONT_GAP + GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000';

    ctx.fillText(players[i], leftColumnGap, CLOUD_Y + FONT_GAP * 2 + GAP + TIME_GAP + BAR_HEIGHT);
    ctx.fillText(Math.round(times[i]), leftColumnGap, CLOUD_Y + timeLeft + FONT_GAP + TIME_GAP);
  }
};

