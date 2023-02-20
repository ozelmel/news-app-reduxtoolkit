import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import { useEffect } from "react";
import { clearNewsList, getNews } from "../features/newsSlice";

const News = () => {
  const dispatch = useDispatch();
  const { newsList, loading } = useSelector((state) => state.news);
  console.log(loading);

  useEffect(() => {
    dispatch(getNews());
    return () => {
       dispatch(clearNewsList())
     }
  }, []);

  return (
    <>
      {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>
      )}
      {!loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {newsList?.map((item, index) => (
            <Card
              sx={{
                maxWidth: 345,
                m: 5,
                maxHeight: 600,
              }}
              key={index}
            >
              <CardMedia
                component="img"
                height="250"
                image={
                  item?.urlToImage ??
                  "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
                }
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {" "}
                  {item?.title ??
                    "Tesla disables gaming while driving feature"}{" "}
                </Typography>{" "}
                <Typography variant="body2" color="text.secondary">
                  {" "}
                  {item?.content ??
                    "It follows an inquiry into Passenger Play, which allowed games to be played while a car was moving."}{" "}
                </Typography>{" "}
              </CardContent>{" "}
              <CardActions>
                <Button size="small"> Share </Button>{" "}
                <Button size="small" href={item?.url} target="_blank">
                  Detail{" "}
                </Button>{" "}
              </CardActions>{" "}
            </Card>
          ))}{" "}
        </Box>
      )}
    </>
  );
};

export default News;
