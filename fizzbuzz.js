

const isFuzzBizz = (num) => num % 3 === 0 ? 'Fizz' : num % 5 === 0 ? 'Buzz': num;

for(let i=1; i<=100; i++) {
    console.log(isFuzzBizz(i))
}