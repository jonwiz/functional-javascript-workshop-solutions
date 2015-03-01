/*jslint unparam:true*/
module.exports = function countFruit(list) {
	return list.reduce(function(counts, cur) {
		counts[cur] = ++counts[cur] || 1;
		return counts;
	}, {});
};
