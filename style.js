const estilo={

      text: {
        position:"absolute",
        bottom:"0",
        left:"0",
        p:"1em",
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:['xs','sm', 'md', 'lg'],
      },
      text2: {

        position:"absolute",
        bottom:"0",
        right:"0",
        p:"4",
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:['sm', 'md', 'lg']
      },
      zoom:{
        position: "absolute",  
        zIndex: 1,
        left: `50% `,
        transform: "translateX(-50%)",       
        color:'white',
        justifyContent:'space-between',
        wrap:'wrap'
    },
    boton: {
        position:"absolute",
        bottom:"0",
        left:"0",
        right:"0",
        bg:'rgba(0, 0, 0, 0.6)',
        w:'1em'
      },
      boton2: {
        textAlign:'center',
        color:'white',
        marginLeft:'45%',
        bg:'transparent'
      },
    descrp:{
      position:"absolute",
      top:'0',
      left:"0",
      right:"0",
      zIndex:'15',
      bottom:"0",
    },
    input:{
      margin:'15',
      color:'white',
      variant:'filled',
      marginBottom:'3em',
      width:['sm', 'md', 'lg'],
      borderRadius:'5',
      height:'3em',
      paddingLeft:'5',
      position:'fixed',
      zIndex:'1'
    }
}

export {estilo}