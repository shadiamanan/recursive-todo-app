var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => Root
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Root() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("title", { children: "Recursive To-Do App" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/todolist.tsx
var todolist_exports = {};
__export(todolist_exports, {
  default: () => TodoListPage
});

// app/components/TodoList.tsx
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function TodoList() {
  let [todos, setTodos] = useState([]), [newTask, setNewTask] = useState(""), addTask = () => {
    newTask.trim() && (setTodos([
      ...todos,
      { id: uuidv4(), text: newTask, completed: !1, subTasks: [] }
    ]), setNewTask(""));
  }, toggleComplete = (id, items = todos) => {
    let updated = items.map(
      (t) => t.id === id ? { ...t, completed: !t.completed } : { ...t, subTasks: toggleComplete(id, t.subTasks) }
    );
    return setTodos(updated), updated;
  }, deleteTask = (id, items = todos) => {
    let updated = items.filter((t) => t.id !== id).map((t) => ({
      ...t,
      subTasks: deleteTask(id, t.subTasks)
    }));
    return setTodos(updated), updated;
  }, addSubTask = (parentId, text, items = todos) => {
    let updated = items.map(
      (t) => t.id === parentId ? {
        ...t,
        subTasks: [...t.subTasks, { id: uuidv4(), text, completed: !1, subTasks: [] }]
      } : { ...t, subTasks: addSubTask(parentId, text, t.subTasks) }
    );
    return setTodos(updated), updated;
  }, renderTasks = (items) => items.map((task) => /* @__PURE__ */ jsxDEV3("li", { children: [
    /* @__PURE__ */ jsxDEV3(
      "input",
      {
        type: "checkbox",
        checked: task.completed,
        onChange: () => toggleComplete(task.id)
      },
      void 0,
      !1,
      {
        fileName: "app/components/TodoList.tsx",
        lineNumber: 64,
        columnNumber: 9
      },
      this
    ),
    task.text,
    /* @__PURE__ */ jsxDEV3("button", { onClick: () => deleteTask(task.id), children: "Delete" }, void 0, !1, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(AddSubTaskForm, { parentId: task.id, onAdd: addSubTask }, void 0, !1, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    task.subTasks.length > 0 && /* @__PURE__ */ jsxDEV3("ul", { children: renderTasks(task.subTasks) }, void 0, !1, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 72,
      columnNumber: 38
    }, this)
  ] }, task.id, !0, {
    fileName: "app/components/TodoList.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ jsxDEV3("div", { style: { padding: "20px" }, children: [
    /* @__PURE__ */ jsxDEV3("h2", { children: "Recursive To-Do List" }, void 0, !1, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(
      "input",
      {
        value: newTask,
        onChange: (e) => setNewTask(e.target.value),
        placeholder: "New task..."
      },
      void 0,
      !1,
      {
        fileName: "app/components/TodoList.tsx",
        lineNumber: 79,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV3("button", { onClick: addTask, children: "Add Task" }, void 0, !1, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("ul", { children: renderTasks(todos) }, void 0, !1, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/TodoList.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
function AddSubTaskForm({
  parentId,
  onAdd
}) {
  let [text, setText] = useState("");
  return /* @__PURE__ */ jsxDEV3("div", { style: { marginLeft: "20px" }, children: [
    /* @__PURE__ */ jsxDEV3(
      "input",
      {
        value: text,
        onChange: (e) => setText(e.target.value),
        placeholder: "Sub-task..."
      },
      void 0,
      !1,
      {
        fileName: "app/components/TodoList.tsx",
        lineNumber: 101,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV3(
      "button",
      {
        onClick: () => {
          text.trim() && (onAdd(parentId, text), setText(""));
        },
        children: "Add"
      },
      void 0,
      !1,
      {
        fileName: "app/components/TodoList.tsx",
        lineNumber: 106,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/TodoList.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// app/routes/todolist.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function TodoListPage() {
  return /* @__PURE__ */ jsxDEV4(
    "div",
    {
      style: {
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #43e97b, #38f9d7)",
        // colorful gradient
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: /* @__PURE__ */ jsxDEV4(
        "div",
        {
          style: {
            width: "600px",
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxDEV4("h2", { style: { textAlign: "center", marginBottom: "20px", color: "#333" }, children: "Your Todo List" }, void 0, !1, {
              fileName: "app/routes/todolist.tsx",
              lineNumber: 25,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV4(TodoList, {}, void 0, !1, {
              fileName: "app/routes/todolist.tsx",
              lineNumber: 28,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/todolist.tsx",
          lineNumber: 16,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/todolist.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action,
  default: () => Signup
});
import { useState as useState2 } from "react";
import { Form, useActionData } from "@remix-run/react";

// app/utils/appwrite.server.ts
import { Client, Account } from "appwrite";
var client = new Client();
client.setEndpoint(process.env.APPWRITE_ENDPOINT).setProject(process.env.APPWRITE_PROJECT_ID);
var account = new Account(client);

// app/routes/signup.tsx
import { json, redirect } from "@remix-run/node";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
async function action({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  try {
    return await account.create("unique()", email, password), redirect("/todolist");
  } catch (err) {
    let message = "Signup failed", parsed = null;
    try {
      parsed = JSON.parse(err.response), parsed.message && (message = parsed.message);
    } catch {
    }
    return (err.code === 409 || parsed && parsed.message.includes("already exists")) && (message = "User with this email already exists."), json({ error: message }, { status: 400 });
  }
}
function Signup() {
  let actionData = useActionData(), [email, setEmail] = useState2(""), [password, setPassword] = useState2("");
  return /* @__PURE__ */ jsxDEV5(
    "div",
    {
      style: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        fontFamily: "Arial, sans-serif"
      },
      children: /* @__PURE__ */ jsxDEV5(
        "div",
        {
          style: {
            background: "white",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            width: "350px"
          },
          children: [
            /* @__PURE__ */ jsxDEV5("h2", { style: { textAlign: "center", marginBottom: "20px", color: "#333" }, children: "Sign Up" }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 57,
              columnNumber: 9
            }, this),
            actionData?.error && /* @__PURE__ */ jsxDEV5("p", { style: { color: "red", textAlign: "center", marginBottom: "15px" }, children: actionData.error }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV5(Form, { method: "post", children: [
              /* @__PURE__ */ jsxDEV5("div", { style: { marginBottom: "15px" }, children: [
                /* @__PURE__ */ jsxDEV5("label", { style: { display: "block", marginBottom: "5px", fontWeight: "bold" }, children: "Email:" }, void 0, !1, {
                  fileName: "app/routes/signup.tsx",
                  lineNumber: 67,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV5(
                  "input",
                  {
                    type: "email",
                    name: "email",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    style: {
                      width: "100%",
                      padding: "10px",
                      borderRadius: "6px",
                      border: "1px solid #ccc"
                    },
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/signup.tsx",
                    lineNumber: 70,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/signup.tsx",
                lineNumber: 66,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { style: { marginBottom: "20px" }, children: [
                /* @__PURE__ */ jsxDEV5("label", { style: { display: "block", marginBottom: "5px", fontWeight: "bold" }, children: "Password:" }, void 0, !1, {
                  fileName: "app/routes/signup.tsx",
                  lineNumber: 86,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV5(
                  "input",
                  {
                    type: "password",
                    name: "password",
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    style: {
                      width: "100%",
                      padding: "10px",
                      borderRadius: "6px",
                      border: "1px solid #ccc"
                    },
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/signup.tsx",
                    lineNumber: 89,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/signup.tsx",
                lineNumber: 85,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV5(
                "button",
                {
                  type: "submit",
                  style: {
                    width: "100%",
                    padding: "12px",
                    background: "#4facfe",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  },
                  children: "Sign Up"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/signup.tsx",
                  lineNumber: 104,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 65,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/signup.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV6(
    "div",
    {
      style: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #ff6a00, #ee0979)",
        // colorful gradient
        fontFamily: "Arial, sans-serif"
      },
      children: /* @__PURE__ */ jsxDEV6(
        "div",
        {
          style: {
            background: "white",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            textAlign: "center",
            width: "350px"
          },
          children: [
            /* @__PURE__ */ jsxDEV6("h2", { style: { marginBottom: "20px", color: "#333" }, children: "Recursive Todo App" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 25,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { style: { fontSize: "16px", color: "#555" }, children: [
              "Welcome! Please",
              " ",
              /* @__PURE__ */ jsxDEV6(
                Link,
                {
                  to: "/signup",
                  style: {
                    color: "#ff6a00",
                    fontWeight: "bold",
                    textDecoration: "none"
                  },
                  children: "Sign Up"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 28,
                  columnNumber: 11
                },
                this
              ),
              " ",
              "first."
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 26,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 15,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OAGZXGWE.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-QPAGKC33.js", "/build/_shared/chunk-JBWFVHJT.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-W6QY2IS2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-JAWK5BWY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-IDGLJ764.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/todolist": { id: "routes/todolist", parentId: "root", path: "todolist", index: void 0, caseSensitive: void 0, module: "/build/routes/todolist-GR23CRKF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "04bcb737", hmr: { runtime: "/build/_shared\\chunk-JBWFVHJT.js", timestamp: 1756754237119 }, url: "/build/manifest-04BCB737.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/todolist": {
    id: "routes/todolist",
    parentId: "root",
    path: "todolist",
    index: void 0,
    caseSensitive: void 0,
    module: todolist_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
