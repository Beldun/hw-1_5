import { useState } from 'react';

const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    return (
      <div>
          <form>
              <input type="text" placeholder="Заголовок поста: " value={title} onChange={handleTitleChange} />
              <input type="text" placeholder="Описание поста: " value={body} onChange={handleBodyChange} />
              <button type="submit">Создать пост</button>
          </form>
      </div>
  );
};

export default CreatePostPage;
