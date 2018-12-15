export

function toRna(dna) {
  const dnaArray = dna.split('');
  let rna = [];

  for (let i = 0; i < dnaArray.length; i++) {
    let dnaNucleotide = dnaArray[i];
    if (dnaNucleotide === 'C') {
      let rnaNucleotide = 'G';
      rna.push(rnaNucleotide);
    } else if (dnaNucleotide === 'G') {
      let rnaNucleotide = 'C';
      rna.push(rnaNucleotide);
    } else if (dnaNucleotide === 'A') {
      let rnaNucleotide = 'U';
      rna.push(rnaNucleotide);
    }

  }
  return rna.join('');

  //split dna into array of letters and store it in variable
  //loop over dnaArray and transcript dna into rna
  //
}
