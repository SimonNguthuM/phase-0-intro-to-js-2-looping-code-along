function writeCards(array, event){
  const messages = [];
  for(let i = 0; i < array.length; i++) {
    const message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
    messages.push(message);
  }
  return messages;
}
function countDown(n){
  let i = n;
  while(i >= 0){
      console.log(i--);
  }
}