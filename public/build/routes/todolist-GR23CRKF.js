import {
  createHotContext
} from "/build/_shared/chunk-JBWFVHJT.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/TodoList.tsx
var import_react = __toESM(require_react(), 1);

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = { randomUUID };

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    if (offset < 0 || offset + 16 > buf.length) {
      throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
    }
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// app/components/TodoList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TodoList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TodoList.tsx"
  );
  import.meta.hot.lastModified = "1756729592930.6409";
}
function TodoList() {
  _s();
  const [todos, setTodos] = (0, import_react.useState)([]);
  const [newTask, setNewTask] = (0, import_react.useState)("");
  const addTask = () => {
    if (!newTask.trim())
      return;
    setTodos([...todos, {
      id: v4_default(),
      text: newTask,
      completed: false,
      subTasks: []
    }]);
    setNewTask("");
  };
  const toggleComplete = (id, items = todos) => {
    const updated = items.map((t) => t.id === id ? {
      ...t,
      completed: !t.completed
    } : {
      ...t,
      subTasks: toggleComplete(id, t.subTasks)
    });
    setTodos(updated);
    return updated;
  };
  const deleteTask = (id, items = todos) => {
    const updated = items.filter((t) => t.id !== id).map((t) => ({
      ...t,
      subTasks: deleteTask(id, t.subTasks)
    }));
    setTodos(updated);
    return updated;
  };
  const addSubTask = (parentId, text, items = todos) => {
    const updated = items.map((t) => t.id === parentId ? {
      ...t,
      subTasks: [...t.subTasks, {
        id: v4_default(),
        text,
        completed: false,
        subTasks: []
      }]
    } : {
      ...t,
      subTasks: addSubTask(parentId, text, t.subTasks)
    });
    setTodos(updated);
    return updated;
  };
  const renderTasks = (items) => items.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", checked: task.completed, onChange: () => toggleComplete(task.id) }, void 0, false, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    task.text,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => deleteTask(task.id), children: "Delete" }, void 0, false, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddSubTaskForm, { parentId: task.id, onAdd: addSubTask }, void 0, false, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this),
    task.subTasks.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: renderTasks(task.subTasks) }, void 0, false, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 90,
      columnNumber: 38
    }, this)
  ] }, task.id, true, {
    fileName: "app/components/TodoList.tsx",
    lineNumber: 85,
    columnNumber: 50
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    padding: "20px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Recursive To-Do List" }, void 0, false, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { value: newTask, onChange: (e) => setNewTask(e.target.value), placeholder: "New task..." }, void 0, false, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: addTask, children: "Add Task" }, void 0, false, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: renderTasks(todos) }, void 0, false, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/TodoList.tsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
}
_s(TodoList, "i792uQBr+bCV/4XL2jyhxQ/OcXw=");
_c = TodoList;
function AddSubTaskForm({
  parentId,
  onAdd
}) {
  _s2();
  const [text, setText] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    marginLeft: "20px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { value: text, onChange: (e) => setText(e.target.value), placeholder: "Sub-task..." }, void 0, false, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
      if (!text.trim())
        return;
      onAdd(parentId, text);
      setText("");
    }, children: "Add" }, void 0, false, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/TodoList.tsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
}
_s2(AddSubTaskForm, "3t0DFnMi16eB/7p7iIKtjG5r68g=");
_c2 = AddSubTaskForm;
var _c;
var _c2;
$RefreshReg$(_c, "TodoList");
$RefreshReg$(_c2, "AddSubTaskForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/todolist.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\todolist.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\todolist.tsx"
  );
  import.meta.hot.lastModified = "1756747467570.5918";
}
function TodoListPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(to right, #43e97b, #38f9d7)",
    // colorful gradient
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
    width: "600px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { style: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333"
    }, children: "Your Todo List" }, void 0, false, {
      fileName: "app/routes/todolist.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TodoList, {}, void 0, false, {
      fileName: "app/routes/todolist.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/todolist.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/todolist.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c3 = TodoListPage;
var _c3;
$RefreshReg$(_c3, "TodoListPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TodoListPage as default
};
//# sourceMappingURL=/build/routes/todolist-GR23CRKF.js.map
