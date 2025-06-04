class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    this.el.style.opacity = '1';
    const baseText = this.el.innerText;
    const length = Math.max(baseText.length, newText.length) + 2;
  
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = baseText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0; //Скидає лічильник кадрів у нуль
  
    return new Promise((resolve) => {
      this.resolve = resolve;
      this.update();
    });
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } 
      else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += char;
      } 
      else {
        output += from;
      }
    }
    this.el.innerText = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
  
const texts = document.querySelectorAll('.text_cirqle .text-change');
const cirqles = document.querySelectorAll('.cirqle');
  
cirqles.forEach((elem, index) => {
  const el = texts[index];
  if (!el) return;
  const originalText = el.innerText;
  const fx = new TextScramble(el);
    
  elem.addEventListener('mouseover', function(event) {
    fx.setText(originalText);
    el.style.transition = 'opacity 40s ease';
  });
  elem.addEventListener('mouseout', function(event) {
    el.style.opacity = '0';
  });
});





//scroll animation
function onEntry(entry) {
  entry.forEach((change, index) => {
    if (change.isIntersecting) {
      change.target.style.transitionDelay = `${index * 0.2}s`; // 0.2 секунды между каждым элементом
      change.target.classList.add('element-show');
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}