"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IcoInput = exports.IcoFormControl = exports.IcoButton = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./styles.css");
var _md = require("react-icons/md");
var _fa = require("react-icons/fa");
var _io = require("react-icons/io5");
var _fa2 = require("react-icons/fa6");
var _ri = require("react-icons/ri");
var _excluded = ["passAlert", "value", "placeholder", "type", "startIcon"],
  _excluded2 = ["children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var IcoInput = exports.IcoInput = function IcoInput(_ref) {
  var passAlert = _ref.passAlert,
    value = _ref.value,
    placeholder = _ref.placeholder,
    type = _ref.type,
    startIcon = _ref.startIcon,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    alert = _useState4[0],
    setAlert = _useState4[1];
  var icon = null;
  var typeVal = "text";
  var handleTogglePassword = function handleTogglePassword() {
    setShowPassword(!showPassword);
  };
  switch (type) {
    case "name":
      icon = /*#__PURE__*/_react["default"].createElement(_fa.FaUserAlt, {
        className: "icon"
      });
      break;
    case "email":
      icon = /*#__PURE__*/_react["default"].createElement(_md.MdEmail, {
        className: "icon"
      });
      break;
    case "phone":
      icon = /*#__PURE__*/_react["default"].createElement(_fa.FaPhoneAlt, {
        className: "icon"
      });
      typeVal = "phone";
      break;

    // case "phone number":
    //   icon = <FaPhoneAlt className="icon" />;
    //   break;

    case "date":
      icon = /*#__PURE__*/_react["default"].createElement(_io.IoCalendarNumber, {
        className: "icon"
      });
      typeVal = "text";
      break;
    case "url":
      icon = /*#__PURE__*/_react["default"].createElement(_fa.FaLink, {
        className: "icon"
      });
      typeVal = "url";
      break;
    case "linkedin":
      icon = /*#__PURE__*/_react["default"].createElement(_fa2.FaLinkedin, {
        className: "icon"
      });
      typeVal = "url";
      break;
    case "twitter":
      icon = /*#__PURE__*/_react["default"].createElement(_fa.FaTwitter, {
        className: "icon"
      });
      typeVal = "url";
      break;
    case "github":
      icon = /*#__PURE__*/_react["default"].createElement(_fa.FaGithub, {
        className: "icon"
      });
      typeVal = "url";
      break;
    case "medium":
      icon = /*#__PURE__*/_react["default"].createElement(_fa2.FaMedium, {
        className: "icon"
      });
      typeVal = "url";
      break;
    case "instagram":
      icon = /*#__PURE__*/_react["default"].createElement(_fa.FaInstagram, {
        className: "icon"
      });
      typeVal = "url";
      break;
    default:
      icon = null;
      break;
  }

  // console.log(passAlert, value, placeholder, type, startIcon,)

  // useEffect(() => {

  //    if(passAlert!==0){
  //     type === "password" &&  value.length < 6 ? setAlert("Password Length must be more than 6 characters") : setAlert("")

  //     type === "url" && isValidUrl(value) ? setAlert("Entered URL is Invalid") : setAlert("");
  //    }
  // }, [passAlert])

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, type !== "password" ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "ico_inputContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ico_input"
  }, /*#__PURE__*/_react["default"].createElement("div", null, startIcon ? startIcon : icon), /*#__PURE__*/_react["default"].createElement("input", _extends({
    value: value,
    type: typeVal ? typeVal : "text"
  }, otherProps, {
    className: "ico_inputField",
    placeholder: placeholder ? placeholder : typeVal === "url" ? "Enter your ".concat(type, " link") : "Enter your ".concat(type)
  })))) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "ico_inputContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ico_input"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    onClick: handleTogglePassword
  }, showPassword ? /*#__PURE__*/_react["default"].createElement(_fa.FaEye, {
    className: "icon"
  }) : /*#__PURE__*/_react["default"].createElement(_io.IoEyeOffSharp, {
    className: "icon"
  })), /*#__PURE__*/_react["default"].createElement("input", _extends({
    className: "ico_inputField",
    type: showPassword ? "text" : "password",
    placeholder: "".concat(placeholder ? placeholder : "Enter your password")
  }, otherProps)))));
};
var IcoFormControl = exports.IcoFormControl = function IcoFormControl(_ref2) {
  var entries = _ref2.entries,
    formType = _ref2.formType,
    children = _ref2.children;
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    passAlert = _useState6[0],
    setPassAlert = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    alertMessage = _useState8[0],
    setAlertMessage = _useState8[1];
  var _useState9 = (0, _react.useState)({
      name: "",
      email: "",
      password: "",
      url: "",
      dob: "",
      twitter: "",
      linkedin: "",
      github: "",
      medium: "",
      instagram: ""
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    alerts = _useState10[0],
    setAlerts = _useState10[1];
  function isValidName(name) {
    if (name === "") {
      return false;
    } else {
      return true;
    }
  }
  function isValidPassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  function isValidUrl(url) {
    var urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(url)) {
      return false;
    } else {
      return true;
    }
  }
  function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return false;
    } else {
      return true;
    }
  }
  function isValidDOBFormat(dob) {
    // Regular expression for date of birth format dd/mm/yyyy
    var dobPattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dobPattern.test(dob)) {
      return false;
    } else {
      return true;
    }
  }
  var nameAlert = "";
  var emailAlert = "";
  var passwordAlert = "";
  var urlAlert = "";
  var dobAlert = "";
  var twitterAlert = "";
  var linkedinAlert = "";
  var githubAlert = "";
  var mediumAlert = "";
  var instagramAlert = "";
  var dataHandler = function dataHandler() {
    setPassAlert(true);
    if (nameAlert === "" && emailAlert === "" && passwordAlert === "" && urlAlert === "" && dobAlert === "" && twitterAlert === "" && linkedinAlert === "" && githubAlert === "" && mediumAlert === "" && instagramAlert === "") {
      console.log("All inputs are valid!");
    } else {
      console.log("Invalid input. Check once.");
    }
  };
  var mappedData = entries.map(function (val, index) {
    if (val.type === "name" && !isValidName(val.value.data)) {
      nameAlert = "Please enter your name";
    }
    if (val.type === "email" && !isValidEmail(val.value.data)) {
      emailAlert = "Entered email is invalid.";
    }
    if (val.type === "password" && !isValidPassword(val.value.data)) {
      passwordAlert = "Password length must be more than 5 characters";
    }
    if (val.type === "url" && !isValidUrl(val.value.data)) {
      urlAlert = "Entered url is invalid.";
    }
    if (val.type === "date" && !isValidDOBFormat(val.value.data)) {
      dobAlert = "Please enter date in format of dd/mm/yyyy";
    }
    if (val.type === "twitter" && !isValidUrl(val.value.data)) {
      twitterAlert = "Invalid twitter link.";
    }
    if (val.type === "linkedin" && !isValidUrl(val.value.data)) {
      linkedinAlert = "Invalid linkedin link";
    }
    if (val.type === "github" && !isValidUrl(val.value.data)) {
      githubAlert = "Invalid github link";
    }
    if (val.type === "medium" && !isValidUrl(val.value.data)) {
      mediumAlert = "Invalid medium link";
    }
    if (val.type === "instagram" && !isValidUrl(val.value.data)) {
      instagramAlert = "Invalid instagram link";
    }
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(IcoInput, {
      value: val.value.data
      // passAlert={passAlert}
      ,
      onChange: val.onChange,
      type: val.type,
      placeholder: val.placeholder,
      startIcon: val.startIcon
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "ico_wrongAlert"
    }, passAlert && /*#__PURE__*/_react["default"].createElement("div", null, val.type === "name" && !isValidName(val.value.data) ? nameAlert : "", val.type === "email" && !isValidEmail(val.value.data) ? emailAlert : "", val.type === "password" && !isValidPassword(val.value.data) ? passwordAlert : "", val.type === "url" && !isValidUrl(val.value.data) ? urlAlert : "", val.type === "date" && !isValidDOBFormat(val.value.data) ? dobAlert : "", val.type === "twitter" && !isValidUrl(val.value.data) ? twitterAlert : "", val.type === "linkedin" && !isValidUrl(val.value.data) ? linkedinAlert : "", val.type === "github" && !isValidUrl(val.value.data) ? githubAlert : "", val.type === "medium" && !isValidUrl(val.value.data) ? mediumAlert : "", val.type === "instagram" && !isValidUrl(val.value.data) ? instagramAlert : "")));
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, mappedData, /*#__PURE__*/_react["default"].createElement("div", {
    className: "formControl_btn"
  }, /*#__PURE__*/_react["default"].createElement("div", null, children), /*#__PURE__*/_react["default"].createElement("button", {
    className: "ico_button",
    onClick: dataHandler
  }, formType === "login" && "Login", formType === "signup" && "Signup")));
};
var IcoButton = exports.IcoButton = function IcoButton(_ref3) {
  var children = _ref3.children,
    otherProps = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    className: "ico_button"
  }, otherProps), children);
};
