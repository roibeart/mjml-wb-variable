'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _mjmlCore = require('mjml-core');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tagName = 'wb-variable';
var parentTag = ['mj-container'];
var endingTag = true;
var defaultMJMLDefinition = {
  content: '',
  attributes: {
    'name': null,
    'value': null,
    'delimiter': '#',
    'left-delimiter': null,
    'right-delimiter': null
  }

  //const componentId = Math.floor((Math.random() * 1000000000) + 1);

};var postRender = function postRender($) {

  /*
  <!-- [2548] LINK: http://www.wasabit.it -->
  let variableRegex = new RexExp("/<!--s[" + componentId + "]s(.+?):s(.+?)s-->/g");
  let match = variableRegex.exec(bodyInnerHtml);
  let variableName = match[1];
  let variableValue = match[2];
  */

  /*let variableInput = $('input[data-id='+componentId+']');
  if (variableInput.length > 1)
  {
      $('body').html('Sorry, there was an unexpected error. Please recompile');
  }
  else
  {
      let variableName = variableInput.attr('name');
      let variableValue = variableInput.val();
      let bodyInnerHtml = $('body').html();
       let substitutionRegex = new RegExp("#"+ variableName +"#", 'g')
      bodyInnerHtml = bodyInnerHtml.replace(substitutionRegex, variableValue);
      $('body').html(bodyInnerHtml);
  }*/

  // Cerca tutti gli input con classe 'wb.variable', ottiene nome e valore delle variabili e fa la sostituzione
  $('input.wb-variable').each(function () {
    var variableName = $(this).attr('name');
    var variableValue = $(this).val();
    var leftDelimiter = $(this).data('left-delimiter') ? $(this).data('left-delimiter') : $(this).data('delimiter');
    var rightDelimiter = $(this).data('right-delimiter') ? $(this).data('right-delimiter') : $(this).data('delimiter');
    var bodyInnerHtml = $('body').html();
    var substitutionRegex = new RegExp(leftDelimiter + variableName + rightDelimiter, 'g');
    bodyInnerHtml = bodyInnerHtml.replace(substitutionRegex, variableValue);
    $('body').html(bodyInnerHtml);
  });

  // Rimuove gli input
  $('input.wb-variable').remove();

  // Rimuove i commenti ie aggiunti in automatico da mjml
  var bodyInnerHtml = $('body').html();
  bodyInnerHtml = bodyInnerHtml.replace(/<\!--\[if\smso[\s\S]+?endif\]--><\!--\[if\smso[\s\S]+?-->[\n\s]*/mg, '');
  $('body').html(bodyInnerHtml);

  return $;
};

var WbVariable = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {
  _inherits(WbVariable, _Component);

  function WbVariable() {
    _classCallCheck(this, WbVariable);

    return _possibleConstructorReturn(this, (WbVariable.__proto__ || Object.getPrototypeOf(WbVariable)).apply(this, arguments));
  }

  _createClass(WbVariable, [{
    key: 'render',
    value: function render() {
      var mjAttribute = this.props.mjAttribute;


      return _react2.default.createElement('input', { type: 'hidden',
        className: 'wb-variable',
        name: mjAttribute('name'),
        value: mjAttribute('value'),
        'data-delimiter': mjAttribute('delimiter'),
        'data-left-delimiter': mjAttribute('left-delimiter'),
        'data-right-delimiter': mjAttribute('right-delimiter') });
    }
  }]);

  return WbVariable;
}(_react.Component)) || _class;

WbVariable.tagName = tagName;
WbVariable.parentTag = parentTag;
WbVariable.endingTag = endingTag;
WbVariable.defaultMJMLDefinition = defaultMJMLDefinition;
WbVariable.postRender = postRender;

exports.default = WbVariable;