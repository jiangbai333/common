onmessage = function(e) {

	var wr = e.data[0] - ( -e.data[1] );

	postMessage(wr);
}