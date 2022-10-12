
export const avatar_style = {
    home :{
        width: 250,
        height: 250,
        boxShadow: 4,
        '@media (max-width:1368px)':{
            width: 200,
            height: 200,
        },
        '@media (max-width:725px)':{
            width: 150,
            height: 150,
        }
    }
}

export const codeIcon = {
    skills: {
        fontSize: '100px',
        '@media (max-width:725px)':{
            fontSize: '60px',
        }
    },
    technologies:{
        fontSize: '5rem',
        color: '#172135'
    }
}

export const skillsList ={
    list: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        flexFlow: 'column wrap',
        alignContent: 'space-evenly',
        maxHeight: 270,
        overflow: 'none',
        '@media (max-width:1350px)':{
            alignContent: 'flex-end',
        },
        '@media (max-width:1250px)':{
            alignContent: 'flex-end',
            fontSize: '16px',
        },'@media (max-width:1150px)':{
            alignContent: 'space-around',
            maxHeight: 340,
        },'@media (max-width:950px)':{
            alignContent: 'flex-end',
            maxHeight: 350,
        },'@media (max-width:800px)':{
            alignContent: 'flex-start',
            maxHeight: 350,
        },'@media (max-width:725px)':{
            alignContent: 'center',
            maxHeight: 300,
        },'@media (max-width:650px)':{
            maxHeight: 330,
        },'@media (max-width:580px)':{
            maxHeight: 350,
        },'@media (max-width:374px)':{
            maxHeight: 800,
        }
    },
    item: {
        wordWrap: 'break-word',
        marginRight: '1rem',
        maxWidth:300,
        textAlign: 'center',
        '@media (max-width:1250px)':{
            maxWidth:270,
            width: '100%',
        },
        '@media (max-width:725px)':{
            maxWidth:240
        },'@media (max-width:650px)':{
            maxWidth:220
        },'@media (max-width:580px)':{
            maxWidth:180
        },'@media (max-width:460px)':{
            maxWidth:150
        }
    },
    text: {
        wordWrap: 'break-word',
        
        '@media (max-width:725px)':{
            fontSize: '13px',
        }
    },
    icon: {
        right: 0
    }
}

export const projectCardStyle = {
    position: 'relative',
    height: 380,
    maxWidth: 345,
    boxShadow: 4,
    background: 'radial-gradient(circle at 10% 20%, rgba(226, 247, 238, 0.445) 0.1%, rgba(238, 224, 224, 0.349) 90.1%);',
    '@media (max-width:500px)':{
        height: 400
    },
    '@media (max-width:360px)':{
        height: 500
    }
}


export const projectCardGitIcon = {
    text: {
        fontSize: '2rem',
        '@media (max-width:500px)':{
            fontSize: '1.7rem',
        }
    },
    button:{
        all:'unset',
        cursor: 'pointer',
        '*:focus': {
            outline: 'none'
        },'&:hover':{
            backgroundColor: 'transparent'
        }
    },
    buttonTxt:{
        cursor: 'pointer',
        color: '#0971f1',
        '*:focus': {
            outline: 'none'
        },'&:hover':{
            backgroundColor: 'transparent'
        }
    }
}

/**
 * ================================================================= NAVBAR STYLE ================================================
 */

export const nav_mobile_style = {
    textAlign: 'center'
}

export const list_item_mobile = {
    fontFamily: 'Arial',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '10px'
}

export const navbar_style = {
    background: 'linear-gradient(to left top,#02AABD, #00CDAC)'
}

export const button_navbar = {
        color: '#fff',
        fontWeight: '550',
        borderRadius: '40px',
        marginRight: '30px',
        padding: '7px',
        ':hover':{
            backgroundColor: '#02AABD'
        }
    }
