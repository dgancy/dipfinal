import React, { Component } from 'react'

class Box extends Component {
render(){
	const { height, width, bc } = this.props.attrs
	const style = { width: `${width}em`, height:`${height}em`, backgroundColor:bc}
	return(
	<div style={style} />
	)
}
}

export default Box


const {a, b, n}=this.props.attrs
const A={a: `${a}`}
const B={b: `${b}`}
const N={n: `${n}`}