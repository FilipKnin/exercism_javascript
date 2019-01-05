

function translate(rna) {
  if (rna === undefined) {
    return [];
  } else {

    const codons = rna.match(/.{1,3}/g)
    const proteins = [];

    for (let i = 0; i < codons.length; i++) {
      let singleCodon = codons[i];
       if (singleCodon === 'AUG') {
         proteins.push('Methionine')
       } else if (singleCodon === 'UUU' || singleCodon === 'UUC') {
         proteins.push('Phenylalanine')
       } else if (singleCodon === 'UUA' || singleCodon === 'UUG') {
         proteins.push('Leucine')
       }
    }

    return proteins;
  }




}

module.exports = translate;
