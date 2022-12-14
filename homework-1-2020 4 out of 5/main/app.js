const distance = (a, b) => {
	const result = Array(b.length + 1).fill(null).map(() =>
	Array(a.length + 1).fill(null));

	for (let i = 0; i <= a.length; i += 1) {
	  result[0][i] = i;
    }
    for (let j = 0; j <= b.length; j += 1) {
      result[j][0] = j;
    }

    for (let j = 1; j <= b.length; j += 1) {
       for (let i = 1; i <= a.length; i += 1) {
          const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
          result[j][i] = Math.min(
             result[j][i - 1] + 1,
             result[j - 1][i] + 1,
             result[j - 1][i - 1] + indicator,);
        }
    }
	
	return result[b.length][a.length];
}


module.exports.distance = distance