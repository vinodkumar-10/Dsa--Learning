// Find the highest score in a game.

let scores = [45,87,89,32,99,100,64,82];

let max = scores[0];
for(let i = 0; i < scores.length; i++){
    if (scores[i] > max )
{
    max = scores[i];
    }
}
console.log("highest score is", max);

