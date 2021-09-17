
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBv25C9PcAOD23GxYm7-FllqGQcu7gxLyM",
      authDomain: "kwitter-db78e.firebaseapp.com",
      databaseURL: "https://kwitter-db78e-default-rtdb.firebaseio.com",
      projectId: "kwitter-db78e",
      storageBucket: "kwitter-db78e.appspot.com",
      messagingSenderId: "919847356609",
      appId: "1:919847356609:web:7a5dd820c459f049ae6c40"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


    user_name = localStorage.setItem("user_name")
    document.getElementById(user_name).value = "Welcome"+user_name+"!!!";
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name-" + Room_names);
      row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div></hr>";
      document.getElementById(output).innerHTML = row;
      });});}
getData();
 function redirectToRoomName(name)
 {
       console.log(name)
       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_room.html";
 }
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html"
 }
