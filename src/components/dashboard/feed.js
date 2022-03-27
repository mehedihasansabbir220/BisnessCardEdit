import React, {
  Component,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostByStoreId } from '../../action/post';
import Post from '../article/post';
import PostPlaceHolder from '../article/poshPH';

/**
 * Dash board feed
 */
const Feed = props => {
  const { auth, getPostByStoreId, loadMore } = props;
  const [posts, setPosts] = useState([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  // let from = 0;
  // let to = 0;
  // let isValid = true;
  let isLoading = false;

  // useImperativeHandle(ref, () => ({
  //   showAlert() {
  //     alert('Child Function Called');
  //   },
  // }));

  props.hookCallback(async () => {
    await loadPost();
  });
  useEffect(() => {
    (async () => {
      await loadPost();
      if (loadMore) {
        console.log(loadPost);
        await loadPost();
        loadMore = false;
      }
    })();
  }, []);

  const loadPost = async () => {
    isLoading = true;
    const req = {
      storeId: 0,
      from: from,
      to: to,
    };

    const postRes = await getPostByStoreId(req);
    console.log(postRes);
    if (postRes && postRes.data.length > 0) {
      setFrom(postRes.from);
      setTo(postRes.to);
      // to = postRes.to;
      const data = postRes.data;
      setPosts(posts => posts.concat(data));
    }
    isLoading = false;
  };

  const reloadPost = async () => {
    // from = 0;
    // to = 0;
    setFrom(0);
    setTo(0);
    isLoading = true;
    console.log(from);
    console.log(to);
    const req = {
      storeId: 0,
      from: from,
      to: to,
    };

    const postRes = await getPostByStoreId(req);
    console.log(postRes);
    if (postRes && postRes.data.length > 0) {
      // from = postRes.from;
      // to = postRes.to;
      setFrom(postRes.from);
      setTo(postRes.to);
      const data = postRes.data;
      setPosts(data);
    }
    isLoading = false;
  };
  const onScroll = () => {
    console.log('scroll');
  };

  return (
    <div className="posts-section" id="posts" onScroll={onScroll}>
      {posts.map(post => (
        <Post key={parseInt(Math.random() * 1e6)} data={post} />
      ))}
      {isLoading && <PostPlaceHolder />}
    </div>
  );
};

Feed.propTypes = { auth: PropTypes.object.isRequired };

const mapStateToProps = state => ({ auth: state.auth });

const mapDispatchToProps = { getPostByStoreId };

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
