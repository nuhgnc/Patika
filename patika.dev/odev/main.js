function clickedBtn (){
  let input = document.getElementById("input")
  let userInfo = document.getElementById("userInfo")
  let date = document.getElementById("date")
  
  let userName = input.value
  userInfo.innerHTML = userName
  
  let d = new Date()
  let dateoptions = { day:'2-digit',month:'2-digit',year:'numeric', weekday:'long', hour:'numeric',minute:'numeric'}
  
   date.innerHTML = d.toLocaleDateString("tr-TR",dateoptions)
  
}
