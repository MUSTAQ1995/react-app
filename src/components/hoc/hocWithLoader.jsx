
const hocWithLoader = (WrappedComponent) => {
  return ({ isLoading, ...otherPorps}) =>{
    if(isLoading) return <p>Loading....</p>
    return <WrappedComponent {...otherPorps} />
  }
}

export default hocWithLoader
