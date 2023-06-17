import { createBrowserRouter } from "react-router-dom";
import Posts from "../features/post/Posts";
import SinglePost from "../features/post/SinglePost";
import CreatePost from "../features/post/CreatePost";
import EditPost from "../features/post/EditPost";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Posts />
    },
    {
        path: "/:id",
        element: <SinglePost />
    },
    {
        path: "/create",
        element: <CreatePost />
    },
    {
        path: "/edit/:id",
        element: <EditPost />
    }
]);

export default router;