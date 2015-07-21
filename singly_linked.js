/* 
var node1 = {
	data: null,
	next: null
};

node1.data = "data1";

var node2 = {
	data: null,
	next: null
};

node2.data = "data2";
node1.next = node2;
*/

function List() {
	this.start = null;
	this.end = null;

	this.add = function (data) {
		if (this.start === null) {
			this.start = List.makeNode();
			this.end = this.start;
		}
		else {
			this.end.next = List.makeNode();
			this.end = this.end.next;
		};
		this.end.data = data;
	};
};

List.makeNode = function () {
	return { data: null, next: null };
};