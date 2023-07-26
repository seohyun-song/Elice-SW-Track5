// 라우팅할 path, element 작성가능 children속성으로 배열에 중접된 라우터 추가 가능
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import List from "./Pages/List";
import Detail from "./Pages/Detail";
import PageNotFound from "./Pages/PageNotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "list",
				element: <List />,
			},
			{
				path: "detail",
				element: <Detail />,
			},
			{
				path: "*",
				element: <PageNotFound />,
			},
		],
	},
]);

export default router;
