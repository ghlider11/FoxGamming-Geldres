import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  itemList: {
    margin:{
        top:10,
        bottom:100,
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
    fontSize: 14,
    
  },verdt: {
    padding:6
    
  },
  price: {
    fontSize: 10,
    fontWeight: "bold"
  },
  detailtitle:{
    fontSize: 10,
    color:"white"
  }
});

export default useStyles