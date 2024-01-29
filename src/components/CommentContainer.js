import React from 'react'
import Comment from './Comment'
const commentData=[
  {
  name:"keshav kumar singh",
  text:"loreem ipsom dore",
  replies:[{
    name:"keshav kumar singh",
    text:"loreem ipsom dore",
    replies:[
      {
        name:"keshav kumar singh",
        text:"loreem ipsom dore",
        replies:[]
        }
    ]
    }]
  },
  {
    name:"keshav kumar singh",
    text:"loreem ipsom dore",
    replies:[{
      name:"keshav kumar singh",
      text:"loreem ipsom dore",
      replies:[
        {
          name:"keshav kumar singh",
          text:"loreem ipsom dore",
          replies:[{
            name:"keshav kumar singh",
            text:"loreem ipsom dore",
            replies:[{
              name:"keshav kumar singh",
              text:"loreem ipsom dore",
              replies:[]
              }]
            }]
          }
      ]
      }]
  },
  {
    name:"keshav kumar singh",
    text:"loreem ipsom dore",
    replies:[{
      name:"keshav kumar singh",
      text:"loreem ipsom dore",
      replies:[{
        name:"keshav kumar singh",
        text:"loreem ipsom dore",
        replies:[]
        }]
      }]
  },
  {
    name:"keshav kumar singh",
    text:"loreem ipsom dore",
    replies:[
      {
        name:"keshav kumar singh",
        text:"loreem ipsom dore",
        replies:[{
          name:"keshav kumar singh",
          text:"loreem ipsom dore",
          replies:[{
            name:"keshav kumar singh",
            text:"loreem ipsom dore",
            replies:[]
            }]
          }]
      }
    ]
    },
    {
      name:"keshav kumar singh",
      text:"loreem ipsom dore",
      replies:[
        {
          name:"keshav kumar singh",
          text:"loreem ipsom dore",
          replies:[{
            name:"keshav kumar singh",
            text:"loreem ipsom dore",
            replies:[]
            }]
          }
      ]
    },
    {
      name:"keshav kumar singh",
      text:"loreem ipsom dore",
      replies:[{
        name:"keshav kumar singh",
        text:"loreem ipsom dore",
        replies:[{
          name:"keshav kumar singh",
          text:"loreem ipsom dore",
          replies:[]
          }]
        }]
    },
]

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className='pl-5 border border-l-red-500 ml-5'>
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comment:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
