export

function compute(dna1, dna2) {
  const dna1Array = dna1.split('');
  const dna2Array = dna2.split('');
  let hammingDistance = 0;

  for (let i = 0; i < dna1Array.length; i++) {
    let nucleotideDna1 = dna1Array[i];

      for (let j = 0; j < dna2Array.length; j++) {
          let nucleotideDna2 = dna2Array[j];
          if (nucleotideDna1 === nucleotideDna2) {
            hammingDistance += 1;
          }
      }
  }

  return hammingDistance;
}
