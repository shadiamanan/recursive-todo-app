import {
  Form,
  useActionData
} from "/build/_shared/chunk-QPAGKC33.js";
import {
  createHotContext
} from "/build/_shared/chunk-JBWFVHJT.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:../utils/appwrite.server
var require_appwrite = __commonJS({
  "empty-module:../utils/appwrite.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/signup.tsx
var import_react = __toESM(require_react(), 1);
var import_appwrite = __toESM(require_appwrite(), 1);
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\signup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\signup.tsx"
  );
  import.meta.hot.lastModified = "1756747343429.3113";
}
function Signup() {
  _s();
  const actionData = useActionData();
  const [email, setEmail] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    fontFamily: "Arial, sans-serif"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    width: "350px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333"
    }, children: "Sign Up" }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      color: "red",
      textAlign: "center",
      marginBottom: "15px"
    }, children: actionData.error }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 80,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        marginBottom: "15px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
          display: "block",
          marginBottom: "5px",
          fontWeight: "bold"
        }, children: "Email:" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", value: email, onChange: (e) => setEmail(e.target.value), style: {
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }, required: true }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        marginBottom: "20px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
          display: "block",
          marginBottom: "5px",
          fontWeight: "bold"
        }, children: "Password:" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", value: password, onChange: (e) => setPassword(e.target.value), style: {
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }, required: true }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: {
        width: "100%",
        padding: "12px",
        background: "#4facfe",
        color: "white",
        border: "none",
        borderRadius: "6px",
        fontWeight: "bold",
        cursor: "pointer"
      }, children: "Sign Up" }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(Signup, "CdoIANG2r1f1lhtpfKh4cmrvNpE=", false, function() {
  return [useActionData];
});
_c = Signup;
var _c;
$RefreshReg$(_c, "Signup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Signup as default
};
//# sourceMappingURL=/build/routes/signup-IDGLJ764.js.map
