// creating all globall compoents
// Layout
function Layout({Childern}){
    const styles={
        colour:"white",
        backgroundColour:"black"
    }
    return(<div style={styles}>
        {Childern}
        </div>)
}
export default Layout