module.exports = function(func, num) {
    var i;
    for(i = 0; i < num; i++){
	if(typeof func === 'function'){
	    func.call();
	}
    }
};
