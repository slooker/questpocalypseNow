$(document).ready(() => {
  $('#rps').submit(function (e) {
    e.preventDefault();

    const count = parseInt($('#count').val());
    if (!count || count < 0) {
      $('#error').text('Please make the count a positive number.');
      return;
    }
    if (count > 500) {
      $('#error').text(`... Do you really need ${count} rps throws?`);
      return;

    }

    resetRPS();
    $('#output').append('<tr><th>#</th><th>Status</th><th>You</th><th>Opponent</th></tr>');
    for (let i = 0; i < count; i++) {
      const [status, first, second] = rps();
      //$('#output').append(`${i+1} - ${status}<br />`);
      $('#output').append(`<tr class=${status.toLowerCase()}><td>${i + 1}</td><td>${status}</td><td>${first}</td><td>${second}</td></tr>`);
    }


  });
});

function resetRPS() {
  $('#error').text('');
  $('#output').html('');
}

function rps() {
  const throws = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
  }
  const first = Math.floor(Math.random() * 3);
  const second = Math.floor(Math.random() * 3);
  const output = compare(first, second);
  return [output, throws[first], throws[second]];
}

function compare(first, second) {
  if (first > second) {
    return "Win";
  } else if (first < second) {
    return "Loss";
  }
  return "Tie";
}
