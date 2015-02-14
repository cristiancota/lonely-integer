function processData(input) {
	var lines = input.split("\n");
	var N = lines[0];	
	var error = (N%2 == 1);
	error = (N>100);
	error = (N<1);

	if ( !error ) {

		var A = lines[1].split(" "), unico;

		for (var i = 0; i < A.length; i++) {
			unico = true;
			for (var j = 0; j < A.length; j++) {
				if ( (A[i] == A[j]) && (i!=j) ){
					unico = false;
				}
			}
			if (unico) {
				console.log(A[i])
				break;
			}
		}
	}
}
