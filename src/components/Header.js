import React from "react";
import { Grid, Text, Button } from "../elements/index";
import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
const Header = (props) => {
  const dispatch = useDispatch();

  //유저 정보가 있는지, 토큰이 있는지 체크
  const user_info = useSelector((state) => state.user.user);
  //세션이 있나 체크
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  console.log(is_session);

  if (is_session && user_info) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              {" "}
              진백 연습소{" "}
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="내정보"></Button>
            &nbsp;
            <Button text="알림"></Button>
            &nbsp;
            <Button
              text="로그아웃"
              _onClick={() => {
                dispatch(userActions.logoutFB());
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            {" "}
            진백 연습소{" "}
          </Text>
        </Grid>

        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
          ></Button>
          &nbsp;
          <Button
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
