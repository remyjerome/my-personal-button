"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = _ref => {
  let {
    kind,
    id,
    type,
    name,
    value,
    disabled,
    handleClick,
    label
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn--".concat(kind, " CTA"),
    "data-id": id,
    type: type,
    name: name,
    value: value,
    disabled: disabled,
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement("h4", null, label));
};
var _default = Button;
exports.default = _default;