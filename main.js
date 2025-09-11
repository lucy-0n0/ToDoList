// 유저가 값을 입력
// + 버튼을 클릭하거나, 엔터를 치면 할일이 추가된다.
// 삭제버튼을 누르면 할일이 삭제된다.
// 체크버튼을 누르면 할일이 끝나면서 밑줄이 간다.
//1.check 버튼을 누르면, isComplete가 true로 바뀐다.
//2. isComplete가 true면 밑줄이 간다.
//3. isComplete가 false면 밑줄이 안간다.
// 전체, 진행중, 끝남 탭을 누르면, 언더바가 이동한다.
// 진행중, 완료 탭을 누르면 언더바가 이동한다.
// 끝남탭은, 끝남아이템만, 진행중탭은 진행중 아이템만 보여준다.
// 전체탭을 누르면 다시 전체 아이템으로 돌아온다.

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList =[]
addButton.addEventListener("click", addTask);

function addTask() {
  let task = {
    id:randomIDGenerrate(),
    taskContent:taskInput.value,
    isComplete: false,
  }
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i=0; i<taskList.length; i++){ 
    if(taskList[i].isComplete == true){
    resultHTML+=`<div class="task">
        <div class="task-done">${taskList[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')">check</button>
        <button onclick="deleteTask('${taskList[i].id}')">delete</button>
      </div>
      </div>`;
  } else {
    resultHTML += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')">check</button>
        <button onclick="deleteTask('${taskList[i].id}')">delete</button>
      </div>
      </div>`;
  }
  }

document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for(let i=0;i,i<taskList.length;i++){
    if(taskList[i].id == id){
      taskList[i].isComplete = !taskList[i].isComplete; // 스위치기능
      break;
    }
}
render();
}

function deleteTask(id) {
  for (let i = 0;i<taskList.length;i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
       break;
    }
  }
  render();
}


function randomIDGenerrate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
