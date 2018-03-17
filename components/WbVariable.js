
import { MJMLElement, helpers } from 'mjml-core'
import React, { Component } from 'react'

const tagName = 'wb-variable'
const parentTag = ['mj-container']
const endingTag = true
const defaultMJMLDefinition = {
  content: '',
  attributes: {
    'name': null,
    'value': null,
    'delimiter': '#',
    'left-delimiter': null,
    'right-delimiter': null
  }
}


const postRender = $ => {

    // Finds all the input tags having class "wb-variable", obtains name and value of the variables and performs
    // the replacement of them inside the body of the e-mail
    $('input.wb-variable').each(function(){
        let variableName = $(this).attr('name');
        let variableValue = $(this).val();
        let leftDelimiter = ($(this).data('left-delimiter')) ? $(this).data('left-delimiter') : $(this).data('delimiter');
        let rightDelimiter = ($(this).data('right-delimiter')) ? $(this).data('right-delimiter') : $(this).data('delimiter');
        let bodyInnerHtml = $('body').html();
        let substitutionRegex = new RegExp(leftDelimiter + variableName + rightDelimiter, 'g');
        bodyInnerHtml = bodyInnerHtml.replace(substitutionRegex, variableValue);
        $('body').html(bodyInnerHtml);
    });

    // Removes the input tags
    $('input.wb-variable').remove();

    // Removes the conditions that sorrounded the input tag
    // automatically added by mjml for microsoft devices
    let bodyInnerHtml = $('body').html();
    bodyInnerHtml = bodyInnerHtml.replace(/<\!--\[if\smso[\s\S]+?endif\]--><\!--\[if\smso[\s\S]+?-->[\n\s]*/mg, '');
    $('body').html(bodyInnerHtml);

  return $
};

@MJMLElement
class WbVariable extends Component {

  render () {
    const { mjAttribute } = this.props

    return (
        <input type="hidden"
            className="wb-variable"
            name={mjAttribute('name')}
            value={mjAttribute('value')}
            data-delimiter={mjAttribute('delimiter')}
            data-left-delimiter={mjAttribute('left-delimiter')}
            data-right-delimiter={mjAttribute('right-delimiter')} />
    )
  }

}


WbVariable.tagName = tagName
WbVariable.parentTag = parentTag
WbVariable.endingTag = endingTag
WbVariable.defaultMJMLDefinition = defaultMJMLDefinition
WbVariable.postRender = postRender

export default WbVariable
