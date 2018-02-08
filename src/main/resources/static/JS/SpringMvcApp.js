function openPopUp(){   
	window.open("/popUp",'window','width=200,height=300');
}
function printMousePos(event) {
	alert("clientX: " + event.clientX +
			" - clientY: " + event.clientY);
}
var idleInterval ='';
var idleTime=0;
$( window ).on( "load", function() {
	console.log( "window loaded" );
	connect();
	 idleInterval = setInterval(timerIncrement, 60000); // 1 minute

	//Zero the idle timer on mouse movement.
	$(this).mousemove(function (e) {
		idleTime = 0;
	});
	$(this).keypress(function (e) {
		idleTime = 0;
	});

});
function timerIncrement() {
	idleTime = idleTime + 1;
	if (idleTime > 5) { // 20 minutes
		alert('will timeout in sometime..')
	}
}          
function saveProduct(){
	$.post('/saveproducts', $('#editProduct').serialize(), function(data, status){
		alert("Data: " + data + "\nStatus: " + status);
		if(data=="success"){
			sendMessage();	
		}
	});

}
function connect() {
	var socket = new SockJS('/product-messaging');
	stompClient = Stomp.over(socket);
	stompClient.connect({}, function(frame) {
		console.log("connected: " + frame);
		stompClient.subscribe('/products/messages', function(response) {
			//alert(response)
			var data = JSON.parse(response.body);
			//alert(data.message);
			$("#prodList").html($("#prodList").text() + "<span style='color:red'>New</span>");
		});
	});
}

function disconnect(){
	stompClient.disconnect();
}
function sendMessage(){
	stompClient.send("/app/message", {}, JSON.stringify({'message': 'New Product'}));

}

