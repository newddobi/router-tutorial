import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    {/* NavLink 는 Link 랑 비슷한데, 만약 현재 경로와 Link 에서 사용하는 경로가 일치하는 경우 
                    특정 스타일 혹은 클래스를 적용 할 수 있는 컴포넌트입니다. */}
                    <NavLink
                        to="/profiles/velopert"
                        activeStyle={{ background: "black", color: "white" }}
                    >
                        velopert
                    </NavLink>
                    {/* <Link to="/profiles/velopert">velopert</Link> */}
                </li>
                <li>
                    <NavLink
                        to="/profiles/gildong"
                        activeStyle={{ background: "black", color: "white" }}
                    >
                        gildong
                    </NavLink>
                    {/* <Link to="/profiles/gildong">gildong</Link> */}
                </li>
            </ul>

            {/* component 대신에 render 가 사용되었는데요, 
            여기서는 컴포넌트가 아니라, JSX 자체를 렌더링 할 수 있습니다. 
            JSX 를 렌더링하는 것이기에, 상위 영역에서 props 나 기타 값들을 필요하면 전달 해 줄 수있습니다. */}
            <Route
                path="/profiles"
                exact
                render={() => <div>유저를 선택해주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
            {/* withRouter HoC 는 라우트 컴포넌트가 아닌곳에서 match / location / history 를 사용해야 할 때 쓰면 됩니다. */}
            {/* withRouter 를 사용하면, 자신의 부모 컴포넌트 기준의 match 값이 전달됩니다.  */}
            <WithRouterSample />
        </div>
    );
};

export default Profiles;
