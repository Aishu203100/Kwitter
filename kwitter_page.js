//YOUR FIREBASE LINKS
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

function send(){
msg = document.getElementById("msg").value = "";
firebase.databse().ref("room_name").push({
      name:user_name,
      message:msg,
      like:0
});

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name:message_data['name']
message:message_data['message']
like:messsage_data['like']
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
like_button = "<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)' "
span_with_tag = "<spann class=' glyphicon glyphicon-thumbs-up'>Like(s)="+ like+"</span></button><hr>"

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("Clicked on like button-" +  message_id);
      button_id = message_id;
      likes= document.getElementById("button_id").value;
      update_likes = Number(likes) + 1;
      console.log(updated_likes);  

      firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
      });
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}



