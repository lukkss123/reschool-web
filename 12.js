const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("wishlist");

function createItem(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "წაშლა";

  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    log(`წაიშალა ნივთი: "${text}"`);
  });

  li.addEventListener("click", () => {
    log(`დააჭირე ნივთს: "${text}"`);
  });

  li.append(span, delBtn);
  return li;
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  list.appendChild(createItem(text));
  log(`დამატდა Wishlist-ში: "${text}"`);
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});

clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
  log("ყველა ნივთი წაიშალა");
});


const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const logBox = document.getElementById("log");
const clearLogBtn = document.getElementById("clearLog");
const stopPropCheck = document.getElementById("stopProp");

function log(msg) {
  const line = document.createElement("div");
  line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
  logBox.prepend(line);
}

clearLogBtn.addEventListener("click", () => (logBox.innerHTML = ""));

outer.addEventListener(
  "click",
  (e) => {
    log("outer — capturing");
    if (stopPropCheck.checked) e.stopPropagation();
  },
  true
);

inner.addEventListener(
  "click",
  (e) => {
    log("inner — capturing");
    if (stopPropCheck.checked) e.stopPropagation();
  },
  true
);


inner.addEventListener("click", (e) => {
  log("inner — bubbling");
  if (stopPropCheck.checked) e.stopPropagation();
});

outer.addEventListener("click", (e) => {
  log("outer — bubbling");
  if (stopPropCheck.checked) e.stopPropagation();
});
