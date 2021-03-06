/** @jsx jsx */
import { NextFC } from 'next';
import { jsx } from '@emotion/core';
import Link from 'next/link';
import Layout from '../components/Layout';

const Posts = [
  {id: 1, title: 'Ruby'},
  {id: 2, title: 'TypeScript'},
  {id: 3, title: 'Go'},
  {id: 4, title: 'Python'},
];


const PostLink: NextFC<{ title: string }> = ({ title }) => (
  <Link
    as={`/post/${title}`}
    href={{ pathname: '/post', query: { title } }}
  ><a>{title}</a></Link>
);

const PostList: NextFC = () => {
  return (
    <Layout title="list page">
      <h1>リストページ</h1>
      <ul>
        {Posts.map(post => (
          <li key={post.id}><PostLink title={post.title} /></li>
        ))}
      </ul>
    </Layout>
  )
}

export default PostList;