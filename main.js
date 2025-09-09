// 유저가 값을 입력
// + 버튼을 클릭하거나, 엔터를 치면 할일이 추가된다.
// 삭제버튼을 누르면 할일이 삭제된다.
// 체크버튼을 누르면 할일이 끝나면서 밑줄이 간다.
// 진행중, 완료 탭을 누르면 언더바가 이동한다.
// 끝남탭은, 끝남아이템만, 진행중탭은 진행중 아이템만 보여준다.
// 전체탭을 누르면 다시 전체 아이템으로 돌아온다.

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList =[]
addButton.addEventListener("click", addTask);

function addTask() {
  let taskContent = taskInput.value;
  taskList.push(taskContent);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i=0; i<taskList.length; i++){ 
    resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
        <div>
          <button>첵</button>
        <button>지우기</button>
      </div>
      </div>`;
  }

document.getElementById("task-board").innerHTML = resultHTML;
}