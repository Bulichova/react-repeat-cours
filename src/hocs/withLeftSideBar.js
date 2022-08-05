import Sidebar from '../component/SideBar'
import Header from '../component/Header'

const withLeftSideBar = (Component) => {
  const WrappedComponent = () => {
    return (
      <>
        <Sidebar />
        <Header/>
        <Component />
      </>
    )
  }
  return WrappedComponent
}

export default withLeftSideBar
