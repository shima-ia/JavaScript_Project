let num = prompt("จำนวนคน") //รับค่าจำนวนคน
for(var i = 1; i <= num; i++){
    let Name = prompt("กรอกชื่อ") //ลูปรายชื่อตามจำนวนคนที่รับมา
    let score = prompt("กรอกคะแนน") //กรอกคะแนนของแต่คนตามรายชื่อ
    let result = tograde(score) //เพิ่มตัวเเปรเพื่อรับค่า score
    document.getElementById("result").innerHTML += "<br>ชื่อ:" + Name + " คะแนน:" + score + " เกรด: " + result //แสดงผล
}
function tograde(score){ //ฟังก์ชั่นเช็คเกรด
    let grade = " " 
    if(score >= 80){
        grade = "A"
    }else if(score >= 75 && score <= 79){
        grade = "B+"
    }else if(score >= 70 && score <= 74){
        grade = "B"
    }else if(score >= 65 && score <= 69){
        grade = "C+"
    }else if(score >= 60 && score <= 64){
        grade = "C"
    }else if(score >= 55 && score <= 59){
        grade = "D+"
    }else if(score >= 50 && score <= 54){
        grade = "D"
    }else grade = "F"
    return grade
}