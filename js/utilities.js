function getInputFieldValueById(inputId)
{
    const inputField= document.getElementById(inputId);
    const inputFieldValue= parseFloat(inputField.value);
    inputField.value='';
    return inputFieldValue;
}

function getTextElementValueById(elementId)
{
    const textElement= document.getElementById(elementId);
    const textElementValue= parseFloat(textElement.innerText);
    textElement.value='';
    return textElementValue;
}

function setTextElementValueById(elementId, newValue)
{
    const textElement= document.getElementById(elementId);
    textElement.innerText= newValue;
}
