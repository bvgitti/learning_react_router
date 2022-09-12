import Layout from "./layout";
import Home from "./home";
import PostPage from "./postPage";
import NewPost from "./newPost";
import About from "./about";
import Missing from "./missing";
import { Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='post'>
          <Route index element={<PostPage />} />
          <Route path='new' element={<NewPost />} />
        </Route>
        <Route path='about' element={<About />}/>
        <Route path='*' element={<Missing />}/>
      </Route>
    </Routes>
  )
};