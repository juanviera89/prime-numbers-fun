import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const isPrime = (n, prevPrimes = [2]) => {
  // find a way to reduce loops needed on calculation
  if (n >= 100000)
    throw new Error("Potentially excesive resources consumption");
  //console.log("---", n, prevPrimes);
  prevPrimes = [2, ...prevPrimes];
  let d = 2,
    m = n / d,
    r = 1;
  if (n <= 2) return false;
  if (prevPrimes.length > 0) {
    let i = 0;
    do {
      //console.log(r, d, m);
      d = prevPrimes[i];
      r = n % d;
      i++;
      m = n / d + 1;
      //console.log(r, d, m);
    } while (r !== 0 && i < prevPrimes.length);
    if (r === 0) return false;

    d++;
    if (d > m) return true;
  }
  //console.log(d);
  do {
    //console.log(r, d, m);
    r = n % d;
    d++;
    m = n / d;
    //console.log(r, d, m);
  } while (r !== 0 && d <= m);
  return r !== 0;
};

const getPrimes = options => {
  const { min = 0, max = 0 } = options;
  const primes = [];
  for (let n = min; n <= max; n++) {
    if (isPrime(n, primes.length > 0 ? primes : undefined)) primes.push(n);
  }
  return primes;
};
let i = Date.now();
console.log(getPrimes({ max: 99999 }));
//console.log(isPrime(10000007))
console.log(`${Date.now() - i} ms`);
