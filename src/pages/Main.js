import React from "react";
import { Button, Grid } from "../elements/index";
import { history } from "../redux/configureStore";

const Main = () => {
  return (
    <React.Fragment>
      <Grid>
        <Grid padding="16px">
          <Button
            text="PostList보기"
            _onClick={() => {
              history.push("/postlist");
            }}
          ></Button>
          &nbsp;
          <Button
            text="성격테스트"
            _onClick={() => {
              history.push("/mytest");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Main;
