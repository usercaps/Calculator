let display = document.querySelector('.display'),
    num = document.querySelectorAll('.num'),
    clear = document.querySelector('.clear'),
    equal = document.querySelector('.equal'),
    fact = document.querySelector('.factorial'),
    sin = document.querySelector('.sin'),
    cos = document.querySelector('.cos'),
    tan = document.querySelector('.tan'),
    ctang = document.querySelector('.ctg'),
    rad = document.querySelector('.rad'),
    deg = document.querySelector('.deg'),
    modal = document.querySelector('.modal'),
    frame = document.querySelector('.hide'),
    degrice = 0,
    radiance = 0,
    result,
    history = [];

for(let number of num){
  number.addEventListener('click', () => {
    display.value += number.innerHTML;
  });
};

function factorial(x){
  return (x != 1) ? x * factorial(x - 1) : 1;
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};

function ctg(x) { 
  return 1 / Math.tan(x); 
};

function radToDeg(x){
  return x * Math.PI/180;
}

rad.addEventListener('click', () => {
  if(radiance != '0'){
    display.value = radiance;
  } else{
    if(display.value != ''){
      radiance = display.value;
    };
  };
  if(rad.classList.contains('grey')){
    rad.classList.remove('grey');
    deg.classList.add('grey');
  };
});

deg.addEventListener('click', () => {
  if(degrice != '0'){
    display.value = degrice;
  } else{
    if(display.value != ''){
      degrice = display.value;
    };
  };
  if(deg.classList.contains('grey')){
    deg.classList.remove('grey');
    rad.classList.add('grey');
  };
});

sin.addEventListener('click', () => {
  let x = display.value;
  if(degrice != '0'){
    x = radToDeg(degrice);
    display.value = round(Math.sin(x), 7)
  } else if(radiance != '0'){
    display.value = round(Math.sin(x), 7);
  }
});

cos.addEventListener('click', () => {
  let x = display.value;
  if(degrice != '0'){
    x = radToDeg(degrice);
    display.value = round(Math.cos(x), 7)
  } else if(radiance != '0'){
    display.value = round(Math.cos(x), 7);
  }
});

tan.addEventListener('click', () => {
  let x = display.value;
  if(degrice != '0'){
    x = radToDeg(degrice);
    display.value = round(Math.tan(x), 7)
  } else if(radiance != '0'){
    display.value = round(Math.tan(x), 7);
  }
});

ctang.addEventListener('click', () => {
  let x = display.value;
  if(degrice != '0'){
    x = radToDeg(degrice);
    display.value = round(Math.ctg(x), 7)
  } else if(radiance != '0'){
    display.value = round(Math.ctg(x), 7);
  }
});

fact.addEventListener('click', () => {
  let fct = display.value;
  display.value = factorial(fct);
  history.push(fct + '=' + display.value);
});

clear.addEventListener('click', () => {
  display.value = '';
  degrice = 0;
});

equal.addEventListener('click', () => {
  
  result = display.value;
  if(result){
    display.value = round(eval(result), 7);
    history.push(result + '=' + display.value);
  }
  if(display.value == "NaN" || display.value == Infinity){
    display.value = "У нас так не принято";
  }
  if(history.length > 3){
    history.shift();
  }

  frame.innerHTML = '';
  frame.innerHTML = '<p> 1: ' + history[2] + '</p>' +
                    '<p> 2: ' + history[1] + '</p>' +
                    '<p> 3: ' + history[0] + '</p>';
  if (history[2] == null && history[1] != null){
    frame.innerHTML = '<p> 1: ' + history[1] + '</p>' +
                      '<p> 2: ' + history[0] + '</p>';
  }else if (history[1] == null && history[0] != null){
    frame.innerHTML = '<p> 1: ' + history[0] + '</p>';
  }
});

modal.addEventListener('click', () => {
  frame.classList.toggle('show');
});

