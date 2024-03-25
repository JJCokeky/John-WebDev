const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storytext = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Jerry the elf","Alfred", "Austin Moon"];
const insertY = ["My house", "The underworld", "Durham College"];
const insertZ = ["spontaneously combusted", "became the presidet", "their meatball rolled off the table and onto the floor and then their poor meatball rolled out of the door"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storytext;
    
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx',xItem)
    newStory = newStory.replaceAll(':inserty',yItem)
    newStory = newStory.replaceAll(':insertz',zItem)

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob',name)
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)}stone`;
    const temperature =  `${Math.round((94 - 32) * (5/9))} centigrade`;
    newStory = newStory.replaceAll("300 pounds", weight)
    newStory = newStory.replaceAll("94 fahrenheit", temperature)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
