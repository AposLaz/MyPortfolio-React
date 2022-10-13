import React from 'react'
import styled from 'styled-components'

const EditButtonStyle = styled.button`
    color: ${ props => props.outline ? 'var(--btn-color-outlined)' : 'var(--btn-color)'};
    background-color: ${ props => props.outline ? 'var(--btn-color)' : 'var(--btn-color-outlined)'};
    box-shadow: 5px 5px 10px var(--btn-shadow-green-1);

    &:before{
        border: 3px solid var(--btn-color);
        box-shadow: 0 0 60px var(--btn-shadow-green-1);
    }
`
function EditButton({btnText,outline=false,action}) {
  return (  
    <EditButtonStyle outline={outline} className='button-component' onClick={()=>{action()}}>
         {btnText}
    </EditButtonStyle>
  )
}

export default EditButton