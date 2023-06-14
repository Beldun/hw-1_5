import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import CreatePostPage from './pages/CreatePostPage';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/posts" index element={<PostListPage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
