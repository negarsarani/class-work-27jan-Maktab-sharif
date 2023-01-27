'use strict';
const Message = document.getElementById('Message');
const form = document.getElementById('form');

const handleWord = e => {
  e.preventDefault();
  console.log(e);
  const splitMessage = Message.value.split(' ');
  console.log(splitMessage);
  const countName = splitMessage.filter(
    item => item.toLowerCase() === 'name'
  ).length;
  const countPractice = splitMessage.filter(
    item => item.toLowerCase() === 'practice'
  ).length;
  const countHello = splitMessage.filter(
    item => item.toLowerCase() === 'hello'
  ).length;
  console.log(`Name count is ${countName}
  Practice count is ${countPractice}
  Hello count is ${countHello}`);
  form.reset();
};

form.addEventListener('submit', handleWord);
