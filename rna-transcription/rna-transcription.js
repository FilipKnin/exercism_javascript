export

function toRna(dna) {
  const dnaArray = dna.split('');
  let rna = [];

  dnaArray.map((dnaNucleotide) => {
    if (dnaNucleotide === 'C') {
        rna.push('G');
      } else if (dnaNucleotide === 'G') {
        rna.push('C');
      } else if (dnaNucleotide === 'A') {
        rna.push('U');
      } else if (dnaNucleotide === 'T') {
        let rnaNucleotide = 'A';
        rna.push('A');
      } else {
        throw 'Invalid input DNA.';
      }
  })
  return rna.join('');
}





  // for (let i = 0; i < dnaArray.length; i++) {
  //   let dnaNucleotide = dnaArray[i];
  //   if (dnaNucleotide === 'C') {
  //     let rnaNucleotide = 'G';
  //     rna.push(rnaNucleotide);
  //   } else if (dnaNucleotide === 'G') {
  //     let rnaNucleotide = 'C';
  //     rna.push(rnaNucleotide);
  //   } else if (dnaNucleotide === 'A') {
  //     let rnaNucleotide = 'U';
  //     rna.push(rnaNucleotide);
  //   } else if (dnaNucleotide === 'T') {
  //     let rnaNucleotide = 'A';
  //     rna.push(rnaNucleotide);
  //   } else {
  //     throw 'Invalid input DNA.';
  //   }
  //
  // }
  //   return rna.join('');
