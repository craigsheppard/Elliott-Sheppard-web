let count = 0;
let value = 1;

document.getElementById('clickButton').addEventListener('click', function() {
  count++;
  value = 2 ** count
  document.getElementById('clickCount').textContent = count;
  document.getElementById('value').textContent = formatNumberWithCommas(value);
});

document.getElementById('resetButton').addEventListener('click', function() {
  count = 0;
  value = 1;
  document.getElementById('clickCount').textContent = count;
  document.getElementById('value').textContent = formatNumberWithCommas(value);
});

function formatNumberWithCommas(number) {
    return number.toLocaleString();
}
