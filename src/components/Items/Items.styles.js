import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  itemList: {
    margin:{
        top:10,
        bottom:5,
        left:4,
        right:5,
    },
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    width: 150,
    height: 150,
    backgroundColor: '#42E0AD',
    borderRadius: 3
  },
  title: {
    fontSize: 14
  },
  price: {
    fontSize: 10,
    fontWeight: "bold"
  }
});

export default useStyles