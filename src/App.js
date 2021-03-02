import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import HistorySample from "./HistorySample";
import Home from "./Home";
import Profiles from "./Profiles";

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    {/* a 태그의 기본적인 속성은 페이지를 이동시키면서, 페이지를 아예 새로 불러오게됩니다. 
                    그렇게 되면서 우리 리액트 앱이 지니고있는 상태들도 초기화되고, 
                    렌더링된 컴포넌트도 모두 사라지고 새로 렌더링을 하게됩니다. 
                    그렇기 때문에 a 태그 대신에 Link 컴포넌트를 사용하는데요, 
                    이 컴포넌트는 HTML5 History API 를 사용하여 브라우저의 주소만 바꿀뿐 페이지를 새로 불러오지는 않습니다. */}
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필 목록</Link>
                </li>
                <li>
                    <Link to="/history">예제</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={HistorySample} />
                <Route
                    // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
                    render={({ location }) => (
                        <div>
                            <h2>이 페이지는 존재하지 않습니다:</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                />
            </Switch>
        </div>
    );
};

export default App;
