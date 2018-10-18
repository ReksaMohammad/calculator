var buttons = document.querySelectorAll('.btn');

// fungsi tambah nilai
function addHasil(nilai) {
  calculator.hasil.value += nilai; 
}

// fungsi hasil
function getHasil() {
  return calculator.hasil.value;
}


// fungsi hapus hasil
function clearHasil() {
  calculator.hasil.value = "";
}

for ( var i = 0; i < buttons.length; i++){
  // hapus hasil
  if ( buttons[i].textContent == "C" ) {
    buttons[i].addEventListener("click", function () {
      clearHasil();
    })

  // hapus nilai di akhir
  } else if ( buttons[i].textContent == "DEL") {
    buttons[i].addEventListener("click", function () {
      nilai = getHasil().slice(0, -1);
      calculator.hasil.value = nilai
    })

  // hasil operasi
  } else if ( buttons[i].textContent == "=") {
    buttons[i].addEventListener("click", function () {
      calculator.hasil.value = eval(getHasil());
    })

  // hasil jumlah
  } else {
    buttons[i].addEventListener("click", function () {
      addHasil(this.textContent);
    })
  }
}