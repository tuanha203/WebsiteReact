import React, { useState, useRef } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { VscComment } from 'react-icons/vsc';
import { BiShareAlt } from 'react-icons/bi';
import './StatusCard.css';
import { useDispatch, useSelector } from 'react-redux';
import updateUsers from './actions/updateUsers';
import updateComments from './actions/updateComments';
function StatusCard(props) {
  const { name, url, statusCards, id } = props.userState.user;

  const [isOpenComment, setIsOpenComment] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const commentListRef = useRef([]);
  const disPatch = useDispatch();
  const users = useSelector((state) => state.users);
  const comments = useSelector((state) => state.comments);

  function handleClickLike() {
    const newUser = { ...props.userState.user };
    if (isLiked === false) {
      disPatch(
        updateUsers(() => {
          for (let i = 0; i < users.length; i++) {
            if (users[i].id === newUser.id) {
              newUser.statusCards.likes++;
              return [...users.slice(0, i), newUser, ...users.slice(i + 1)];
            }
          }
        }),
      );
    } else {
      disPatch(
        updateUsers(() => {
          for (let i = 0; i < users.length; i++) {
            if (users[i].id === newUser.id) {
              newUser.statusCards.likes--;
              return [...users.slice(0, i), newUser, ...users.slice(i + 1)];
            }
          }
        }),
      );
    }

    setIsLiked(!isLiked);
  }

  function handleInputComment(e) {
    if (e.target.value.trim() != '') {
      if (e.keyCode == 13) {
        let newComment = {
          id,
          name: 'Sherlock',
          url:
            'https://yt3.ggpht.com/ytc/AAUvwnjIcdBYKWiRzC25WYws-5Gv6_iG8eHTXFWBQ2eD=s900-c-k-c0x00ffffff-no-rj',
          content: e.target.value,
        };
        disPatch(
          updateComments(() => {
            return [newComment, ...comments];
          }),
        );
        e.target.value = '';
      }
    }
  }

  function handleOpenComment() {
    setIsOpenComment(!isOpenComment);
  }

  function computeComment() {
    commentListRef.current = comments.filter((comment) => comment.id === id);
  }

  computeComment();

  return (
    <div className="StatusCard">
      <div className="title">
        <img src={url} alt="" />
        <div className="user-infor">
          <h4 className="name">{name}</h4>
          <span className="time">{statusCards.time}</span>
        </div>
        <button>
          <MdExpandMore size={30} />
        </button>
      </div>
      <div className="content-status">{statusCards.content}</div>
      <div className="interact-number">
        <div className="like-number">
          <AiFillLike size={21} style={{ color: 'rgb(19,204,211)' }} />
          <span>
            {isLiked
              ? `You and ${statusCards.likes - 1} others like`
              : `${statusCards.likes}`}
          </span>
        </div>
        <div className="comment-share--number">
          <span>{commentListRef.current.length} Comments</span>
          <span>{statusCards.shares} Shares</span>
        </div>
      </div>
      <div className="btn-react">
        <button
          onClick={() => {
            handleClickLike();
          }}
          className={isLiked ? 'is-liked' : ''}
        >
          {isLiked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
          Like
        </button>
        <button onClick={handleOpenComment}>
          <VscComment size={20} /> Comment
        </button>
        <button>
          <BiShareAlt size={20} /> Share
        </button>
      </div>
      {isOpenComment ? (
        <div className="comment">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              return false;
            }}
          >
            <img
              src="https://yt3.ggpht.com/ytc/AAUvwnjIcdBYKWiRzC25WYws-5Gv6_iG8eHTXFWBQ2eD=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <input
              onKeyUp={handleInputComment}
              type="text"
              placeholder="Write some text..."
            />
          </form>
          <ul className="comment-list">
            {commentListRef.current.map((comment, index) => {
              return (
                <li className="comment-user" key={index}>
                  <img src={comment.url} alt="" />
                  <div className="comment-content">
                    <h4>{comment.name}</h4>
                    <p>{comment.content}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default StatusCard;
