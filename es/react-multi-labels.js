import PropTypes from 'prop-types';
import React from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  _setPrototypeOf(subClass.prototype, superClass && superClass.prototype);

  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) {
    return o.__proto__;
  };

  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var _React$createContext = React.createContext(),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var LabelsProvider =
/*#__PURE__*/
function (_React$Component) {
  function LabelsProvider(props) {
    var _this;

    _classCallCheck(this, LabelsProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LabelsProvider).call(this, props));
    var language = props.language,
        labels = props.labels;
    _this.changeLanguage = _this.changeLanguage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeLabels = _this.changeLabels.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      language: language,
      labels: labels,
      changeLanguage: _this.changeLanguage,
      changeLabels: _this.changeLabels
    };

    {
      if (!labels[language]) {
        console.warn('Careful! There is no object for the language that you just set!');
      }
    }

    return _this;
  }

  _createClass(LabelsProvider, [{
    key: "changeLanguage",
    value: function changeLanguage(language) {
      this.setState({
        language: language
      });
    }
  }, {
    key: "changeLabels",
    value: function changeLabels(labels) {
      this.setState({
        labels: labels
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  _inherits(LabelsProvider, _React$Component);

  return LabelsProvider;
}(React.Component);
LabelsProvider.propTypes = {
  labels: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  children: PropTypes.object
};
var Label = function Label(_ref) {
  var text = _ref.text;
  return React.createElement(Consumer, null, function (_ref2) {
    var language = _ref2.language,
        labels = _ref2.labels;
    return labels[language][text];
  });
};
Label.propTypes = {
  text: PropTypes.string.isRequired
};
var GetLabel = function GetLabel(_ref3) {
  var text = _ref3.text,
      children = _ref3.children;
  return React.createElement(Consumer, null, function (_ref4) {
    var language = _ref4.language,
        labels = _ref4.labels;
    return children(labels[language][text]);
  });
};
GetLabel.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.func
};
var GetLabels = function GetLabels(_ref5) {
  var list = _ref5.list,
      children = _ref5.children;
  return React.createElement(Consumer, null, function (_ref6) {
    var language = _ref6.language,
        labels = _ref6.labels;
    var finalLabels = list.reduce(function (obj, l) {
      obj[l] = labels[language][l];
      return obj;
    }, {});
    return children(_objectSpread({}, finalLabels));
  });
};
GetLabels.propTypes = {
  list: PropTypes.array.isRequired,
  children: PropTypes.func
};
var ChangeLanguage = function ChangeLanguage(_ref7) {
  var children = _ref7.children;
  return React.createElement(Consumer, null, function (_ref8) {
    var changeLanguage = _ref8.changeLanguage;
    return children({
      changeLanguage: changeLanguage
    });
  });
};
ChangeLanguage.propTypes = {
  children: PropTypes.func
};
var ChangeLabels = function ChangeLabels(_ref9) {
  var children = _ref9.children;
  return React.createElement(Consumer, null, function (_ref10) {
    var changeLabels = _ref10.changeLabels;
    return children({
      changeLabels: changeLabels
    });
  });
};
ChangeLabels.propTypes = {
  children: PropTypes.func
};

export { LabelsProvider, Label, GetLabel, GetLabels, ChangeLanguage, ChangeLabels };
