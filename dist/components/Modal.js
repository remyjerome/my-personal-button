"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// component Modal 
const Modal = _ref => {
  let {
    children,
    handleClose,
    isOpen,
    allowEscape
  } = _ref;
  // close on escape key
  _react.default.useEffect(() => {
    if (!allowEscape) return;
    const handleEscape = e => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [handleClose]);
  if (!isOpen) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, children), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleClose
  }, "Close"));
};
var _default = Modal;
exports.default = _default;