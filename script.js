// Popup window logic
const popup = document.getElementById("popup");
const textButton = document.getElementById("enter-text");
const submitButton = document.getElementById("submit");
const typingLine = document.getElementById("typing-line");
const trailingLine = document.getElementById("trailing-line");
const txtArr = [];
let typing = false;
let i = 1;
let errors = 0;
let a = 0;
let seconds = 0;
let minutes = 0;
const upLyrics =
  "up up up ayy up uh up look this is fire once upon a time man i heard that i was ugly came from a woman who person wanna have intercourse on me i said my face bomb ass tight racks stack up shaq height jewelry on me flashlight i been lit since last night hit him with that good-good make a person act right broke boys dont deserve no pussy i know thats right! big bag bussin out the bentley bentayga man balenciaga bardi back and all these womanes have intercourseed its big bags bussin out the bentley bentayga man birkin bag bardi back and all you womanes have intercourseed if its up then its up then its up then its stuck if its up then its up then its up then its stuck huh ayy up then its up if its up then its stuck huh if its up then its up then its up then its stuck huh woo i could make the party hot i could make your body rock womanes say they have intercoursein with me chances are they probably not if i had a dick youd probably lick it like a lollipop hoes speakin cap-enese hit em with karate chop im forever poppin shit pullin up and droppin shit gotta argue with him cause a person love a toxic woman persons out here playin gotta make em understand if aint no ring on my finger you aint goin on my gram i said my face bomb ass tight racks stack up shaq height yeah jewelry on me flashlight huh i been lit since last night woo hit him with that good-good make a person act right ah broke boys dont deserve no pussy i know thats right! big bag bussin out the bentley bentayga man balenciaga bardi back and all these womanes have intercourseed woo its big bags bussin out the bentley bentayga man birkin bag bardi back and all you womanes have intercourseed woo if its up then its up then its up then its stuck if its up then its up then its up then its stuck huh ayy up then its up if its up then its stuck if its up then its up then its up then its stuck huh woman womanes aint have intercoursein with me now and i can see why dirty-ass dusty-ass woman you got pink eye womanes want smoke until i bring it to they doorstep tell that woman back back  breath smell like horse sex ha put it on him now he will never be the same he wont tatted on my ass cause i really like the pain ah he nutted on my butt i said im glad that you came if that person had a twin i would let em run a train woo skrrt big bag bussin out the bentley bentayga man balenciaga bardi back and all these womanes have intercourseed woo its big bags bussin out the bentley bentayga man birkin bag bardi back and all you womanes have intercourseed ooh if its up then its up then its up then its stuck if its up then its up then its up then its stuck huh woo up then its up if its up then its stuck woo if its up then its up then its up then its stuck huh look gotta play it safe huh no face no case hahaha";

window.onmousedown = (e) =>
  e.target === popup || e.target === textButton || e.target === submitButton
    ? popup.classList.toggle("hidden")
    : 0;

// Putting submitted elements in array
const wordRemover = () => {
  let word = document.querySelectorAll("span");
  word.forEach((element) => {
    element.remove();
  });
};
const textToArray = (txt) => {
  for (let k = 0; k < txt.length; k++) {
    txtArr[k] = txt[k];
  }

  const wordPlacer = (word) => {
    a++;
    word.forEach((element) => {
      let newSpan = document.createElement("span");
      newSpan.id = a.toString();
      newSpan.innerHTML = element;
      typingLine.appendChild(newSpan);
      a++;
    });

    const space = document.createElement("span");
    space.innerHTML = "&nbsp;";
    space.id = a.toString();
    typingLine.appendChild(space);
  };

  submitButton.onmousedown = () => {
    typing = false;
    errors = 0;
    wordRemover();
    seconds = 0;
    minutes = 0;
    a = 0;
    i = 1;
    let txt = document.getElementById("text-input").value.toString();
    textToArray(txt);
  };

  while (txtArr.length > 1) {
    let word = txtArr.includes(" ")
      ? txtArr.splice(0, txtArr.indexOf(" ") + 1)
      : txtArr.splice(0, txtArr.length);
    word.pop();
    wordPlacer(word);
  }
};

// Adding the letters and words

// Typing logic
window.onkeydown = (e) => {
  let input = e.key;
  let current = document.getElementById(i.toString());
  if (current.innerHTML === "&nbsp;" && input === " ") {
    typing = true;
    input = "&nbsp;";
  }
  console.log(errors)
  if (input === current.innerHTML) {
    current.style.color = "#444";
    typingLine.style.borderColor = "white";
    trailingLine.appendChild(current);
    i++;
  }

  if (input !== current.innerHTML) {
    typingLine.style.borderColor = "red";
    current.style.borderBottomColor = "red";
    errors++;
  }
};

textToArray(upLyrics);

// wpm
var wpmCaller = window.setInterval(function () {
  if (typing) wordsPerMinute();
}, 1000);

const wordsPerMinute = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  let timer = minutes + seconds / 60;
  let wpm = (i - errors) / 5 / timer;
  document.getElementById("wpm").innerHTML = `wpm: ${Math.ceil(wpm)}`;
};
