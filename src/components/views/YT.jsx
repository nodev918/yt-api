import React from "react";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


export default function YT() {
  //var   //function
  const [data, setData] = React.useState([]);

  const useStyle = makeStyles(()=>({
    test:{
        padding:'30px'
    }
  }))

  const classes = useStyle()

  

  React.useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%20&chart=mostPopular&maxResults=10&key=AIzaSyCvqVARKsbw49Qv-0yUJQjKYVFew2IVfSQ"
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setData(data.items);
      });
  }, []);

  //JSX
  return (
    <Grid 
    className={classes.test}
    container 
    spacing="3" 
    alignItems="flex-start" 
    justifyContent="center"
    >
      {data.map((item) => {
        return (
          <Grid item xs="12" md="4" sm="6" lg="3" key={item.id}>
            <Card
              value={{
                channelTitle: item.snippet.channelTitle,
                title: item.snippet.title,
                publishedAt: item.snippet.publishedAt,
                description: item.snippet.description,
                url: item.snippet.thumbnails.high.url,
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
