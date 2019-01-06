export

function toRna(dna) {
  const dnaToRna = dna.split('');
  // let rna = [];

  let rna = dnaToRna.map((dnaNucleotide) => {
    if (dnaNucleotide === 'C') {
        dnaNucleotide = 'G';
      } else if (dnaNucleotide === 'G') {
        dnaNucleotide = 'C';
      } else if (dnaNucleotide === 'A') {
        dnaNucleotide = 'U';
      } else if (dnaNucleotide === 'T') {
        dnaNucleotide = 'A';
      } else {
        throw 'Invalid input DNA.';
      }
      return dnaNucleotide;
  })
  return rna.join('');
}
