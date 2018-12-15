export

function compute(dna1, dna2) {
  const dna1Array = dna1.split('');
  const dna2Array = dna2.split('');
  let hammingDistance = 0;

  if (dna1Array.length === dna2Array.length) {
    for (let i = 0; i < dna1Array.length; i++) {
      let nucleotideDna1 = dna1Array[i];
      if (nucleotideDna1 !== dna2Array[i]) {
        hammingDistance += 1;
      }
    }
  } else {
      throw('left and right strands must be of equal length')
  }



  return hammingDistance;
}
