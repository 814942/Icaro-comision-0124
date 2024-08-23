// eslint-disable-next-line react/prop-types
const Title = ({ children, name }) => {
  console.log("🚀 ~ name:", name)
  return <div id='Title'>
    	{children}
  	</div>
}

export default Title