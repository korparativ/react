import React, {useState} from 'react';

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]);
        
        function handleRemoveClick(id) {
            setComments(comments.filter(comment => comment.id !== id))
          };

    return ( 
        <div className='CommentList'>
            
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.text}<button id={comment.id} onClick={() => handleRemoveClick(comment.id)}>Удалить</button></li>
                ))}
            
        </div>
     );
}

export default CommentsList;