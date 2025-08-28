export const App = () => {
const [loader, setLoader] = useState(false);

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "black",
    fontFamily: "Arial, sans-serif",
    margin: "auto",
    display: "flex",
    justifyContent: "center"
  }

  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <>
      {loader ? <Loader /> : (
        <>
          <NavLink
            to="/todoApp"
            style={({isActive}) => ({
              ...titleStyle,
              display: isActive ? "none" : "block"
            })}
          >
            Todo App
          </NavLink>
        </>
      )}
    </>
  );
};
